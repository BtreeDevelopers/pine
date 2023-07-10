import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pine from "./package";

createApp(App).use(pine, {}).mount("#app");
