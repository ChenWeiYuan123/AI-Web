import { model } from '@modern-js/runtime/model';

const promptModel = model('prompt').define({
  state: {
    prompt: 'prompt' as string,
  },
  actions: {
    set(state, payload) {
      state.prompt = payload;
    },
  },
});

export default promptModel;
