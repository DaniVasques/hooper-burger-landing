# Hooper — Furious Burguer

Landing page de apresentação de hambúrguer, com uma introdução animada e uma seção de destaque para o produto. A interface utiliza a identidade **Furious Burguer**, preservada neste projeto Hooper.

## Tecnologias

- **HTML5** para a estrutura da página.
- **CSS** com aninhamento nativo, Flexbox e media query para adaptação do layout.
- **JavaScript** para o controle da interação.
- **GSAP 3.12.5**, carregado via CDN, para as sequências de animação.
- **Google Fonts** com as famílias Sora e Teko.
- Imagens no formato **WebP**.

## Interface

- Tela inicial com o convite “Pronto para algo diferente?” e botão “Surpreenda-se”.
- Transição acionada pelo usuário para a apresentação do produto.
- Animações de entrada de textos e imagem, com mudanças de escala, rotação e opacidade.
- Imagem de fumaça com deslocamento e desfoque.
- Fundo escuro, destaques em amarelo e tipografia em caixa alta.
- Ajustes de layout e tipografia para telas de até 1200 px.

O botão “Peça aqui” é demonstrativo e aponta para `#`; não há integração de pedidos ou backend.

## Executar localmente

1. Baixe o projeto e extraia os arquivos, ou clone o repositório quando estiver disponível.
2. Abra o arquivo `index.html` em um navegador moderno com suporte a aninhamento CSS.
3. Clique em **Surpreenda-se** para iniciar a transição.

Não é necessário instalar dependências ou executar uma etapa de build. Mantenha a conexão com a internet para carregar o GSAP e as fontes externas.

## Estrutura

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── background.webp
│   ├── fumaca.webp
│   └── hamburguer.webp
├── .gitignore
└── README.md
```
