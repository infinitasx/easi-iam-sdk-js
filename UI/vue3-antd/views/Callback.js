import { h } from 'vue';
import CallbackLoading from '../components/CallbackLoading';

export default function (callback) {
  return {
    setup() {
      callback();
      return {};
    },
    render() {
      return h(CallbackLoading, {}, []);
    },
  };
}
