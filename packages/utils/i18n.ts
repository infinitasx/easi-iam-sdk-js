/**
 * 单独记录国际化标记
 */
import {ILang} from '../type'
let _lang:ILang = 'zh';

export function getLang() : ILang{
  return _lang;
}

export function setLang(lang: ILang){
  _lang = lang;
}
