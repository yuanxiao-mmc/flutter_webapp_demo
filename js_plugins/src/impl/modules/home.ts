import { ModuleHome } from '@/api/modules/home'
import { GDHomeSearchKeyResponse } from '@/api/modules/home/header'

export class ModuleHomeImpl implements ModuleHome {
  async fetchSearchKeys(): Promise<GDHomeSearchKeyResponse> {
    return new Promise<GDHomeSearchKeyResponse>((resolve) => {
      let result = new GDHomeSearchKeyResponse()
      let list = ['test 1', 'test 2', 'test 3']
      result.list = list
      resolve(result)
    })
  }
}
