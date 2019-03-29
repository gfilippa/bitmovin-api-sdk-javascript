import {map} from '../common/Mapper';

/**
 * @export
 * @class BitmovinResponse
 */
export default class BitmovinResponse {
  constructor(obj: any) {
    this.id = map(obj.id);
  }

  /**
   * Id of the resource
   * @type {string}
   * @memberof BitmovinResponse
   */
  public id?: string;
}
