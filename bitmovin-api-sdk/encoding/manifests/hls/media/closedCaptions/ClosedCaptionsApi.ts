import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import ClosedCaptionsMediaInfo from '../../../../../models/ClosedCaptionsMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import ClosedCaptionsMediaInfoListQueryParams from './ClosedCaptionsMediaInfoListQueryParams';

/**
 * ClosedCaptionsApi - object-oriented interface
 * @export
 * @class ClosedCaptionsApi
 * @extends {BaseAPI}
 */
export default class ClosedCaptionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Closed Captions Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {ClosedCaptionsMediaInfo} [closedCaptionsMediaInfo]
   * @throws {RequiredError}
   * @memberof ClosedCaptionsApi
   */
  public create(manifestId: string, closedCaptionsMediaInfo?: ClosedCaptionsMediaInfo): Promise<ClosedCaptionsMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<ClosedCaptionsMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/closed-captions', pathParamMap, closedCaptionsMediaInfo).then((response) => {
      return new ClosedCaptionsMediaInfo(response);
    });
  }

  /**
   * @summary Delete Closed Captions Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the closed captions media.
   * @throws {RequiredError}
   * @memberof ClosedCaptionsApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/closed-captions/{media_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Closed Captions Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the closed captions media.
   * @throws {RequiredError}
   * @memberof ClosedCaptionsApi
   */
  public get(manifestId: string, mediaId: string): Promise<ClosedCaptionsMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<ClosedCaptionsMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/closed-captions/{media_id}', pathParamMap).then((response) => {
      return new ClosedCaptionsMediaInfo(response);
    });
  }

  /**
   * @summary List all Closed Captions Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ClosedCaptionsApi
   */
  public list(manifestId: string, queryParams?: ClosedCaptionsMediaInfoListQueryParams): Promise<PaginationResponse<ClosedCaptionsMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<PaginationResponse<ClosedCaptionsMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/closed-captions', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ClosedCaptionsMediaInfo>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ClosedCaptionsMediaInfo(i));
      }
      return paginationResponse;
    });
  }
}
