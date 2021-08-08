import CallbackLoading from "../components/callbackLoading";

export default function (callback) {
  return {
    setup() {
      callback();
      return {}
    },
    render() {
      import {h} from 'vue';

      return h('callback-loading', {}, [
        CallbackLoading(),
      ]);
    }
  }
}
