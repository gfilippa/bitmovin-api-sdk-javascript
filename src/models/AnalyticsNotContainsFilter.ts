import {map} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsAttribute from './AnalyticsAttribute';

/**
 * @export
 * @class AnalyticsNotContainsFilter
 */
export class AnalyticsNotContainsFilter extends AnalyticsAbstractFilter {
  /**
   * @type {any}
   * @memberof AnalyticsNotContainsFilter
   */
  public value: any;

  constructor(obj: Partial<AnalyticsNotContainsFilter>) {
    super(obj);
    this.value = map(obj.value);
  }
}

export default AnalyticsNotContainsFilter;
