import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class WidevineDrm
 */
export default class WidevineDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.kid = map(obj.kid);
    this.pssh = map(obj.pssh);
  }

  /**
   * 16 byte Encryption key, 32 hexadecimal characters
   * @type {string}
   * @memberof WidevineDrm
   */
  public key: string;
  /**
   * 16 byte Key id, 32 hexadecimal characters
   * @type {string}
   * @memberof WidevineDrm
   */
  public kid: string;
  /**
   * Base 64 Encoded
   * @type {string}
   * @memberof WidevineDrm
   */
  public pssh: string;
}