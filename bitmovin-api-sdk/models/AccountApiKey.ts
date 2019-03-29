import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AccountApiKey
 */
export default class AccountApiKey extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.value = map(obj.value);
  }

  /**
   * Key value for authentication with the Bitmovin API
   * @type {string}
   * @memberof AccountApiKey
   */
  public value: string;
}
