import { DartObject } from '../base'

export interface GDRequest {
  /**
   * GET / POST / PUT / DELETE
   */
  method: string
  /**
   * 请求路径
   */
  path: string
  /**
   * query
   */
  query: Map<any, any>
  /**
   * body
   */
  body: Map<any, any>
  /**
   * 请求头
   */
  headers: Map<any, any>
  /**
   * 域名
   */
  host: string
}

@DartObject()
export class GDResponse {
  /**
   * 请求是否成功
   */
  ok?: boolean
  /**
   * service code
   */
  code?: Number
  /**
   * 错误信息
   */
  error?: string
  /**
   * 数据
   */
  data?: any
  /**
   * 原始数据
   */
  rawData?: any
}

@DartObject()
export class GDTextResponse {
  /**
   * 数据
   */
  data?: string
}

@DartObject()
export class GDBooleanResponse {
  /**
   * 数据
   */
  data?: boolean
}

/*
 * 网络插件
 */
export interface PluginNetwork {
  /**
   * 调用 JS 网络请
   * @param request Request
   */
  request(request: GDRequest): Promise<GDResponse>
}
