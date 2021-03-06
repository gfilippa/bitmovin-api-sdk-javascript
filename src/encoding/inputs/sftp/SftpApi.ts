import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import SftpInput from '../../../models/SftpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {SftpInputListQueryParams, SftpInputListQueryParamsBuilder} from './SftpInputListQueryParams';

/**
 * SftpApi - object-oriented interface
 * @export
 * @class SftpApi
 * @extends {BaseAPI}
 */
export default class SftpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create SFTP Input
   * @param {SftpInput} sftpInput The SFTP input to be created
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public create(sftpInput?: SftpInput): Promise<SftpInput> {
    return this.restClient.post<SftpInput>('/encoding/inputs/sftp', {}, sftpInput).then((response) => {
      return map(response, SftpInput);
    });
  }

  /**
   * @summary Delete SFTP Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public delete(inputId: string): Promise<SftpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<SftpInput>('/encoding/inputs/sftp/{input_id}', pathParamMap).then((response) => {
      return map(response, SftpInput);
    });
  }

  /**
   * @summary SFTP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public get(inputId: string): Promise<SftpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<SftpInput>('/encoding/inputs/sftp/{input_id}', pathParamMap).then((response) => {
      return map(response, SftpInput);
    });
  }

  /**
   * @summary List SFTP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SftpApi
   */
  public list(queryParameters?: SftpInputListQueryParams | ((q: SftpInputListQueryParamsBuilder) => SftpInputListQueryParamsBuilder)): Promise<PaginationResponse<SftpInput>> {
    let queryParams: SftpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SftpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SftpInput>>('/encoding/inputs/sftp', {}, queryParams).then((response) => {
      return new PaginationResponse<SftpInput>(response, SftpInput);
    });
  }
}
