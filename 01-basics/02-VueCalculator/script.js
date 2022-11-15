import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = {
	name: 'App',
	
	data(){
		return {
			operator: '',
			num1: 0,
			num2: 0
		};
	},
	
	computed: {res() {
			switch(this.operator){
				case 'sum': return this.num1 + this.num2; break;
				case 'subtract': return this.num1 - this.num2; break;
				case 'multiply': return this.num1 * this.num2; break;
				case 'divide': return this.num1 / this.num2; break;
				default: return 0; break;
			}
		},
	},
	
	
}

const vm = createApp(App);
vm.mount('#app');