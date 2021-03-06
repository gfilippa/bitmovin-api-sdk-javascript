import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import DomainsApi from './domains/DomainsApi';
import StatusApi from './status/StatusApi';
import DownloadApi from './download/DownloadApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import CustomPlayerBuildDetails from '../../../models/CustomPlayerBuildDetails';
import CustomPlayerBuildStatus from '../../../models/CustomPlayerBuildStatus';
import PaginationResponse from '../../../models/PaginationResponse';

/**
 * WebApi - object-oriented interface
 * @export
 * @class WebApi
 * @extends {BaseAPI}
 */
export default class WebApi extends BaseAPI {
  public domains: DomainsApi;
  public status: StatusApi;
  public download: DownloadApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.domains = new DomainsApi(configuration);
    this.status = new StatusApi(configuration);
    this.download = new DownloadApi(configuration);
  }

  /**
   * @summary Add Custom Web Player Build
   * @param {CustomPlayerBuildDetails} customPlayerBuildDetails The Custom Web Player Build to be added
   * @throws {BitmovinError}
   * @memberof WebApi
   */
  public create(customPlayerBuildDetails?: CustomPlayerBuildDetails): Promise<CustomPlayerBuildDetails> {
    return this.restClient.post<CustomPlayerBuildDetails>('/player/custom-builds/web', {}, customPlayerBuildDetails).then((response) => {
      return map(response, CustomPlayerBuildDetails);
    });
  }

  /**
   * @summary Custom Web Player Build Details
   * @param {string} customBuildId Id of the custom player build
   * @throws {BitmovinError}
   * @memberof WebApi
   */
  public get(customBuildId: string): Promise<CustomPlayerBuildStatus> {
    const pathParamMap = {
      custom_build_id: customBuildId
    };
    return this.restClient.get<CustomPlayerBuildStatus>('/player/custom-builds/web/{custom_build_id}', pathParamMap).then((response) => {
      return map(response, CustomPlayerBuildStatus);
    });
  }

  /**
   * @summary List Custom Web Player Builds
   * @throws {BitmovinError}
   * @memberof WebApi
   */
  public list(): Promise<PaginationResponse<CustomPlayerBuildDetails>> {
    return this.restClient.get<PaginationResponse<CustomPlayerBuildDetails>>('/player/custom-builds/web', {}).then((response) => {
      return new PaginationResponse<CustomPlayerBuildDetails>(response, CustomPlayerBuildDetails);
    });
  }

  /**
   * @summary Start Custom Web Player Build
   * @param {string} customBuildId Id of the custom player build
   * @throws {BitmovinError}
   * @memberof WebApi
   */
  public start(customBuildId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      custom_build_id: customBuildId
    };
    return this.restClient.post<BitmovinResponse>('/player/custom-builds/web/{custom_build_id}/start', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }
}
