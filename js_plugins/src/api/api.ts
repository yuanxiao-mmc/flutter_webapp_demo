import { ModuleHome } from './modules/home'
import { PluginCache } from './plugins/cache'
import { PluginLocation } from './plugins/location'
import { PluginNetwork } from './plugins/network'
/**
 * 模块 API
 */
export class GDModuleAPI {
  /**
   * 首页
   */
  static home: ModuleHome
}

/**
 * 全局信息
 */
export class GDGlobal {
  /**
   * 项目名称
   */
  static projectName: string
}

/**
 * Gaoding Web 插件
 */
export class GDPlugin {
  /**
   * 网络请求
   */
  static network: PluginNetwork
  /**
   * document.location
   */
  static location: PluginLocation
  /**
   * 缓存
   */
  static cache: PluginCache
}
