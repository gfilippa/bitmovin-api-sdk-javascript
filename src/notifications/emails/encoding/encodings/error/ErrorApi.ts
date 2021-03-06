import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import EmailNotification from '../../../../../models/EmailNotification';
import EncodingErrorEmailNotification from '../../../../../models/EncodingErrorEmailNotification';
import PaginationResponse from '../../../../../models/PaginationResponse';

/**
 * ErrorApi - object-oriented interface
 * @export
 * @class ErrorApi
 * @extends {BaseAPI}
 */
export default class ErrorApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Encoding Error Email Notification (All Encodings)
   * @param {EncodingErrorEmailNotification} encodingErrorEmailNotification Add a new email notification if an encoding received an error
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public create(encodingErrorEmailNotification?: EncodingErrorEmailNotification): Promise<PaginationResponse<EncodingErrorEmailNotification>> {
    return this.restClient.post<PaginationResponse<EncodingErrorEmailNotification>>('/notifications/emails/encoding/encodings/error', {}, encodingErrorEmailNotification).then((response) => {
      return new PaginationResponse<EncodingErrorEmailNotification>(response, EncodingErrorEmailNotification);
    });
  }

  /**
   * @summary Add Encoding Error Email Notification (Specific Encoding)
   * @param {string} encodingId Id of the encoding resource
   * @param {EmailNotification} emailNotification The email notifications object
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public createByEncodingId(encodingId: string, emailNotification?: EmailNotification): Promise<EmailNotification> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<EmailNotification>('/notifications/emails/encoding/encodings/{encoding_id}/error', pathParamMap, emailNotification).then((response) => {
      return map(response, EmailNotification);
    });
  }

  /**
   * @summary Replace Encoding Error Email Notification
   * @param {string} notificationId Id of the email notification
   * @param {EmailNotification} emailNotification The email notification with the updated values
   * @throws {BitmovinError}
   * @memberof ErrorApi
   */
  public update(notificationId: string, emailNotification?: EmailNotification): Promise<EmailNotification> {
    const pathParamMap = {
      notification_id: notificationId
    };
    return this.restClient.put<EmailNotification>('/notifications/emails/encoding/encodings/error/{notification_id}', pathParamMap, emailNotification).then((response) => {
      return map(response, EmailNotification);
    });
  }
}
