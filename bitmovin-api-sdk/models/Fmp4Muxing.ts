import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class Fmp4Muxing
 */
export default class Fmp4Muxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.initSegmentName = map(obj.initSegmentName);
    this.initSegmentNameTemplate = map(obj.initSegmentNameTemplate);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }

  /**
   * Length of the fragments in seconds
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentLength: number;
  /**
   * Segment naming policy
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public segmentNaming?: string;
  /**
   * Segment naming policy with placeholders which will be replaced during the encoding. The result will be saved in segmentNaming. {rand:4} gets replaced with an alphanumeric string of length specified after the colon. Defaults to 32. If this field is set, segmentNaming must not be specified.
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public segmentNamingTemplate?: string;
  /**
   * Init segment name
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public initSegmentName?: string;
  /**
   * Segment naming policy with placeholders which will be replaced during the encoding, similar to segmentNamingTemplate. The result will be saved in initSegmentName. If this field is set, initSegmentName must not be specified and segmentNamingTemplate should be set. 
   * @type {string}
   * @memberof Fmp4Muxing
   */
  public initSegmentNameTemplate?: string;
  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof Fmp4Muxing
   */
  public segmentsMuxed?: number;
}