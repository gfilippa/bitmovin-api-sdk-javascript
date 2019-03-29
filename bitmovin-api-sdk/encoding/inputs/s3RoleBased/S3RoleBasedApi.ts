import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import S3RoleBasedInput from '../../../models/S3RoleBasedInput';
import PaginationResponse from '../../../models/PaginationResponse';
import S3RoleBasedInputListQueryParams from './S3RoleBasedInputListQueryParams';

/**
 * S3RoleBasedApi - object-oriented interface
 * @export
 * @class S3RoleBasedApi
 * @extends {BaseAPI}
 */
export default class S3RoleBasedApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create S3 Role-based Input
   * @param {S3RoleBasedInput} [s3RoleBasedInput] The S3 Role-based input to be created
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public create(s3RoleBasedInput?: S3RoleBasedInput): Promise<S3RoleBasedInput> {
    return this.restClient.post<S3RoleBasedInput>('/encoding/inputs/s3-role-based', {}, s3RoleBasedInput).then((response) => {
      return new S3RoleBasedInput(response);
    });
  }

  /**
   * @summary Delete S3 Role-based Input
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public delete(inputId: string): Promise<S3RoleBasedInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<S3RoleBasedInput>('/encoding/inputs/s3-role-based/{input_id}', pathParamMap).then((response) => {
      return new S3RoleBasedInput(response);
    });
  }

  /**
   * @summary S3 Role-based Input Details
   * @param {string} inputId Id of the input
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public get(inputId: string): Promise<S3RoleBasedInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<S3RoleBasedInput>('/encoding/inputs/s3-role-based/{input_id}', pathParamMap).then((response) => {
      return new S3RoleBasedInput(response);
    });
  }

  /**
   * @summary List S3 Role-based Inputs
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof S3RoleBasedApi
   */
  public list(queryParams?: S3RoleBasedInputListQueryParams): Promise<PaginationResponse<S3RoleBasedInput>> {
    return this.restClient.get<PaginationResponse<S3RoleBasedInput>>('/encoding/inputs/s3-role-based', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<S3RoleBasedInput>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new S3RoleBasedInput(i));
      }
      return paginationResponse;
    });
  }
}
