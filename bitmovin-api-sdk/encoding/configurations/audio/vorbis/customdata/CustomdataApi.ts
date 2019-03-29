import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomData from '../../../../../models/CustomData';

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
   * @summary Vorbis Codec Configuration Custom Data
   * @param {string} configurationId Id of the codec configuration
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public getCustomData(configurationId: string): Promise<CustomData> {
    const pathParamMap = {
      configuration_id: configurationId
    };
    return this.restClient.get<CustomData>('/encoding/configurations/audio/vorbis/{configuration_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
