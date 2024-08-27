# Pine Design System

Bem-vindo ao Pine Design System! Pine é um conjunto de diretrizes e componentes de design criado para ajudar a construir interfaces de usuário coesas e eficientes. Este sistema é projetado para garantir consistência visual e facilitar a criação de experiências de usuário de alta qualidade.

## Recursos

- **Design System Pine UI**: Explore a coleção completa de componentes e diretrizes visuais no nosso portfólio no Behance:
  [Design System Pine UI v1 - bTree](https://www.behance.net/gallery/161882269/Design-System-Pine-UI-v1-bTree)

- **Documentação**: A documentação do Pine está em processo de criação. Entretanto, você encontrará boas informações para começar a usar e implementar o design system em seus projetos. Acesse a documentação aqui:
  [Documentação Pine](https://btreedevelopers.github.io/pine/)

## Instalação

Para instalar o Pine Design System em projetos Vue 3, siga os passos abaixo:

1. **Instale o pacote via npm:**

   ```bash
   npm install pine-btree
   ```

2. **Importe e use o Pine Design System no seu projeto Vue 3:**

   ```javascript
   // main.js ou main.ts
   import { createApp } from "vue";
   import App from "./App.vue";
   import pine from "pine-btree";

   const app = createApp(App);

   app.use(pine);
   app.mount("#app");
   ```

## Exemplo de Uso

Aqui está um exemplo de como usar o Pine Design System em seu componente Vue:

```html
<script setup lang="ts">
  import { usePine } from "pine-btree";

  // Instancia do Pine para obter configurações como (cores, tema)
  const pine = usePine();

  // ...everything else
</script>

<template>
  <!-- No App da aplicação, insira o PineApp para obter toda configuração necessária no projeto -->
  <PineApp>
    <TheRestOfYourApplication />
  </PineApp>
</template>
```

## Componentes

O Pine Design System inclui uma ampla gama de componentes prontos para uso, incluindo botões, formulários, modais e muito mais. Cada componente é projetado para ser reutilizável e adaptável às suas necessidades.

## Contribuição

Estamos sempre abertos a contribuições e feedback! Se você gostaria de contribuir para o Pine Design System ou tem sugestões para melhorias, sinta-se à vontade para entrar em contato conosco ou abrir uma solicitação de pull no repositório.

## Suporte

Se você tiver alguma dúvida ou precisar de ajuda, entre em contato com nossa equipe de suporte através do e-mail: [btreedevs@gmail.com.br](mailto:btreedevs@gmail.com.br).
