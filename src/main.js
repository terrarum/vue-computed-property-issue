import Vue from 'vue';
import App from './App';

const hello = 'HELLO';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  [hello]: 'hello',
});
