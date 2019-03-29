import {map} from '../common/Mapper';

/**
 * @export
 * @class ReprioritizeEncodingRequest
 */
export default class ReprioritizeEncodingRequest {
  constructor(obj: any) {
    this.priority = map(obj.priority);
  }

  /**
   * Priority of the Encoding
   * @type {number}
   * @memberof ReprioritizeEncodingRequest
   */
  public priority: number;
}
