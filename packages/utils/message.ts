import { iframeIdName } from '../constant';

/**
 * iam 和 相同浏览器的各个子系统页面的消息传递
 */

// 创建中间iframe页面
export function _createFrame(url: string, applicationId: string) {
  // 排除 iam 的正式、测试环境，iam系统本省没有必要添加iframe
  if (applicationId === 'iam') {
    return;
  }
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '0';
  iframe.height = '0';
  iframe.style.border = 'none';
  iframe.id = iframeIdName;
  document.body.appendChild(iframe);
}

// 发送消息给iam
export function sendMessageToIAM(type: string, message: string) {
  const frame = document.getElementById(iframeIdName);
  if (frame) {
    (frame as any).contentWindow.postMessage(
      {
        type,
        message,
      },
      '*',
    );
  }
}
