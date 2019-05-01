import {map} from '../common/Mapper';
import DashRepresentationType from './DashRepresentationType';
import DashRepresentationTypeMode from './DashRepresentationTypeMode';
import DashSegmentedRepresentation from './DashSegmentedRepresentation';

/**
 * @export
 * @class DashWebmRepresentation
 */
export default class DashWebmRepresentation extends DashSegmentedRepresentation {
  constructor(obj: any) {
    super(obj);
  }

}
