import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = {
	name: 'App',
	
	data(){
		return {
			counter: 0
		};
	}
}

const vm = createApp(App);
vm.mount('#app');
