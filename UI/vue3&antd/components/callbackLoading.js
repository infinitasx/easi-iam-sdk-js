export default () => {
  import {h} from 'vue';
  let style = document.querySelector('style#iamCallbackPageStyle');
  if (!style) {
    style = document.createElement('style');
    style.id = 'iamCallbackPageStyle'
    style.innerHTML = `
        @keyframes draw {
          0% {
            opacity: 0.1;
          }

          100% {
            opacity: 1;
          }
        }
      `;
    document.head.appendChild(style);
  }

  return h('svg', {
    width: '302px',
    height: '76px',
    viewBox: '0 0 302 76',
    style: {
      position: 'absolute',
      top: "50%",
      left: '50%',
      transform: 'translate(-50%, -200%)',
    }
  }, [
    h('g', {
      stroke: 'none',
      file: 'none',
    }, [
      h('path', {
        stroke: '#979797',
        style: {
          strokeDasharray: '400',
          animation: '1s infinite draw alternate',
          strokeWidth: '2px',
        },
        d: 'M19.9257392,1 C30.376604,1 38.8504213,9.47313324 38.8504213,19.9246352 C38.8504213,23.2106325 38.012026,26.2998506 36.5382269,28.9923369 C36.6975184,29.1030693 36.8525809,29.2222651 37.0012217,29.3521188 L37.2190924,29.5551672 L73.5576537,65.8947412 L73.8957037,66.2687962 C75.4223807,68.1408789 75.3660975,70.8739832 73.7268545,72.6825811 L73.5576537,72.860293 L72.8609292,73.5574832 L72.486902,73.8955729 C70.6148852,75.4224305 67.8808997,75.366141 66.0724383,73.726704 L65.8947435,73.5574832 L46.3357144,53.9980765 L26.7756285,73.5574832 L26.4016129,73.8955729 C24.5297046,75.4224305 21.7965345,75.366141 19.9872274,73.726704 L19.8094424,73.5574832 L19.1127179,72.860293 L18.7746679,72.486238 C17.2479909,70.6141546 17.3042741,67.8810503 18.9435171,66.0724531 L19.1127179,65.8947412 L38.6728042,46.3353345 L29.5561822,37.2189674 L29.2571141,36.8883576 L28.993728,36.5387047 C26.3009254,38.0113729 23.2105989,38.8503283 19.9257392,38.8503283 C9.47381724,38.8503283 1,30.3771953 1,19.9246352 C1,9.47313324 9.47381724,1 19.9257392,1 Z M153.209028,7.26715328 L153.209028,17.7751825 L132.473148,17.7751825 C123.365278,17.5080292 118.76713,22.049635 118.280787,31.5335766 L153.209028,31.5335766 L153.209028,42.0861314 L118.192361,42.0861314 C118.192361,52.9058394 122.613657,56.8686131 132.473148,56.8686131 L153.209028,56.8686131 L153.209028,67.510219 L131.89838,67.510219 C125.22333,68.1892309 118.540725,66.2959632 113.196296,62.2116788 C107.006481,57.2693431 104,49.3437956 104,38.4350365 C104,17.0627737 112.842593,7.26715328 132.20787,7.26715328 L153.209028,7.26715328 Z M195.691204,7 L221.246296,67.510219 L207.230787,67.510219 L201.704167,53.1284672 L175.662731,53.1284672 L170.312963,67.510219 L157.049074,67.510219 L182.427315,7.13357664 L195.691204,7 Z M277.036574,7 L277.036574,17.7751825 L245.866435,17.7751825 C239.278704,17.7751825 236.183796,20.1350365 236.183796,25.6562044 C236.183796,30.1087591 238.880787,32.2459854 244.14213,32.2459854 L260.810417,32.2459854 C274.074306,32.2459854 279.95463,36.6985401 279.95463,49.2992701 C279.95463,61.9 273.278472,67.510219 258.997685,67.510219 L225.440046,67.510219 L225.440046,56.6014599 L257.008102,56.6014599 C263.684259,56.6014599 266.779167,54.9985401 266.779167,49.7890511 C266.779167,44.579562 263.905324,42.8430657 257.936574,42.8430657 L242.94838,42.8430657 C229.242361,42.8430657 223.008333,37.5890511 223.008333,25.4781022 C223.008333,12.3875912 229.772917,7 244.053704,7 L277.036574,7 Z M300.646296,7 L300.646296,67.510219 L287.382407,67.510219 L287.382407,7 L300.646296,7 Z M74.6516298,1.84237448 C75.7279023,2.91957992 75.7709532,4.64087596 74.7807825,5.77056129 L74.6516298,5.90860126 L57.8520719,22.7270156 L57.6090353,23.030871 C56.8857133,24.0871091 57.0290918,25.5449651 58.0004072,26.4368017 C59.0233059,27.3779783 60.5546061,27.3360966 61.5725686,26.3945617 L61.7023511,26.2666576 L78.3449745,9.60546497 L78.6389587,9.34807295 C79.7641965,8.49009877 81.377168,8.57589622 82.404859,9.60546497 C83.4821629,10.6826707 83.5252551,12.4029741 82.5341355,13.5325801 L82.404859,13.670615 L73.1940704,22.8928524 L73.1994446,22.8993135 L65.6095999,30.4976444 L65.3665626,30.8017423 C64.6432328,31.8586277 64.7865228,33.3155939 65.7568607,34.2074305 C66.7797595,35.1486071 68.3110597,35.1077143 69.3290221,34.1653141 L69.4588047,34.0372864 L86.1014281,17.3760937 L86.0949784,17.3707093 L86.3924344,17.1103334 C87.5185001,16.2531818 89.1314716,16.338897 90.1591627,17.3674787 C91.2802791,18.4906448 91.2802791,20.3105397 90.1591627,21.4337058 L90.1357878,21.4575622 C89.423785,22.1840975 72.6686976,39.2719075 70.5046787,40.6093688 C68.3409122,42.110513 65.6816183,43 62.6891064,43 C55.1562313,43 49.5388217,37.3830935 49.0486689,30.4933371 C48.810042,27.1313771 49.4270325,24.2206219 51.3854939,21.7341498 C55.0297136,17.5594579 69.9371966,2.50218166 70.5699078,1.86333636 L70.5906709,1.84237448 L70.884676,1.58498212 C72.0100641,0.727008281 73.6239395,0.812805733 74.6516298,1.84237448 Z M188.307639,19.0218978 L179.730324,42.219708 L197.415509,42.219708 L188.307639,19.0218978 Z',
      })
    ])
  ])
}
