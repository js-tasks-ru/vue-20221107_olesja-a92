<template>
	<div class="toasts">
		<ui-toaster v-for="toast in toasts"
			:message="toast.message"
			:params="toast.params"/>
	</div>
</template>
<script>
import UiToaster from './UiToaster.vue';

export default {
  name: 'TheToaster',
   data() {
      return {
		toasts: []
      }
    },
  components: { UiToaster },
   methods: {
	  success(message){
		 this.createToast(message,{type:'success',hide_time:5000});
	  },
	  error(message){
		 this.createToast(message,{type:'error',hide_time:5000});
	  },
	  createToast(message, params) {
		this.toasts.push({ message: message, params: params });
	  },
	}
};
</script>
<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>