import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import DailyApi from './daily/DailyApi';
import EncodingsApi from './encodings/EncodingsApi';
import LabelsApi from './labels/LabelsApi';
import Statistics from '../../models/Statistics';
import PaginationResponse from '../../models/PaginationResponse';
import { StatisticsListQueryParams, StatisticsListQueryParamsBuilder } from './StatisticsListQueryParams';

/**
 * StatisticsApi - object-oriented interface
 * @export
 * @class StatisticsApi
 * @extends {BaseAPI}
 */
export default class StatisticsApi extends BaseAPI {
  public daily: DailyApi;
  public encodings: EncodingsApi;
  public labels: LabelsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.daily = new DailyApi(configuration);
    this.encodings = new EncodingsApi(configuration);
    this.labels = new LabelsApi(configuration);
  }

  /**
   * @summary Show Overall Statistics
   * @throws {RequiredError}
   * @memberof StatisticsApi
   */
  public get(): Promise<Statistics> {
    return this.restClient.get<Statistics>('/encoding/statistics', {}).then((response) => {
      return new Statistics(response);
    });
  }

  /**
   * @summary Show Overall Statistics Within Specific Dates
   * @param {Date} from Start date, format: yyyy-MM-dd
   * @param {Date} to End date, format: yyyy-MM-dd
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof StatisticsApi
   */
  public list(from: Date, to: Date, queryParameters?: StatisticsListQueryParams | ((q: StatisticsListQueryParamsBuilder) => StatisticsListQueryParamsBuilder)): Promise<PaginationResponse<Statistics>> {
    const pathParamMap = {
      from: from,
      to: to
    };
    let queryParams: StatisticsListQueryParams = {};
    if (typeof queryParameters === 'function') {
        queryParams = queryParameters(new StatisticsListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
        queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Statistics>>('/encoding/statistics/{from}/{to}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Statistics>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Statistics(i));
      }
      return paginationResponse;
    });
  }
}