import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import MjpegVideoConfiguration from '../../../../models/MjpegVideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import MjpegVideoConfigurationListQueryParams from './MjpegVideoConfigurationListQueryParams';

/**
 * MjpegApi - object-oriented interface
 * @export
 * @class MjpegApi
 * @extends {BaseAPI}
 */
export default class MjpegApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create MJPEG Codec Configuration
   * @param {MjpegVideoConfiguration} [mjpegVideoConfiguration]
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public create(mjpegVideoConfiguration?: MjpegVideoConfiguration): Promise<MjpegVideoConfiguration> {
    return this.restClient.post<MjpegVideoConfiguration>('/encoding/configurations/video/mjpeg', {}, mjpegVideoConfiguration).then((response) => {
      return new MjpegVideoConfiguration(response);
    });
  }

  /**
   * @summary Delete MJPEG Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/mjpeg/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary MJPEG Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public get(configurationId: string): Promise<MjpegVideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<MjpegVideoConfiguration>('/encoding/configurations/video/mjpeg/{configuration_id}', pathParamMap).then((response) => {
      return new MjpegVideoConfiguration(response);
    });
  }

  /**
   * @summary List MJPEG Configurations
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof MjpegApi
   */
  public list(queryParams?: MjpegVideoConfigurationListQueryParams): Promise<PaginationResponse<MjpegVideoConfiguration>> {
    return this.restClient.get<PaginationResponse<MjpegVideoConfiguration>>('/encoding/configurations/video/mjpeg', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<MjpegVideoConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new MjpegVideoConfiguration(i));
      }
      return paginationResponse;
    });
  }
}