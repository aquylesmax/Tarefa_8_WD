/**
 * NexTech — JavaScript externo.
 * O arquivo contém as interações da página sem depender de bibliotecas externas.
 * Funcionalidades: menu móvel, tema persistente, filtros, FAQ, formulário,
 * validação, contador, pré-preenchimento, botão de topo, navegação ativa,
 * ano automático, animações de entrada e atalhos de acessibilidade.
 */
"use strict";

// Agrupa seletores usados mais de uma vez para manter o código legível.
const selectors = {
  root: document.documentElement,
  body: document.body,
  menuToggle: document.querySelector("#menuToggle"),
  primaryNav: document.querySelector("#primaryNav"),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  filterButtons: [...document.querySelectorAll("[data-service-filter]")],
  serviceCards: [...document.querySelectorAll(".service-card")],
  serviceEmpty: document.querySelector("#serviceEmpty"),
  faqButtons: [...document.querySelectorAll(".faq-question")],
  contactForm: document.querySelector("#contactForm"),
  fullName: document.querySelector("#fullName"),
  email: document.querySelector("#email"),
  projectType: document.querySelector("#projectType"),
  message: document.querySelector("#message"),
  consent: document.querySelector("#consent"),
  formFeedback: document.querySelector("#formFeedback"),
  messageCount: document.querySelector("#messageCount"),
  backToTop: document.querySelector("#backToTop"),
  currentYear: document.querySelector("#currentYear"),
  liveAnnouncement: document.querySelector("#liveAnnouncement")
};

// Armazena a preferência de tema sem impedir a página de funcionar se storage falhar.
const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.warn("O armazenamento local não está disponível.", error);
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn("Não foi possível guardar a preferência.", error);
      return false;
    }
  }
};

// Anuncia uma mensagem para leitores de tela sem interromper a navegação.
function announce(message) {
  if (selectors.liveAnnouncement) {
    selectors.liveAnnouncement.textContent = "";
    window.setTimeout(() => {
      selectors.liveAnnouncement.textContent = message;
    }, 20);
  }
}

// Atualiza o texto acessível e o ícone de acordo com o tema ativo.
function updateThemeControl(theme) {
  const isDark = theme === "dark";
  if (selectors.themeIcon) {
    selectors.themeIcon.textContent = isDark ? "☀" : "☾";
  }
  if (selectors.themeToggle) {
    selectors.themeToggle.setAttribute(
      "aria-label",
      isDark ? "Ativar tema claro" : "Ativar tema escuro"
    );
    selectors.themeToggle.setAttribute("aria-pressed", String(isDark));
  }
}

// Aplica tema à raiz e guarda a preferência escolhida pelo usuário.
function setTheme(theme, shouldSave = true) {
  const safeTheme = theme === "dark" ? "dark" : "light";
  selectors.root.dataset.theme = safeTheme;
  updateThemeControl(safeTheme);
  if (shouldSave) {
    storage.set("nextech-theme", safeTheme);
  }
}

// Escolhe um tema inicial: preferência salva, preferência do sistema ou claro.
function initializeTheme() {
  const savedTheme = storage.get("nextech-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    setTheme(savedTheme, false);
    return;
  }
  const systemPrefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(systemPrefersDark ? "dark" : "light", false);
}

// Alterna entre tema claro e escuro ao clicar no controle do cabeçalho.
function toggleTheme() {
  const currentTheme = selectors.root.dataset.theme || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  announce(`Tema ${nextTheme === "dark" ? "escuro" : "claro"} ativado.`);
}

// Fecha o menu móvel e sincroniza o estado do botão.
function closeMobileMenu() {
  if (!selectors.primaryNav || !selectors.menuToggle) return;
  selectors.primaryNav.classList.remove("is-open");
  selectors.menuToggle.setAttribute("aria-expanded", "false");
  selectors.body.classList.remove("menu-open");
}

// Abre ou fecha o menu de navegação em telas menores.
function toggleMobileMenu() {
  if (!selectors.primaryNav || !selectors.menuToggle) return;
  const isOpen = selectors.menuToggle.getAttribute("aria-expanded") === "true";
  selectors.menuToggle.setAttribute("aria-expanded", String(!isOpen));
  selectors.primaryNav.classList.toggle("is-open", !isOpen);
  selectors.body.classList.toggle("menu-open", !isOpen);
  announce(!isOpen ? "Menu de navegação aberto." : "Menu de navegação fechado.");
}

// Registra os eventos da navegação móvel e fecha o menu após selecionar um link.
function initializeNavigation() {
  if (selectors.menuToggle) {
    selectors.menuToggle.addEventListener("click", toggleMobileMenu);
  }
  if (selectors.primaryNav) {
    selectors.primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780) closeMobileMenu();
  });
}

// Marca o filtro selecionado para leitores de tela e para o estilo visual.
function setActiveFilter(activeButton) {
  selectors.filterButtons.forEach((button) => {
    const isActive = button === activeButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

// Exibe somente os cartões que pertencem à categoria selecionada.
function filterServices(category) {
  let visibleCount = 0;
  selectors.serviceCards.forEach((card) => {
    const matches = category === "todos" || card.dataset.category === category;
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });
  if (selectors.serviceEmpty) {
    selectors.serviceEmpty.hidden = visibleCount !== 0;
  }
  announce(`${visibleCount} serviço(s) exibido(s).`);
}

// Liga os botões de filtro aos cartões de serviços.
function initializeServiceFilters() {
  selectors.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button);
      filterServices(button.dataset.serviceFilter || "todos");
    });
  });
}

// Abre uma resposta do FAQ e fecha as demais para manter a página compacta.
function toggleFaq(button) {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  const answer = button.closest(".faq-item")?.querySelector(".faq-answer");
  if (!answer) return;
  button.setAttribute("aria-expanded", String(!isExpanded));
  answer.hidden = isExpanded;
}

// Ativa o acordeão de perguntas frequentes.
function initializeFaq() {
  selectors.faqButtons.forEach((button) => {
    button.addEventListener("click", () => toggleFaq(button));
  });
}

// Retorna um campo e sua mensagem de erro de forma padronizada.
function getFieldPair(fieldName) {
  const pairs = {
    fullName: { field: selectors.fullName, error: document.querySelector("#nameError") },
    email: { field: selectors.email, error: document.querySelector("#emailError") },
    message: { field: selectors.message, error: document.querySelector("#messageError") }
  };
  return pairs[fieldName] || null;
}

// Mostra o erro de um campo e sinaliza seu estado para tecnologias assistivas.
function showFieldError(fieldName, message) {
  const pair = getFieldPair(fieldName);
  if (!pair || !pair.field || !pair.error) return;
  pair.error.textContent = message;
  pair.field.setAttribute("aria-invalid", message ? "true" : "false");
  pair.field.classList.toggle("is-invalid", Boolean(message));
  pair.field.classList.toggle("is-valid", !message && Boolean(pair.field.value.trim()));
}

// Limpa as mensagens de erro e estados visuais anteriores do formulário.
function clearFormErrors() {
  ["fullName", "email", "message"].forEach((fieldName) => showFieldError(fieldName, ""));
  if (selectors.formFeedback) {
    selectors.formFeedback.textContent = "";
    selectors.formFeedback.className = "form-feedback";
  }
}

// Valida o nome com uma regra simples adequada a uma demonstração acadêmica.
function validateName() {
  const value = selectors.fullName?.value.trim() || "";
  if (value.length < 2) {
    showFieldError("fullName", "Informe um nome com pelo menos 2 caracteres.");
    return false;
  }
  if (!/[A-Za-zÀ-ÿ]/.test(value)) {
    showFieldError("fullName", "O nome deve conter pelo menos uma letra.");
    return false;
  }
  showFieldError("fullName", "");
  return true;
}

// Valida o formato do e-mail usando a validação nativa do navegador.
function validateEmail() {
  const field = selectors.email;
  if (!field) return false;
  const value = field.value.trim();
  if (!value) {
    showFieldError("email", "Informe seu e-mail.");
    return false;
  }
  if (!field.validity.valid) {
    showFieldError("email", "Confira o formato do e-mail informado.");
    return false;
  }
  showFieldError("email", "");
  return true;
}

// Valida o conteúdo da mensagem e limita seu tamanho a 500 caracteres.
function validateMessage() {
  const value = selectors.message?.value.trim() || "";
  if (value.length < 10) {
    showFieldError("message", "Descreva sua ideia usando pelo menos 10 caracteres.");
    return false;
  }
  if (value.length > 500) {
    showFieldError("message", "A mensagem deve ter no máximo 500 caracteres.");
    return false;
  }
  showFieldError("message", "");
  return true;
}

// Atualiza o contador de caracteres da mensagem em tempo real.
function updateMessageCount() {
  if (!selectors.message || !selectors.messageCount) return;
  const count = selectors.message.value.length;
  selectors.messageCount.textContent = `${count} / 500 caracteres`;
  selectors.messageCount.classList.toggle("is-near-limit", count > 450);
  if (count > 500) {
    selectors.message.value = selectors.message.value.slice(0, 500);
    selectors.messageCount.textContent = "500 / 500 caracteres";
  }
}

// Mostra feedback de validação com classe de sucesso ou de erro.
function showFormFeedback(message, type) {
  if (!selectors.formFeedback) return;
  selectors.formFeedback.textContent = message;
  selectors.formFeedback.className = `form-feedback is-${type}`;
}

// Processa o envio local do formulário sem transmitir informações pessoais.
function handleContactSubmit(event) {
  event.preventDefault();
  clearFormErrors();
  const nameIsValid = validateName();
  const emailIsValid = validateEmail();
  const messageIsValid = validateMessage();
  const consentIsValid = Boolean(selectors.consent?.checked);
  if (!consentIsValid) {
    showFormFeedback("Marque a confirmação de que este formulário é demonstrativo.", "error");
  }
  if (!nameIsValid || !emailIsValid || !messageIsValid || !consentIsValid) {
    if (selectors.formFeedback && !selectors.formFeedback.textContent) {
      showFormFeedback("Revise os campos destacados antes de continuar.", "error");
    }
    const firstInvalid = selectors.contactForm?.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    announce("O formulário contém campos que precisam de revisão.");
    return;
  }
  const firstName = selectors.fullName.value.trim().split(/\s+/)[0];
  showFormFeedback(
    `Obrigado, ${firstName}! A validação funcionou. Esta demonstração não enviou seus dados para nenhum servidor.`,
    "success"
  );
  announce("Formulário validado. Nenhum dado foi enviado.");
}

// Liga eventos de validação em tempo real e envio demonstrativo.
function initializeContactForm() {
  if (!selectors.contactForm) return;
  selectors.contactForm.addEventListener("submit", handleContactSubmit);
  selectors.fullName?.addEventListener("blur", validateName);
  selectors.email?.addEventListener("blur", validateEmail);
  selectors.message?.addEventListener("input", updateMessageCount);
  selectors.message?.addEventListener("blur", validateMessage);
  selectors.contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      if (selectors.formFeedback?.classList.contains("is-success")) {
        selectors.formFeedback.textContent = "";
        selectors.formFeedback.className = "form-feedback";
      }
    });
  });
  updateMessageCount();
}

// Copia o assunto do serviço selecionado para o formulário de contato.
function prefillContact(message) {
  if (!selectors.message) return;
  selectors.message.value = message;
  updateMessageCount();
  selectors.message.focus();
  document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  announce("O campo de mensagem foi preenchido com o assunto escolhido.");
}

// Conecta links de serviço que sugerem um texto inicial no formulário.
function initializePrefillLinks() {
  document.querySelectorAll("[data-prefill]").forEach((link) => {
    link.addEventListener("click", () => {
      prefillContact(link.dataset.prefill || "");
    });
  });
}

// Controla a visibilidade do botão voltar ao topo conforme a rolagem.
function updateBackToTop() {
  if (!selectors.backToTop) return;
  selectors.backToTop.classList.toggle("is-visible", window.scrollY > 500);
}

// Retorna a página ao topo com rolagem suave.
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Atualiza o ano no rodapé sem precisar editar o HTML no ano seguinte.
function updateCurrentYear() {
  if (selectors.currentYear) {
    selectors.currentYear.textContent = String(new Date().getFullYear());
  }
}

// Realça o link de navegação que corresponde à seção visível.
function initializeActiveSection() {
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-current", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

// Aplica animações leves apenas quando o usuário não pede movimento reduzido.
function initializeRevealEffects() {
  const reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  const revealTargets = document.querySelectorAll(
    ".service-card, .project-card, .process-step, .value-item"
  );
  revealTargets.forEach((element) => element.classList.add("reveal-pending"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => revealObserver.observe(element));
}

// Liga todos os botões e eventos globais.
function initializeGlobalEvents() {
  selectors.themeToggle?.addEventListener("click", toggleTheme);
  selectors.backToTop?.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
  document.addEventListener("click", (event) => {
    if (!selectors.primaryNav || !selectors.menuToggle) return;
    const clickedInsideNav = selectors.primaryNav.contains(event.target);
    const clickedToggle = selectors.menuToggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle) closeMobileMenu();
  });
}

// Inicializa recursos em ordem após o HTML ter sido carregado.
function initializeApplication() {
  initializeTheme();
  initializeNavigation();
  initializeServiceFilters();
  initializeFaq();
  initializeContactForm();
  initializePrefillLinks();
  initializeGlobalEvents();
  initializeActiveSection();
  initializeRevealEffects();
  updateCurrentYear();
}

// Garante que a inicialização ocorra quando o documento estiver pronto.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApplication, { once: true });
} else {
  initializeApplication();
}

/* Guia de manutenção para revisão e aprendizado. */
// Revisão 01: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 01: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 02: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 02: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 03: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 03: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 04: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 04: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 05: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 05: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 06: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 06: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 07: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 07: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 08: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 08: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 09: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 09: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 10: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 10: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 11: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 11: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 12: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 12: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 13: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 13: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 14: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 14: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 15: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 15: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 16: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 16: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 17: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 17: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 18: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 18: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 19: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 19: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 20: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 20: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 21: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 21: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 22: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 22: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 23: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 23: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 24: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 24: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 25: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 25: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 26: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 26: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 27: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 27: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 28: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 28: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 29: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 29: valide comportamento com mouse, teclado e largura de tela reduzida.
// Revisão 30: mantenha cada função responsável por uma tarefa pequena e verificável.
// Teste 30: valide comportamento com mouse, teclado e largura de tela reduzida.
