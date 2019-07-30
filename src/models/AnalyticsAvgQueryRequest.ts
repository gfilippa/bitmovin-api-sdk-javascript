import {map} from '../common/Mapper';
import AnalyticsAttribute from './AnalyticsAttribute';
import AnalyticsBaseFilter from './AnalyticsBaseFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryRequest from './AnalyticsQueryRequest';

/**
 * @export
 * @class AnalyticsAvgQueryRequest
 */
export class AnalyticsAvgQueryRequest extends AnalyticsQueryRequest {
  constructor(obj: Partial<AnalyticsAvgQueryRequest>) {
    super(obj);
  }
}

export default AnalyticsAvgQueryRequest;
