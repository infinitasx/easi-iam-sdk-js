/**
 * 单独记录国际化标记
 */
import {ILang} from '../type/settings'
let _lang:ILang = 'cn';

export function getLang() : ILang{
  return _lang;
}

export function setLang(lang: ILang){
  _lang = lang;
}
