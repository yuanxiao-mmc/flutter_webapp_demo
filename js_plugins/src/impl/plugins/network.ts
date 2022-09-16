import { PluginNetwork, GDRequest, GDResponse } from '@/api/plugins/network'

export class PluginNetworkImpl implements PluginNetwork {
  request(request: GDRequest): Promise<GDResponse> {
    return new Promise<GDResponse>((resolve) => {
      // ...
      fetch(request.path)
        .then((response) => {
          let result = new GDResponse()
          result.ok = true
          result.code = response.status
          result.data = response.body
          result.rawData = response
          resolve(result)
        })
        .catch((error) => {
          let result = new GDResponse()
          result.ok = false
          result.code = error.status
          result.error = error.message
          resolve(result)
        })
    })
  }
}
