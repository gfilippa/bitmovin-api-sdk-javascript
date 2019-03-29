import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import EncodingsApi from './encodings/EncodingsApi';
import EmailNotification from '../../../models/EmailNotification';
import PaginationResponse from '../../../models/PaginationResponse';
import EmailNotificationListQueryParams from './EmailNotificationListQueryParams';

/**
 * EncodingApi - object-oriented interface
 * @export
 * @class EncodingApi
 * @extends {BaseAPI}
 */
export default class EncodingApi extends BaseAPI {
  public encodings: EncodingsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.encodings = new EncodingsApi(configuration);
  }

  /**
   * @summary List Email Notifications (All Encodings)
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof EncodingApi
   */
  public list(queryParams?: EmailNotificationListQueryParams): Promise<PaginationResponse<EmailNotification>> {
    return this.restClient.get<PaginationResponse<EmailNotification>>('/notifications/emails/encoding', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<EmailNotification>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new EmailNotification(i));
      }
      return paginationResponse;
    });
  }
}
