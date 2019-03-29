import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import NotificationStateEntry from '../../models/NotificationStateEntry';
import PaginationResponse from '../../models/PaginationResponse';
import NotificationStateEntryListQueryParams from './NotificationStateEntryListQueryParams';

/**
 * StateApi - object-oriented interface
 * @export
 * @class StateApi
 * @extends {BaseAPI}
 */
export default class StateApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List Notification State History (Specific Resource)
   * @param {string} notificationId Id of the notification
   * @param {string} resourceId Id of the resource, e.g. encoding id
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof StateApi
   */
  public list(notificationId: string, resourceId: string, queryParams?: NotificationStateEntryListQueryParams): Promise<PaginationResponse<NotificationStateEntry>> {
    const pathParamMap = {
      notification_id: notificationId,
      resource_id: resourceId
    };
    return this.restClient.get<PaginationResponse<NotificationStateEntry>>('/notifications/{notification_id}/state/{resource_id}', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<NotificationStateEntry>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new NotificationStateEntry(i));
      }
      return paginationResponse;
    });
  }
}