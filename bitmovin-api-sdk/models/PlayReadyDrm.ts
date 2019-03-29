import {map} from '../common/Mapper';
import Drm from './Drm';
import EncodingOutput from './EncodingOutput';
import PlayReadyEncryptionMethod from './PlayReadyEncryptionMethod';

/**
 * @export
 * @class PlayReadyDrm
 */
export default class PlayReadyDrm extends Drm {
  constructor(obj: any) {
    super(obj);
    this.key = map(obj.key);
    this.keySeed = map(obj.keySeed);
    this.laUrl = map(obj.laUrl);
    this.method = map(obj.method);
    this.kid = map(obj.kid);
  }

  /**
   * 16 byte encryption key, 32 hexadecimal characters. Either key or keySeed is required.
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public key?: string;
  /**
   * Key seed to generate key. Either key or keySeed is required.
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public keySeed?: string;
  /**
   * URL of the license server
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public laUrl?: string;
  /**
   * @type {PlayReadyEncryptionMethod}
   * @memberof PlayReadyDrm
   */
  public method?: PlayReadyEncryptionMethod;
  /**
   * Key identifier
   * @type {string}
   * @memberof PlayReadyDrm
   */
  public kid?: string;
}