import {map} from '../common/Mapper';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class InputStreamTypeResponse
 */
export default class InputStreamTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the input stream
   * @type {InputStreamType}
   * @memberof InputStreamTypeResponse
   */
  public type?: InputStreamType;
}
