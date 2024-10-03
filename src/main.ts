import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pine from "./package";
import { router } from "@/router";
import { createI18n } from "vue-i18n";

import pt from "./locales/pt.json";
import en from "./locales/en.json";

const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "pt",
  messages: {
    pt,
    en,
  },
});
const app = createApp(App);

app.use(pine);
app.use(i18n);
app.use(router);
app.mount("#app");
