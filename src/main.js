import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCarSide, faMarker, faTrash, faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)
library.add(faCarSide)
library.add(faTrash)
library.add(faMarker)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
