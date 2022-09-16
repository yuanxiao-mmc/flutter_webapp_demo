import { PluginLocation } from '@/api/plugins/location'

export class PluginLocationImpl implements PluginLocation {
  replace(url: string): void {
    window.location.replace(url)
  }

  href(url: string): void {
    window.location.href = url
  }

  open(url: string): void {
    window.open(url)
  }
}
