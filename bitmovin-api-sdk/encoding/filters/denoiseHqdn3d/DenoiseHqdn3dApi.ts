import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import DenoiseHqdn3dFilter from '../../../models/DenoiseHqdn3dFilter';
import PaginationResponse from '../../../models/PaginationResponse';
import DenoiseHqdn3dFilterListQueryParams from './DenoiseHqdn3dFilterListQueryParams';

/**
 * DenoiseHqdn3dApi - object-oriented interface
 * @export
 * @class DenoiseHqdn3dApi
 * @extends {BaseAPI}
 */
export default class DenoiseHqdn3dApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Denoise hqdn3d Filter
   * @param {DenoiseHqdn3dFilter} [denoiseHqdn3dFilter] TODO Add Description
   * @throws {RequiredError}
   * @memberof DenoiseHqdn3dApi
   */
  public create(denoiseHqdn3dFilter?: DenoiseHqdn3dFilter): Promise<DenoiseHqdn3dFilter> {
    return this.restClient.post<DenoiseHqdn3dFilter>('/encoding/filters/denoise-hqdn3d', {}, denoiseHqdn3dFilter).then((response) => {
      return new DenoiseHqdn3dFilter(response);
    });
  }

  /**
   * @summary Delete Denoise hqdn3d Filter
   * @param {string} filterId Id of the denoise hqdn3d filter
   * @throws {RequiredError}
   * @memberof DenoiseHqdn3dApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/denoise-hqdn3d/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Denoise hqdn3d Filter Details
   * @param {string} filterId Id of the denoise hqdn3d filter
   * @throws {RequiredError}
   * @memberof DenoiseHqdn3dApi
   */
  public get(filterId: string): Promise<DenoiseHqdn3dFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<DenoiseHqdn3dFilter>('/encoding/filters/denoise-hqdn3d/{filter_id}', pathParamMap).then((response) => {
      return new DenoiseHqdn3dFilter(response);
    });
  }

  /**
   * @summary List Denoise hqdn3d Filters
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof DenoiseHqdn3dApi
   */
  public list(queryParams?: DenoiseHqdn3dFilterListQueryParams): Promise<PaginationResponse<DenoiseHqdn3dFilter>> {
    return this.restClient.get<PaginationResponse<DenoiseHqdn3dFilter>>('/encoding/filters/denoise-hqdn3d', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<DenoiseHqdn3dFilter>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new DenoiseHqdn3dFilter(i));
      }
      return paginationResponse;
    });
  }
}