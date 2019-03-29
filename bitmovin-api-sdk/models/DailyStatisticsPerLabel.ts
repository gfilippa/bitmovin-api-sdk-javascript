import {map} from '../common/Mapper';
import DailyStatistics from './DailyStatistics';

/**
 * @export
 * @class DailyStatisticsPerLabel
 */
export default class DailyStatisticsPerLabel {
  constructor(obj: any) {
    this.date = map(obj.date);
    this.labels = map<DailyStatistics>(obj.labels, DailyStatistics);
  }

  /**
   * Date, format. yyyy-MM-dd
   * @type {Date}
   * @memberof DailyStatisticsPerLabel
   */
  public date: Date;
  /**
   * List of labels and their aggregated statistics
   * @type {Array<DailyStatistics>}
   * @memberof DailyStatisticsPerLabel
   */
  public labels: Array<DailyStatistics>;
}