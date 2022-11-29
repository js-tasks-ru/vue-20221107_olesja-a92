import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  props: {
		meetupId: {
			type: Number,
			required: true,
		},
	},
	data(){
		return {
			error: '',
			is_load: true,
			activeMeetup: null,
		}
	},
	mounted(){
		this.getMeetupById(this.meetupId);
	},
	watch: {
		meetupId(val) {
			this.getMeetupById(val);
		},
	},
	methods:{
		getMeetupById(id){
			this.is_load = true;
			this.error = '';
			fetchMeetupById(id).then(meetup => {
				this.is_load = false;
				this.activeMeetup = meetup;
			},
			error => {
				this.is_load = false;
			    this.error = error.message; 
			});
		},
	},
  components: {
	UiAlert,
	UiContainer,
	MeetupView
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="activeMeetup!==null&&!error&&!is_load" :meetup="activeMeetup" />

      <UiContainer v-if="is_load">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>{{ error }}</UiAlert>
      </UiContainer>
    </div>`,
});
