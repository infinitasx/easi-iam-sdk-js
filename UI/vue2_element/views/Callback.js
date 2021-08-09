import CallbackLoading from "../components/callbackLoading";

export default function (callback) {
  return {
    name: 'callback',
    created() {
      callback();
    },
    render(createElement) {
      return createElement(CallbackLoading, {}, []);
    }
  }
}
