/*
 * 缓存相关插件
 */
export interface PluginCache {
  /**
   * 保存至 localStorage
   * @param key 存储名称
   * @param value 存储值
   */
  saveLocalStorage(key: string, value: any): void
  /**
   * 获取 localStorage
   * @param key 存储名称
   */
  getLocalStorage(key: string): any
  /**
   * 删除 localStorage
   * @param key 存储名称
   */
  removeLocalStorage(key: string): void
}
