import CallbackLoading from "../components/callbackLoading";

export default function (callback) {
  return {
    created() {
      callback();
    },
    render(createElement) {
      return createElement(CallbackLoading, {}, []);
    }
  }
}
