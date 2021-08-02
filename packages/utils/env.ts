import {DEVELOPMENT_URL, PRODUCTION_URL, TESTING_URL} from "../constant";
import {env as IEvn} from '../type/settings'

/**
 * 当前sdk运行的环境
 */
let _env:IEvn = 'development';


export function getEnv():IEvn{
  return _env;
}

export function setEnv(env: IEvn){
  _env = env;
}

export function getAuthority(){
  return _env === 'production' ? PRODUCTION_URL : _env === 'testing' ? TESTING_URL : DEVELOPMENT_URL
}
