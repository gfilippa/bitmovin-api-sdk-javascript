import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomData from '../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Encoding Custom Data
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public getCustomData(encodingId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}