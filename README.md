# NexTech — Projeto de Web Design

> Projeto acadêmico demonstrativo criado com HTML semântico, CSS responsivo e JavaScript puro.

## 1. Visão geral

A NexTech é uma página institucional conceitual para apresentar serviços digitais.
O projeto usa arquivos separados para estrutura, aparência e comportamento, conforme
os requisitos da atividade de Web Design.

A proposta visual é original e foi inspirada no tipo de site institucional presente
no repositório de referência, sem copiar literalmente sua implementação.

## 2. Tecnologias utilizadas

- HTML5 semântico.
- CSS3, Grid, Flexbox e media queries.
- JavaScript puro, sem bibliotecas externas.
- `localStorage` para guardar a preferência de tema.
- `IntersectionObserver` para navegação ativa e efeitos progressivos.
- Git e GitHub para versionamento e publicação.

## 3. Estrutura de arquivos

- `index.html`: conteúdo e estrutura da página.
- `style.css`: tokens de design, componentes, layout e responsividade.
- `script.js`: interações, validações e eventos.
- `README.md`: descrição funcional e instruções.
- `docs/RELATORIO_ENTREGA.md`: relatório para apoiar a documentação da entrega.
- `docs/CAPTURAS.md`: roteiro para registrar capturas reais de tela.

## 4. Funcionalidades em JavaScript

### 4.1 Menu responsivo
O botão de menu abre e fecha a navegação em telas menores.
O estado é comunicado pelo atributo `aria-expanded`.
O menu também fecha após selecionar um link, pressionar Escape ou clicar fora dele.

### 4.2 Tema claro e escuro
O botão Tema alterna a aparência entre claro e escuro.
A preferência é salva no armazenamento local do navegador.
Na primeira visita, a página considera a preferência do sistema operacional.

### 4.3 Filtro de serviços
Os botões Todos, Web, Processos e Estratégia filtram os cartões.
Os cartões que não correspondem à categoria selecionada são ocultados.
O botão selecionado recebe estado visual e `aria-pressed`.

### 4.4 Perguntas frequentes
Cada pergunta abre ou fecha sua resposta.
O atributo `aria-expanded` é atualizado conforme o estado.
O componente usa botões reais, permitindo interação por teclado.

### 4.5 Validação de formulário
O formulário verifica nome, e-mail, mensagem e consentimento.
As mensagens de erro aparecem próximas aos campos correspondentes.
O navegador recebe o foco no primeiro campo inválido.
A demonstração não transmite dados nem finge que houve envio real.

### 4.6 Contador de caracteres
O contador acompanha o texto digitado na mensagem.
O campo é limitado a 500 caracteres.
A contagem ajuda a pessoa a perceber quando está perto do limite.

### 4.7 Pré-preenchimento do assunto
Os links nos cartões de serviços preenchem o campo de mensagem.
Depois de preencher, a página conduz a pessoa até o formulário.
Esse comportamento demonstra manipulação do DOM e eventos de clique.

### 4.8 Botão voltar ao topo
O botão aparece após a pessoa rolar a página.
Ao clicar, a página retorna suavemente ao início.
A preferência por movimento reduzido é respeitada.

### 4.9 Ano automático
O ano do rodapé é atualizado com a data atual do navegador.
Isso evita a necessidade de atualizar manualmente o texto todo ano.

### 4.10 Navegação ativa
A seção visível pode destacar o link correspondente no menu.
O recurso usa `IntersectionObserver` quando o navegador oferece suporte.

### 4.11 Efeitos de entrada
Cartões e itens podem surgir gradualmente quando entram na área visível.
O recurso é desativado quando o sistema solicita movimento reduzido.
Se `IntersectionObserver` não existir, o conteúdo continua disponível.

### 4.12 Mensagens acessíveis
Uma região `aria-live` anuncia ações relevantes.
Isso melhora a comunicação de mudanças para leitores de tela.

## 5. Como executar

1. Extraia o arquivo ZIP para uma pasta.
2. Abra essa pasta no Visual Studio Code.
3. Abra `index.html` no navegador.
4. Para uma experiência de desenvolvimento mais confortável, use uma extensão local de servidor estático.
5. Teste o site em largura de desktop e celular.
6. Confira o console do navegador para identificar eventuais erros.

O projeto não precisa de `npm install` nem de compilação.

## 6. Como testar as funcionalidades

- Abra e feche o menu em uma janela estreita.
- Alterne entre tema claro e escuro e atualize a página.
- Selecione cada categoria de serviços.
- Abra duas perguntas frequentes, verificando o comportamento do acordeão.
- Envie o formulário vazio para conferir as validações.
- Preencha nome, e-mail válido, mensagem com 10 ou mais caracteres e confirmação.
- Clique em um link de serviço e confira o assunto pré-preenchido.
- Role a página e use o botão de retorno ao topo.
- Verifique se o ano do rodapé corresponde ao ano atual.
- Use Tab, Shift+Tab, Enter, Espaço e Escape para testar a navegação por teclado.

## 7. Acessibilidade considerada

- Elementos semânticos como `header`, `nav`, `main`, `section`, `form` e `footer`.
- Link para pular diretamente ao conteúdo principal.
- Rótulos associados aos campos por `for` e `id`.
- Texto alternativo ou rótulos acessíveis para controles.
- Estados `aria-expanded`, `aria-pressed`, `aria-current` e `aria-live`.
- Foco visível para navegação por teclado.
- Respeito à preferência por movimento reduzido.
- Mensagens de validação próximas aos campos.

## 8. Responsividade

- Layout em colunas no desktop.
- Redução gradual de colunas em tablets.
- Navegação móvel com botão de menu.
- Cartões em coluna única em celulares estreitos.
- Formulário e rodapé adaptados para telas pequenas.
- Espaçamentos ajustados por media queries.

## 9. Observações sobre o formulário

O formulário é exclusivamente demonstrativo.
A validação ocorre no navegador e não há integração com servidor.
Não informe dados sensíveis ao testar.
Para transformar o formulário em contato real, será necessário configurar um backend
ou um serviço de formulários e revisar as práticas de privacidade.

## 10. Publicação com Git e GitHub

1. Crie ou abra o repositório que será usado para a atividade.
2. Confirme que a pasta aberta contém os arquivos do projeto.
3. Inicialize o versionamento apenas se a pasta ainda não tiver `.git`.
4. Faça um commit com uma mensagem descritiva.
5. Configure o remoto para o repositório correto.
6. Compare o histórico local com o remoto antes de sincronizar.
7. Publique a branch `main` quando a configuração estiver correta.
8. Confira os arquivos no GitHub após o envio.
9. Se utilizar GitHub Pages, configure a publicação nas definições do repositório.
10. Guarde capturas reais de tela para demonstrar a versão local e publicada.

## 11. Referência

Repositório consultado como referência de estrutura e contexto de atividade:
https://github.com/Agudinho/Atividade-6-Web-Design

Este projeto é uma implementação independente e não declara afiliação com o autor
do repositório de referência.

## 12. Checklist antes da entrega

- [ ] `index.html` contém mais de 500 linhas.
- [ ] `style.css` contém mais de 400 linhas.
- [ ] `script.js` contém mais de 300 linhas.
- [ ] O JavaScript é carregado externamente por `script.js`.
- [ ] O README possui mais de 100 linhas.
- [ ] Foram testados os filtros e o tema.
- [ ] Foram testadas as perguntas frequentes.
- [ ] Foram testados os cenários válido e inválido do formulário.
- [ ] O layout foi testado em desktop e celular.
- [ ] O repositório foi conferido após o push.
- [ ] As capturas reais foram incluídas na documentação de entrega.

## 13. Limites conhecidos

- O formulário não envia mensagens para um servidor.
- Os projetos apresentados são conceitos ilustrativos.
- A aparência pode variar ligeiramente entre navegadores.
- A validação do lado do cliente é educativa e não substitui validação no servidor.
- A publicação no GitHub precisa ser executada com a conta e o repositório do estudante.

## 14. Conclusão

O projeto demonstra a separação entre HTML, CSS e JavaScript, a construção de
uma interface responsiva e a implementação de interações comuns em sites institucionais.
A documentação lista o propósito das funcionalidades e oferece uma sequência de testes.

## 15. Registro de revisão por componente


### Revisão 01 — Cabeçalho e navegação

- Confirmar que o componente **cabeçalho e navegação** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 02 — Identidade visual

- Confirmar que o componente **identidade visual** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 03 — Hero e chamada principal

- Confirmar que o componente **hero e chamada principal** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 04 — Faixa de princípios

- Confirmar que o componente **faixa de princípios** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 05 — Cartões de serviço

- Confirmar que o componente **cartões de serviço** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 06 — Filtros de serviço

- Confirmar que o componente **filtros de serviço** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 07 — Ilustrações de projetos

- Confirmar que o componente **ilustrações de projetos** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 08 — Etapas do processo

- Confirmar que o componente **etapas do processo** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 09 — Princípios de design

- Confirmar que o componente **princípios de design** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 10 — Acordeão de perguntas

- Confirmar que o componente **acordeão de perguntas** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 11 — Formulário de contato

- Confirmar que o componente **formulário de contato** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 12 — Validação de campos

- Confirmar que o componente **validação de campos** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 13 — Contador de caracteres

- Confirmar que o componente **contador de caracteres** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 14 — Tema claro e escuro

- Confirmar que o componente **tema claro e escuro** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 15 — Persistência de preferências

- Confirmar que o componente **persistência de preferências** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 16 — Menu em dispositivos móveis

- Confirmar que o componente **menu em dispositivos móveis** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 17 — Estados de foco

- Confirmar que o componente **estados de foco** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 18 — Mensagens acessíveis

- Confirmar que o componente **mensagens acessíveis** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 19 — Navegação ativa

- Confirmar que o componente **navegação ativa** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 20 — Botão voltar ao topo

- Confirmar que o componente **botão voltar ao topo** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 21 — Rodapé

- Confirmar que o componente **rodapé** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 22 — Media queries

- Confirmar que o componente **media queries** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 23 — Preferência por movimento reduzido

- Confirmar que o componente **preferência por movimento reduzido** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 24 — Documentação de uso

- Confirmar que o componente **documentação de uso** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.

### Revisão 25 — Checklist de entrega

- Confirmar que o componente **checklist de entrega** continua compreensível e consistente.
- Testar a interação principal após qualquer alteração.
- Conferir comportamento em teclado e tela estreita quando aplicável.
- Atualizar esta documentação se o comportamento mudar.
