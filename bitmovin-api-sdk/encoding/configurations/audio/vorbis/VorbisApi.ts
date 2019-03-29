import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import VorbisAudioConfiguration from '../../../../models/VorbisAudioConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import VorbisAudioConfigurationListQueryParams from './VorbisAudioConfigurationListQueryParams';

/**
 * VorbisApi - object-oriented interface
 * @export
 * @class VorbisApi
 * @extends {BaseAPI}
 */
export default class VorbisApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Vorbis Codec Configuration
   * @param {VorbisAudioConfiguration} [vorbisAudioConfiguration]
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public create(vorbisAudioConfiguration?: VorbisAudioConfiguration): Promise<VorbisAudioConfiguration> {
    return this.restClient.post<VorbisAudioConfiguration>('/encoding/configurations/audio/vorbis', {}, vorbisAudioConfiguration).then((response) => {
      return new VorbisAudioConfiguration(response);
    });
  }

  /**
   * @summary Delete Vorbis Codec Configuration
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public delete(configurationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/configurations/audio/vorbis/{configuration_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Vorbis Codec Configuration Details
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public get(configurationId: string): Promise<VorbisAudioConfiguration> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<VorbisAudioConfiguration>('/encoding/configurations/audio/vorbis/{configuration_id}', pathParamMap).then((response) => {
      return new VorbisAudioConfiguration(response);
    });
  }

  /**
   * @summary List Vorbis Configurations
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VorbisApi
   */
  public list(queryParams?: VorbisAudioConfigurationListQueryParams): Promise<PaginationResponse<VorbisAudioConfiguration>> {
    return this.restClient.get<PaginationResponse<VorbisAudioConfiguration>>('/encoding/configurations/audio/vorbis', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<VorbisAudioConfiguration>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new VorbisAudioConfiguration(i));
      }
      return paginationResponse;
    });
  }
}
