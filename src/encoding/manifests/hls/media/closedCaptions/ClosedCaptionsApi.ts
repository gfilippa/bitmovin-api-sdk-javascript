import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import ClosedCaptionsMediaInfo from '../../../../../models/ClosedCaptionsMediaInfo';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {ClosedCaptionsMediaInfoListQueryParams, ClosedCaptionsMediaInfoListQueryParamsBuilder} from './ClosedCaptionsMediaInfoListQueryParams';

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
   * @param {ClosedCaptionsMediaInfo} closedCaptionsMediaInfo The Closed Captions Media to be added
   * @throws {BitmovinError}
   * @memberof ClosedCaptionsApi
   */
  public create(manifestId: string, closedCaptionsMediaInfo?: ClosedCaptionsMediaInfo): Promise<ClosedCaptionsMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<ClosedCaptionsMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/closed-captions', pathParamMap, closedCaptionsMediaInfo).then((response) => {
      return map(response, ClosedCaptionsMediaInfo);
    });
  }

  /**
   * @summary Delete Closed Captions Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the closed captions media.
   * @throws {BitmovinError}
   * @memberof ClosedCaptionsApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/closed-captions/{media_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Closed Captions Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the closed captions media.
   * @throws {BitmovinError}
   * @memberof ClosedCaptionsApi
   */
  public get(manifestId: string, mediaId: string): Promise<ClosedCaptionsMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<ClosedCaptionsMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/closed-captions/{media_id}', pathParamMap).then((response) => {
      return map(response, ClosedCaptionsMediaInfo);
    });
  }

  /**
   * @summary List all Closed Captions Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ClosedCaptionsApi
   */
  public list(manifestId: string, queryParameters?: ClosedCaptionsMediaInfoListQueryParams | ((q: ClosedCaptionsMediaInfoListQueryParamsBuilder) => ClosedCaptionsMediaInfoListQueryParamsBuilder)): Promise<PaginationResponse<ClosedCaptionsMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    let queryParams: ClosedCaptionsMediaInfoListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ClosedCaptionsMediaInfoListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ClosedCaptionsMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/closed-captions', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ClosedCaptionsMediaInfo>(response, ClosedCaptionsMediaInfo);
    });
  }
}
