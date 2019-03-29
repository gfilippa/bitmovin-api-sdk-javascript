import {map} from '../common/Mapper';
import BasicInputStream from './BasicInputStream';

/**
 * @export
 * @class TimeBasedTrimmingInputStream
 */
export default class TimeBasedTrimmingInputStream extends BasicInputStream {
  constructor(obj: any) {
    super(obj);
    this.inputStreamId = map(obj.inputStreamId);
    this.offset = map(obj.offset);
    this.duration = map(obj.duration);
  }

  /**
   * The id of the ingest input stream that should be trimmed
   * @type {string}
   * @memberof TimeBasedTrimmingInputStream
   */
  public inputStreamId?: string;
  /**
   * Defines the offset in seconds at which the encoding should start, beginning at 0. The frame indicated by this value will be included in the encoding
   * @type {number}
   * @memberof TimeBasedTrimmingInputStream
   */
  public offset?: number;
  /**
   * Defines how many seconds of the input will be encoded
   * @type {number}
   * @memberof TimeBasedTrimmingInputStream
   */
  public duration?: number;
}