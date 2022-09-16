import { GDHomeSearchKeyResponse } from './home/header'
/*
 * 首页 API
 */
export interface ModuleHome {
  /**
   * 获取搜索关键字
   */
  fetchSearchKeys(): Promise<GDHomeSearchKeyResponse>
}
