# NexTech â€” Projeto de Web Design

> Projeto acadÃªmico demonstrativo criado com HTML semÃ¢ntico, CSS responsivo e JavaScript puro.

## 1. VisÃ£o geral

A NexTech Ã© uma pÃ¡gina institucional conceitual para apresentar serviÃ§os digitais.
O projeto usa arquivos separados para estrutura, aparÃªncia e comportamento, conforme
os requisitos da atividade de Web Design.

A proposta visual Ã© original e foi inspirada no tipo de site institucional presente
no repositÃ³rio de referÃªncia, sem copiar literalmente sua implementaÃ§Ã£o.

## 2. Tecnologias utilizadas

- HTML5 semÃ¢ntico.
- CSS3, Grid, Flexbox e media queries.
- JavaScript puro, sem bibliotecas externas.
- `localStorage` para guardar a preferÃªncia de tema.
- `IntersectionObserver` para navegaÃ§Ã£o ativa e efeitos progressivos.
- Git e GitHub para versionamento e publicaÃ§Ã£o.

## 3. Estrutura de arquivos

- `index.html`: conteÃºdo e estrutura da pÃ¡gina.
- `style.css`: tokens de design, componentes, layout e responsividade.
- `script.js`: interaÃ§Ãµes, validaÃ§Ãµes e eventos.
- `README.md`: descriÃ§Ã£o funcional e instruÃ§Ãµes.
- `docs/RELATORIO_ENTREGA.md`: relatÃ³rio para apoiar a documentaÃ§Ã£o da entrega.
- `docs/CAPTURAS.md`: roteiro para registrar capturas reais de tela.

## 4. Funcionalidades em JavaScript

### 4.1 Menu responsivo
O botÃ£o de menu abre e fecha a navegaÃ§Ã£o em telas menores.
O estado Ã© comunicado pelo atributo `aria-expanded`.
O menu tambÃ©m fecha apÃ³s selecionar um link, pressionar Escape ou clicar fora dele.

### 4.2 Tema claro e escuro
O botÃ£o Tema alterna a aparÃªncia entre claro e escuro.
A preferÃªncia Ã© salva no armazenamento local do navegador.
Na primeira visita, a pÃ¡gina considera a preferÃªncia do sistema operacional.

### 4.3 Filtro de serviÃ§os
Os botÃµes Todos, Web, Processos e EstratÃ©gia filtram os cartÃµes.
Os cartÃµes que nÃ£o correspondem Ã  categoria selecionada sÃ£o ocultados.
O botÃ£o selecionado recebe estado visual e `aria-pressed`.

### 4.4 Perguntas frequentes
Cada pergunta abre ou fecha sua resposta.
O atributo `aria-expanded` Ã© atualizado conforme o estado.
O componente usa botÃµes reais, permitindo interaÃ§Ã£o por teclado.

### 4.5 ValidaÃ§Ã£o de formulÃ¡rio
O formulÃ¡rio verifica nome, e-mail, mensagem e consentimento.
As mensagens de erro aparecem prÃ³ximas aos campos correspondentes.
O navegador recebe o foco no primeiro campo invÃ¡lido.
A demonstraÃ§Ã£o nÃ£o transmite dados nem finge que houve envio real.

### 4.6 Contador de caracteres
O contador acompanha o texto digitado na mensagem.
O campo Ã© limitado a 500 caracteres.
A contagem ajuda a pessoa a perceber quando estÃ¡ perto do limite.

### 4.7 PrÃ©-preenchimento do assunto
Os links nos cartÃµes de serviÃ§os preenchem o campo de mensagem.
Depois de preencher, a pÃ¡gina conduz a pessoa atÃ© o formulÃ¡rio.
Esse comportamento demonstra manipulaÃ§Ã£o do DOM e eventos de clique.

### 4.8 BotÃ£o voltar ao topo
O botÃ£o aparece apÃ³s a pessoa rolar a pÃ¡gina.
Ao clicar, a pÃ¡gina retorna suavemente ao inÃ­cio.
A preferÃªncia por movimento reduzido Ã© respeitada.

### 4.9 Ano automÃ¡tico
O ano do rodapÃ© Ã© atualizado com a data atual do navegador.
Isso evita a necessidade de atualizar manualmente o texto todo ano.

### 4.10 NavegaÃ§Ã£o ativa
A seÃ§Ã£o visÃ­vel pode destacar o link correspondente no menu.
O recurso usa `IntersectionObserver` quando o navegador oferece suporte.

### 4.11 Efeitos de entrada
CartÃµes e itens podem surgir gradualmente quando entram na Ã¡rea visÃ­vel.
O recurso Ã© desativado quando o sistema solicita movimento reduzido.
Se `IntersectionObserver` nÃ£o existir, o conteÃºdo continua disponÃ­vel.

### 4.12 Mensagens acessÃ­veis
Uma regiÃ£o `aria-live` anuncia aÃ§Ãµes relevantes.
Isso melhora a comunicaÃ§Ã£o de mudanÃ§as para leitores de tela.

## 5. Como executar

1. Extraia o arquivo ZIP para uma pasta.
2. Abra essa pasta no Visual Studio Code.
3. Abra `index.html` no navegador.
4. Para uma experiÃªncia de desenvolvimento mais confortÃ¡vel, use uma extensÃ£o local de servidor estÃ¡tico.
5. Teste o site em largura de desktop e celular.
6. Confira o console do navegador para identificar eventuais erros.

O projeto nÃ£o precisa de `npm install` nem de compilaÃ§Ã£o.

## 6. Como testar as funcionalidades

- Abra e feche o menu em uma janela estreita.
- Alterne entre tema claro e escuro e atualize a pÃ¡gina.
- Selecione cada categoria de serviÃ§os.
- Abra duas perguntas frequentes, verificando o comportamento do acordeÃ£o.
- Envie o formulÃ¡rio vazio para conferir as validaÃ§Ãµes.
- Preencha nome, e-mail vÃ¡lido, mensagem com 10 ou mais caracteres e confirmaÃ§Ã£o.
- Clique em um link de serviÃ§o e confira o assunto prÃ©-preenchido.
- Role a pÃ¡gina e use o botÃ£o de retorno ao topo.
- Verifique se o ano do rodapÃ© corresponde ao ano atual.
- Use Tab, Shift+Tab, Enter, EspaÃ§o e Escape para testar a navegaÃ§Ã£o por teclado.

## 7. Acessibilidade considerada

- Elementos semÃ¢nticos como `header`, `nav`, `main`, `section`, `form` e `footer`.
- Link para pular diretamente ao conteÃºdo principal.
- RÃ³tulos associados aos campos por `for` e `id`.
- Texto alternativo ou rÃ³tulos acessÃ­veis para controles.
- Estados `aria-expanded`, `aria-pressed`, `aria-current` e `aria-live`.
- Foco visÃ­vel para navegaÃ§Ã£o por teclado.
- Respeito Ã  preferÃªncia por movimento reduzido.
- Mensagens de validaÃ§Ã£o prÃ³ximas aos campos.

## 8. Responsividade

- Layout em colunas no desktop.
- ReduÃ§Ã£o gradual de colunas em tablets.
- NavegaÃ§Ã£o mÃ³vel com botÃ£o de menu.
- CartÃµes em coluna Ãºnica em celulares estreitos.
- FormulÃ¡rio e rodapÃ© adaptados para telas pequenas.
- EspaÃ§amentos ajustados por media queries.

## 9. ObservaÃ§Ãµes sobre o formulÃ¡rio

O formulÃ¡rio Ã© exclusivamente demonstrativo.
A validaÃ§Ã£o ocorre no navegador e nÃ£o hÃ¡ integraÃ§Ã£o com servidor.
NÃ£o informe dados sensÃ­veis ao testar.
Para transformar o formulÃ¡rio em contato real, serÃ¡ necessÃ¡rio configurar um backend
ou um serviÃ§o de formulÃ¡rios e revisar as prÃ¡ticas de privacidade.

## 10. PublicaÃ§Ã£o com Git e GitHub

1. Crie ou abra o repositÃ³rio que serÃ¡ usado para a atividade.
2. Confirme que a pasta aberta contÃ©m os arquivos do projeto.
3. Inicialize o versionamento apenas se a pasta ainda nÃ£o tiver `.git`.
4. FaÃ§a um commit com uma mensagem descritiva.
5. Configure o remoto para o repositÃ³rio correto.
6. Compare o histÃ³rico local com o remoto antes de sincronizar.
7. Publique a branch `main` quando a configuraÃ§Ã£o estiver correta.
8. Confira os arquivos no GitHub apÃ³s o envio.
9. Se utilizar GitHub Pages, configure a publicaÃ§Ã£o nas definiÃ§Ãµes do repositÃ³rio.
10. Guarde capturas reais de tela para demonstrar a versÃ£o local e publicada.

## 11. ReferÃªncia

RepositÃ³rio consultado como referÃªncia de estrutura e contexto de atividade:
https://github.com/Agudinho/Atividade-6-Web-Design

Este projeto Ã© uma implementaÃ§Ã£o independente e nÃ£o declara afiliaÃ§Ã£o com o autor
do repositÃ³rio de referÃªncia.

## 12. Checklist antes da entrega

- [ ] `index.html` contÃ©m mais de 500 linhas.
- [ ] `style.css` contÃ©m mais de 400 linhas.
- [ ] `script.js` contÃ©m mais de 300 linhas.
- [ ] O JavaScript Ã© carregado externamente por `script.js`.
- [ ] O README possui mais de 100 linhas.
- [ ] Foram testados os filtros e o tema.
- [ ] Foram testadas as perguntas frequentes.
- [ ] Foram testados os cenÃ¡rios vÃ¡lido e invÃ¡lido do formulÃ¡rio.
- [ ] O layout foi testado em desktop e celular.
- [ ] O repositÃ³rio foi conferido apÃ³s o push.
- [ ] As capturas reais foram incluÃ­das na documentaÃ§Ã£o de entrega.

## 13. Limites conhecidos

- O formulÃ¡rio nÃ£o envia mensagens para um servidor.
- Os projetos apresentados sÃ£o conceitos ilustrativos.
- A aparÃªncia pode variar ligeiramente entre navegadores.
- A validaÃ§Ã£o do lado do cliente Ã© educativa e nÃ£o substitui validaÃ§Ã£o no servidor.
- A publicaÃ§Ã£o no GitHub precisa ser executada com a conta e o repositÃ³rio do estudante.

## 14. ConclusÃ£o

O projeto demonstra a separaÃ§Ã£o entre HTML, CSS e JavaScript, a construÃ§Ã£o de
uma interface responsiva e a implementaÃ§Ã£o de interaÃ§Ãµes comuns em sites institucionais.
A documentaÃ§Ã£o lista o propÃ³sito das funcionalidades e oferece uma sequÃªncia de testes.

## 15. Registro de revisÃ£o por componente


### RevisÃ£o 01 â€” CabeÃ§alho e navegaÃ§Ã£o

- Confirmar que o componente **cabeÃ§alho e navegaÃ§Ã£o** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 02 â€” Identidade visual

- Confirmar que o componente **identidade visual** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 03 â€” Hero e chamada principal

- Confirmar que o componente **hero e chamada principal** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 04 â€” Faixa de princÃ­pios

- Confirmar que o componente **faixa de princÃ­pios** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 05 â€” CartÃµes de serviÃ§o

- Confirmar que o componente **cartÃµes de serviÃ§o** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 06 â€” Filtros de serviÃ§o

- Confirmar que o componente **filtros de serviÃ§o** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 07 â€” IlustraÃ§Ãµes de projetos

- Confirmar que o componente **ilustraÃ§Ãµes de projetos** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 08 â€” Etapas do processo

- Confirmar que o componente **etapas do processo** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 09 â€” PrincÃ­pios de design

- Confirmar que o componente **princÃ­pios de design** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 10 â€” AcordeÃ£o de perguntas

- Confirmar que o componente **acordeÃ£o de perguntas** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 11 â€” FormulÃ¡rio de contato

- Confirmar que o componente **formulÃ¡rio de contato** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 12 â€” ValidaÃ§Ã£o de campos

- Confirmar que o componente **validaÃ§Ã£o de campos** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 13 â€” Contador de caracteres

- Confirmar que o componente **contador de caracteres** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 14 â€” Tema claro e escuro

- Confirmar que o componente **tema claro e escuro** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 15 â€” PersistÃªncia de preferÃªncias

- Confirmar que o componente **persistÃªncia de preferÃªncias** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 16 â€” Menu em dispositivos mÃ³veis

- Confirmar que o componente **menu em dispositivos mÃ³veis** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 17 â€” Estados de foco

- Confirmar que o componente **estados de foco** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 18 â€” Mensagens acessÃ­veis

- Confirmar que o componente **mensagens acessÃ­veis** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 19 â€” NavegaÃ§Ã£o ativa

- Confirmar que o componente **navegaÃ§Ã£o ativa** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 20 â€” BotÃ£o voltar ao topo

- Confirmar que o componente **botÃ£o voltar ao topo** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 21 â€” RodapÃ©

- Confirmar que o componente **rodapÃ©** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 22 â€” Media queries

- Confirmar que o componente **media queries** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 23 â€” PreferÃªncia por movimento reduzido

- Confirmar que o componente **preferÃªncia por movimento reduzido** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 24 â€” DocumentaÃ§Ã£o de uso

- Confirmar que o componente **documentaÃ§Ã£o de uso** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

### RevisÃ£o 25 â€” Checklist de entrega

- Confirmar que o componente **checklist de entrega** continua compreensÃ­vel e consistente.
- Testar a interaÃ§Ã£o principal apÃ³s qualquer alteraÃ§Ã£o.
- Conferir comportamento em teclado e tela estreita quando aplicÃ¡vel.
- Atualizar esta documentaÃ§Ã£o se o comportamento mudar.

## Publicacao no GitHub Pages

1. Abra as configuracoes do repositorio no GitHub.
2. Acesse **Pages**.
3. Em Build and deployment, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/(root)`.
5. Salve e aguarde a publicacao.
6. Abra o endereco apresentado pelo GitHub Pages e teste os links.

A publicacao pode levar alguns minutos. A existencia do repositorio, por si so, nao confirma que o Pages esteja habilitado.