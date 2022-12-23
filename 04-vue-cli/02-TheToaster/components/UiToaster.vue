<template>
    <div v-if="show" :class="'toast toast_'+params.type">
      <ui-icon class="toast__icon" :icon="getIcon" />
      <span>{{ message }}</span>
    </div>
</template>
<script>
import UiIcon from './UiIcon.vue';

export default {
  name: 'UiToaster',
  props: {
    message: {
      type: String,
	  required: true,
    },
	params: {
	  type: Object
	}
  },
  data(){
	return {
		show: false,
	}
  },
  mounted() {
	 this.show = true;
	 setTimeout(() => {
		  this.show=false;
	 }, this.params.hide_time);
  },
   computed: {
    getIcon() {
       switch(this.params.type){
			case 'success': return 'check-circle'; 
			case 'error': return 'alert-circle'; 
			default: return 'check-circle'; 
		  }
    },
  },
  components: { UiIcon },
};
</script>

<style scoped>
.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  width: auto;
}

.toast + .toast {
  margin-top: 20px;
}

.toast__icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>

