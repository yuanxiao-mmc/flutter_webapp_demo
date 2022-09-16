import { PluginCache } from '@/api/plugins/cache'

export class PluginCacheImpl implements PluginCache {
  removeLocalStorage(key: string): void {
    localStorage.removeItem(key)
  }
  saveLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value)
  }
  getLocalStorage(key: string) {
    localStorage.getItem(key)
  }
}
