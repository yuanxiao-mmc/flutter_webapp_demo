import { GDGlobal, GDModuleAPI, GDPlugin } from './api/api'

import './impl/impl'
import './style.css'

declare global {
  interface Window {
    GDPlugin: GDPlugin

    GDModuleAPI: GDModuleAPI

    GDGlobal: GDGlobal
  }
}

if (!window.GDGlobal) {
  window.GDGlobal = GDGlobal
}

if (!window.GDPlugin) {
  window.GDPlugin = GDPlugin
}

if (!window.GDModuleAPI) {
  window.GDModuleAPI = GDModuleAPI
}
