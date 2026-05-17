# Bootcamp-II-Turma-C-Entrega-Intermediaria
# Projeto: Conscientização e Suporte - TEA

## Descrição do Problema
No contexto da educação inclusiva e da conscientização sobre neurodivergências, observa-se uma carência de ferramentas acessíveis e rápidas que ilustrem de forma didática as diferenças entre os níveis de suporte do Transtorno do Espectro Autista (TEA). Muitas vezes, o público geral desconhece como as necessidades de adaptação de rotina, comunicação e terapias variam drasticamente entre os níveis 1, 2 e 3, dificultando a empatia e o entendimento sobre os cuidados adequados.

## Solução Proposta
Desenvolvimento de uma aplicação web educativa estruturada com Interface Gráfica de Usuário (GUI) focada na conscientização sobre o TEA. O sistema utiliza um questionário ilustrativo de múltipla escolha para deduzir hipóteses de níveis de suporte, fornecendo tabelas informativas sobre cuidados e terapias. A aplicação também consome dados de uma API pública para exibir a definição atualizada do transtorno logo no topo da página. Atingir a submissão do questionário desencadeia um evento visual de feedback com o resultado instantâneo.

> **Observação:** O sistema exibe um aviso claro de que é uma ferramenta educativa e não substitui um diagnóstico médico.

## Público-Alvo
Educadores, estudantes de áreas da saúde, familiares e o público geral que buscam uma ferramenta agradável e direta para compreender melhor os diferentes níveis de suporte no autismo e as práticas de cuidado correspondentes.

## Funcionalidades Principais
* **Integração com API Extterna:** Consumo via requisição HTTP para resgatar dados científicos atualizados sobre o transtorno.
* **Questionário de Rastreio:** Formulário interativo com perguntas sobre adaptação a mudanças, comunicação e comportamentos.
* **Cálculo Lógico de Nível:** Processamento instantâneo das respostas do usuário para deduzir a hipótese do nível de suporte.
* **Feedback Visual:** Retorno em tela sem a necessidade de recarregar a página para confirmação do resultado.
* **Painel Informativo:** Tabelas responsivas detalhando rotinas, abordagens sociais e recomendações terapêuticas.

## Tecnologias Utilizadas
* **HTML5** (Semântica)
* **CSS3** (Estilização, Responsividade)
* **JavaScript** (API Fetch, FormData API)

## Instruções de Instalação
O sistema opera nativamente sem a necessidade de gerenciadores de pacotes ou configuração de servidores locais.

1. Crie um diretório para o projeto.
2. Aloque os arquivos `index.html`, `style.css` e `app.js` no mesmo diretório.

## Instruções de Execução
1. Navegue até o diretório do projeto.
2. Execute o arquivo `index.html` em um navegador web atualizado.
3. Abra o arquivo `index.html` utilizando seu navegador, ou clique com o botão direito em cima do arquivo, copie o caminho do arquivo (*Copy path*) e cole na barra de endereço do navegador.

> **Observação:** A aplicação necessita de conexão ativa com a internet para renderizar os dados providos pela API da Wikipedia.

## Instruções de Teste
A aplicação não engloba testes automatizados nesta versão. A validação manual deve ser realizada conforme os passos abaixo:

1. Abra a aplicação e verifique se o texto explicativo sobre o TEA foi carregado corretamente no topo da página (assegure-se de estar conectado à internet).
2. Preencha o questionário com diferentes combinações de respostas e clique no botão de ver resultado para validar se o cálculo lógico e a exibição do nível de suporte ocorrem corretamente.

## Versão
2.0

## Autoria
**Antonio Vinicius de Medeiros**

## Detalhes Técnicos

* **Consumo de API Externa (Fetch API):**
  Para agregar valor educativo com informações cientificamente corretas e atualizadas, o software faz uma requisição HTTP GET à API REST pública da Wikipedia durante o carregamento da página, extraindo e exibindo o resumo do artigo "Transtorno do espectro autista" de forma assíncrona.

* **Manipulação de Dados de Formulário:**
  A extração das respostas do usuário não depende de inúmeras buscas de IDs no DOM. Em vez disso, utiliza a API nativa `FormData` instanciada a partir do evento de *submit*. Isso coleta automaticamente os valores dos botões do tipo `radio` baseados no atributo `name`, tornando o processamento de dados mais eficiente.

* **Prevenção de Recarregamento:**
  O evento de submissão do formulário possui o método `e.preventDefault()`, o que evita que o navegador faça um POST clássico e recarregue a página, simulando uma experiência fluida de *Single Page Application* (SPA) para mostrar o resultado dinamicamente na mesma tela.
Prevenção de Recarregamento:
O evento de submissão do formulário possui o método e.preventDefault(), o que evita que o navegador faça um POST clássico e recarregue a página, simulando uma experiência fluida de Single Page Application (SPA) para mostrar o resultado dinamicamente na mesma tela.
