import {map} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSet from './AdaptationSet';
import AdaptationSetRole from './AdaptationSetRole';
import CustomAttribute from './CustomAttribute';

/**
 * @export
 * @class VideoAdaptationSet
 */
export default class VideoAdaptationSet extends AdaptationSet {
  constructor(obj: any) {
    super(obj);
  }

}