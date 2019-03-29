import {map} from '../common/Mapper';
import DeinterlaceFrameSelectionMode from './DeinterlaceFrameSelectionMode';
import DeinterlaceMode from './DeinterlaceMode';
import Filter from './Filter';
import PictureFieldParity from './PictureFieldParity';

/**
 * @export
 * @class DeinterlaceFilter
 */
export default class DeinterlaceFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.parity = map(obj.parity);
    this.mode = map(obj.mode);
    this.frameSelectionMode = map(obj.frameSelectionMode);
  }

  /**
   * @type {PictureFieldParity}
   * @memberof DeinterlaceFilter
   */
  public parity?: PictureFieldParity;
  /**
   * @type {DeinterlaceMode}
   * @memberof DeinterlaceFilter
   */
  public mode?: DeinterlaceMode;
  /**
   * @type {DeinterlaceFrameSelectionMode}
   * @memberof DeinterlaceFilter
   */
  public frameSelectionMode?: DeinterlaceFrameSelectionMode;
}