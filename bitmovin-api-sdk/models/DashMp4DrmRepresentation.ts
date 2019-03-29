import {map} from '../common/Mapper';
import DashMp4Representation from './DashMp4Representation';

/**
 * @export
 * @class DashMp4DrmRepresentation
 */
export default class DashMp4DrmRepresentation extends DashMp4Representation {
  constructor(obj: any) {
    super(obj);
    this.drmId = map(obj.drmId);
  }

  /**
   * DRM Id
   * @type {string}
   * @memberof DashMp4DrmRepresentation
   */
  public drmId: string;
}