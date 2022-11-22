import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
   props: {
	   count: {
		   type: Number,
		   default: 0,
	   }, 
   },
   methods: {
    updateCount(value) {
      this.$emit('update:count', value+1);
    },
  },
  // Компонент должен иметь входной параметр и порождать событие

  template: `<button type="button" @click="updateCount(count)">{{ count }}</button>`,
});
