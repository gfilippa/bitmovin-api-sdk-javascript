import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import SccCaption from '../../../../../../models/SccCaption';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import SccCaptionListQueryParams from './SccCaptionListQueryParams';

/**
 * SccApi - object-oriented interface
 * @export
 * @class SccApi
 * @extends {BaseAPI}
 */
export default class SccApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Embed SCC captions as 608/708 into Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {SccCaption} [sccCaption]
   * @throws {RequiredError}
   * @memberof SccApi
   */
  public create(encodingId: string, streamId: string, sccCaption?: SccCaption): Promise<SccCaption> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<SccCaption>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/scc', pathParamMap, sccCaption).then((response) => {
      return new SccCaption(response);
    });
  }

  /**
   * @summary Delete SCC captions as 608/708 from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} captionsId Id of the caption.
   * @throws {RequiredError}
   * @memberof SccApi
   */
  public delete(encodingId: string, streamId: string, captionsId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      captions_id: captionsId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/scc/{captions_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Embed SCC captions as 608/708 Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} captionsId Id of the caption.
   * @throws {RequiredError}
   * @memberof SccApi
   */
  public get(encodingId: string, streamId: string, captionsId: string): Promise<SccCaption> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      captions_id: captionsId
    };
    return this.restClient.get<SccCaption>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/scc/{captions_id}', pathParamMap).then((response) => {
      return new SccCaption(response);
    });
  }

  /**
   * @summary List SCC captions as 608/708 from Stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SccApi
   */
  public list(encodingId: string, streamId: string, queryParams?: SccCaptionListQueryParams): Promise<PaginationResponse<SccCaption>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<SccCaption>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/captions/608-708/scc', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SccCaption>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SccCaption(i));
      }
      return paginationResponse;
    });
  }
}
