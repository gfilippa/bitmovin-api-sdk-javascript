import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Vp8VideoConfiguration from '../../../../models/Vp8VideoConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import Vp8VideoConfigurationListQueryParams from './Vp8VideoConfigurationListQueryParams';

/**
 * Vp8Api - object-oriented interface
 * @export
 * @class Vp8Api
 * @extends {BaseAPI}
 */
export default class Vp8Api extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create VP8 Codec Configuration
   * @param {Vp8VideoConfiguration} [vp8VideoConfiguration]
   * @throws {RequiredError}
   * @memberof Vp8Api
   */
  public create(vp8VideoConfiguration?: Vp8VideoConfiguration): Promise<Vp8VideoConfiguration> {
    return this.restClient.post<Vp8VideoConfiguration>('/encoding/configurations/video/vp8', {}, vp8VideoConfiguration).then((response) => {
      return new Vp8VideoConfiguration(response);
    });
  }

  /**
   * @summary Delete VP8 Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Vp8Api
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/video/vp8/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary VP8 Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof Vp8Api
   */
  public get(configurationId: string): Promise<Vp8VideoConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<Vp8VideoConfiguration>('/encoding/configurations/video/vp8/{configuration_id}', pathParamMap).then((response) => {
      return new Vp8VideoConfiguration(response);
    });
  }

  /**
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Vp8Api
   */
  public list(queryParams?: Vp8VideoConfigurationListQueryParams): Promise<PaginationResponse<Vp8VideoConfiguration>> {
    return this.restClient.get<PaginationResponse<Vp8VideoConfiguration>>('/encoding/configurations/video/vp8', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Vp8VideoConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Vp8VideoConfiguration(i));
      }
      return paginationResponse;
    });
  }
}