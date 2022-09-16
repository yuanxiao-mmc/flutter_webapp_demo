/*
 * Location 相关插件
 */
export interface PluginLocation {
  /**
   * 跳转至
   * @param url URL 地址
   */
  href(url: string): void
  /**
   * 替换
   * @param url URL 地址
   */
  replace(url: string): void
  /**
   * 打开一个新的
   * @param url URL 地址
   */
  open(url: string): void
}
