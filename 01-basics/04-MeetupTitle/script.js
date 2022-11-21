import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const App = {
	data() {
		return {
			meetupId: 0,
			activeMeetup: '',
		};
	},
	watch: {
		meetupId(val) {
			var _this = this;
			this.fetchMeetupById(val).then((meetup) => {
				_this.activeMeetup = meetup; //3
			  });
		},
	},
	methods: {
		fetchMeetupById(meetupId) {
		  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
			if (response.ok) {
			  return response.json();
			} else {
			  return response.json().then((error) => {
				throw error;
			  });
			}
		  });
		}
	}
}

createApp(App).mount('#app');

// Требуется создать Vue приложение
