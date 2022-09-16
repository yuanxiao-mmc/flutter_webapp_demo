import { DartObject } from '@/api/base'

/**
 * 搜索关键字 Response
 */
@DartObject()
export class GDHomeSearchKeyResponse {
  /**
   * 搜索关键字列表
   */
  list?: String[]
}
