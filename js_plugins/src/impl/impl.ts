import { GDGlobal, GDModuleAPI, GDPlugin } from '@/api/api'
import { ModuleHomeImpl } from './modules/home'
import { PluginCacheImpl } from './plugins/cache'
import { PluginLocationImpl } from './plugins/location'
import { PluginNetworkImpl } from './plugins/network'

// ===================== 插件实现 ====================

GDPlugin.network = new PluginNetworkImpl()
GDPlugin.location = new PluginLocationImpl()
GDPlugin.cache = new PluginCacheImpl()

// ===================== 模块实现 ====================

GDModuleAPI.home = new ModuleHomeImpl()

// ===================== 全局变量 ====================

GDGlobal.projectName = 'Flutter Web App 示例'
