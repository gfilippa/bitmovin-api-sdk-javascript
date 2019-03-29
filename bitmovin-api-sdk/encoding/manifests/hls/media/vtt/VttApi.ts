import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import VttMediaInfo from '../../../../../models/VttMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import VttMediaInfoListQueryParams from './VttMediaInfoListQueryParams';

/**
 * VttApi - object-oriented interface
 * @export
 * @class VttApi
 * @extends {BaseAPI}
 */
export default class VttApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add VTT Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {VttMediaInfo} [vttMediaInfo]
   * @throws {RequiredError}
   * @memberof VttApi
   */
  public create(manifestId: string, vttMediaInfo?: VttMediaInfo): Promise<VttMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<VttMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/vtt', pathParamMap, vttMediaInfo).then((response) => {
      return new VttMediaInfo(response);
    });
  }

  /**
   * @summary Delete VTT Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the VTT media.
   * @throws {RequiredError}
   * @memberof VttApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/vtt/{media_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary VTT Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the VTT media.
   * @throws {RequiredError}
   * @memberof VttApi
   */
  public get(manifestId: string, mediaId: string): Promise<VttMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<VttMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/vtt/{media_id}', pathParamMap).then((response) => {
      return new VttMediaInfo(response);
    });
  }

  /**
   * @summary List all VTT Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof VttApi
   */
  public list(manifestId: string, queryParams?: VttMediaInfoListQueryParams): Promise<PaginationResponse<VttMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<PaginationResponse<VttMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/vtt', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<VttMediaInfo>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new VttMediaInfo(i));
      }
      return paginationResponse;
    });
  }
}