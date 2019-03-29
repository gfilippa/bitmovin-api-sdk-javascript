import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import AudioMediaInfo from '../../../../../models/AudioMediaInfo';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../../models/PaginationResponse';
import AudioMediaInfoListQueryParams from './AudioMediaInfoListQueryParams';

/**
 * AudioApi - object-oriented interface
 * @export
 * @class AudioApi
 * @extends {BaseAPI}
 */
export default class AudioApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {AudioMediaInfo} [audioMediaInfo]
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public create(manifestId: string, audioMediaInfo?: AudioMediaInfo): Promise<AudioMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.post<AudioMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/audio', pathParamMap, audioMediaInfo).then((response) => {
      return new AudioMediaInfo(response);
    });
  }

  /**
   * @summary Delete Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public delete(manifestId: string, mediaId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/hls/{manifest_id}/media/audio/{media_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Audio Media Details
   * @param {string} manifestId Id of the hls manifest.
   * @param {string} mediaId Id of the audio media.
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public get(manifestId: string, mediaId: string): Promise<AudioMediaInfo> {
    const pathParamMap = {
      manifest_id: manifestId,
      media_id: mediaId
    };
    return this.restClient.get<AudioMediaInfo>('/encoding/manifests/hls/{manifest_id}/media/audio/{media_id}', pathParamMap).then((response) => {
      return new AudioMediaInfo(response);
    });
  }

  /**
   * @summary List all Audio Media
   * @param {string} manifestId Id of the hls manifest.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AudioApi
   */
  public list(manifestId: string, queryParams?: AudioMediaInfoListQueryParams): Promise<PaginationResponse<AudioMediaInfo>> {
    const pathParamMap = {
      manifest_id: manifestId
    };
    return this.restClient.get<PaginationResponse<AudioMediaInfo>>('/encoding/manifests/hls/{manifest_id}/media/audio', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AudioMediaInfo>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AudioMediaInfo(i));
      }
      return paginationResponse;
    });
  }
}