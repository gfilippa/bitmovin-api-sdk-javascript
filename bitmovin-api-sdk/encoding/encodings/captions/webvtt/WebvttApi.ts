import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import WebVttExtract from '../../../../models/WebVttExtract';
import PaginationResponse from '../../../../models/PaginationResponse';
import WebVttExtractListQueryParams from './WebVttExtractListQueryParams';

/**
 * WebvttApi - object-oriented interface
 * @export
 * @class WebvttApi
 * @extends {BaseAPI}
 */
export default class WebvttApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Extract WebVtt Captions
   * @param {string} encodingId Id of the encoding.
   * @param {WebVttExtract} [webVttExtract] The extract WebVtt captions to be created
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public create(encodingId: string, webVttExtract?: WebVttExtract): Promise<WebVttExtract> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebVttExtract>('/encoding/encodings/{encoding_id}/captions/webvtt', pathParamMap, webVttExtract).then((response) => {
      return new WebVttExtract(response);
    });
  }

  /**
   * @summary Delete Extract WebVtt Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions configuration.
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public delete(encodingId: string, captionsId: string): Promise<WebVttExtract> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.delete<WebVttExtract>('/encoding/encodings/{encoding_id}/captions/webvtt/{captions_id}', pathParamMap).then((response) => {
      return new WebVttExtract(response);
    });
  }

  /**
   * @summary Get Extract WebVtt Captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions.
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public get(encodingId: string, captionsId: string): Promise<WebVttExtract> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.get<WebVttExtract>('/encoding/encodings/{encoding_id}/captions/webvtt/{captions_id}', pathParamMap).then((response) => {
      return new WebVttExtract(response);
    });
  }

  /**
   * @summary List Extract WebVtt Captions
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public list(encodingId: string, queryParams?: WebVttExtractListQueryParams): Promise<PaginationResponse<WebVttExtract>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<WebVttExtract>>('/encoding/encodings/{encoding_id}/captions/webvtt', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<WebVttExtract>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new WebVttExtract(i));
      }
      return paginationResponse;
    });
  }
}
