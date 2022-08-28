import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";

// get a FA library object, add our one icon. Don't see how this connects to component method next line...
library.add(faSearch);
// Specify app (App.vue) and inject to html (index.html), component registers global component
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
