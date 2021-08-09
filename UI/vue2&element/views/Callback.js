import {h} from 'vue';
import CallbackLoading from "../components/callbackLoading";

export default function (callback) {
  return {
    setup() {
      callback();
      return {}
    },
    render() {
      return h('callback-loading', {}, [
        CallbackLoading(),
      ]);
    }
  }
}
