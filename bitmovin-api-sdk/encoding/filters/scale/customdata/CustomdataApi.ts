import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomData from '../../../../models/CustomData';

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
   * @summary Scale Filter Custom Data
   * @param {string} filterId Id of the scale filter
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public getCustomData(filterId: string): Promise<CustomData> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<CustomData>('/encoding/filters/scale/{filter_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}