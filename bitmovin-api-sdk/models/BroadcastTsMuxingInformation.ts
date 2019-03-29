import {map} from '../common/Mapper';
import MuxingInformationAudioTrack from './MuxingInformationAudioTrack';
import MuxingInformationVideoTrack from './MuxingInformationVideoTrack';
import ProgressiveMuxingInformation from './ProgressiveMuxingInformation';

/**
 * @export
 * @class BroadcastTsMuxingInformation
 */
export default class BroadcastTsMuxingInformation extends ProgressiveMuxingInformation {
  constructor(obj: any) {
    super(obj);
  }

}
