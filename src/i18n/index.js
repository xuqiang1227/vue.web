import example_en from './en_US/example';
import example_zh from './zh_CN/example';
import {ENGLIST, CHINESE} from '../utils/constants'

export const en_US = {
  locale: ENGLIST,
  ...example_en
}

export const zh_CN = {
  locale: CHINESE,
  ...example_zh
};
