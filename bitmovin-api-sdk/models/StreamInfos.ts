import {map} from '../common/Mapper';
import StreamInfosDetails from './StreamInfosDetails';

/**
 * @export
 * @class StreamInfos
 */
export default class StreamInfos {
  constructor(obj: any) {
    this.time = map(obj.time);
    this.streamInfos = map<StreamInfosDetails>(obj.streamInfos, StreamInfosDetails);
  }

  /**
   * Timestamp of the event expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof StreamInfos
   */
  public time: Date;
  /**
   * Details about billable minutes for each resolution category
   * @type {Array<StreamInfosDetails>}
   * @memberof StreamInfos
   */
  public streamInfos?: Array<StreamInfosDetails>;
}
