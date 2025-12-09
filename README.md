# ☕ Coffee Delivery

Aplicação front-end para simular a compra de cafés, com listagem de produtos, carrinho e fluxo de checkout completo (endereço + forma de pagamento).

> Projeto desenvolvido para estudo de React, TypeScript, formulários e validação com React Hook Form + Zod.

---

## 🔗 Demonstração

Você pode acessar a aplicação aqui:

👉 **https://LElTEDEV.github.io/coffee**

---

## 🖼 Prévia

### Home

Tela inicial com listagem dos cafés disponíveis e destaque para o banner principal.

### Checkout

Tela de finalização do pedido com formulário de endereço, seleção de forma de pagamento e resumo do carrinho.

> (Dica: você pode adicionar as imagens dos prints na pasta `public/` e referenciar aqui, por exemplo:  
> `![Home](./public/home.png)` e `![Checkout](./public/checkout.png)`)

---

## 🎯 Funcionalidades

- Listagem de cafés com:
  - Nome
  - Descrição
  - Tipos (tradicional, gelado, com leite etc.)
  - Preço
- Controle de quantidade de cada café
- Carrinho de compras:
  - Adicionar/remover itens
  - Atualizar quantidade
  - Cálculo do total dos itens
- Tela de checkout:
  - Formulário de endereço (CEP, rua, número, complemento, bairro, cidade, UF)
  - Seleção de método de pagamento:
    - Cartão de crédito
    - Cartão de débito
    - Dinheiro
  - Validação dos campos com **React Hook Form + Zod**
- Cálculo de:
  - Total de itens
  - Valor de entrega
  - Total geral do pedido

---

## 🧱 Tecnologias utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

---

## 📁 Estrutura básica do projeto

```bash
.
├── src
│   ├── components
│   │   ├── CoffeeCardCart.tsx
│   │   ├── CheckOutCard.tsx
│   │   ├── PaymentOption.tsx
│   │   └── Input.tsx
│   ├── context
│   │   └── BagContext.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── CheckOut.tsx
│   ├── router
│   └── main.tsx
├── public
└── ...
```
