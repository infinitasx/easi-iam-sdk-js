import CallbackLoading from '../components/CallbackLoading';

export default function (callback) {
  return {
    name: 'callback',
    created() {
      callback();
    },
    render(createElement) {
      return createElement(CallbackLoading, {}, []);
    },
  };
}
