import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import PrewarmEncoderSettings from '../../../../models/PrewarmEncoderSettings';
import PaginationResponse from '../../../../models/PaginationResponse';
import PrewarmEncoderSettingsListQueryParams from './PrewarmEncoderSettingsListQueryParams';

/**
 * PrewarmedDeploymentApi - object-oriented interface
 * @export
 * @class PrewarmedDeploymentApi
 * @extends {BaseAPI}
 */
export default class PrewarmedDeploymentApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Prewarm Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {PrewarmEncoderSettings} [prewarmEncoderSettings]
   * @throws {RequiredError}
   * @memberof PrewarmedDeploymentApi
   */
  public create(infrastructureId: string, prewarmEncoderSettings?: PrewarmEncoderSettings): Promise<PrewarmEncoderSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.post<PrewarmEncoderSettings>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment', pathParamMap, prewarmEncoderSettings).then((response) => {
      return new PrewarmEncoderSettings(response);
    });
  }

  /**
   * @summary Delete Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {string} deploymentId Id of the prewarmed deployment.
   * @throws {RequiredError}
   * @memberof PrewarmedDeploymentApi
   */
  public delete(infrastructureId: string, deploymentId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      deployment_id: deploymentId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment/{deployment_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {string} deploymentId Id of the prewarmed deployment.
   * @throws {RequiredError}
   * @memberof PrewarmedDeploymentApi
   */
  public get(infrastructureId: string, deploymentId: string): Promise<PrewarmEncoderSettings> {
    const pathParamMap = {
      infrastructure_id: infrastructureId,
      deployment_id: deploymentId
    };
    return this.restClient.get<PrewarmEncoderSettings>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment/{deployment_id}', pathParamMap).then((response) => {
      return new PrewarmEncoderSettings(response);
    });
  }

  /**
   * @summary List Prewarmed Encoders
   * @param {string} infrastructureId Id of the kubernetes cluster.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof PrewarmedDeploymentApi
   */
  public list(infrastructureId: string, queryParams?: PrewarmEncoderSettingsListQueryParams): Promise<PaginationResponse<PrewarmEncoderSettings>> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<PaginationResponse<PrewarmEncoderSettings>>('/encoding/infrastructure/kubernetes/{infrastructure_id}/prewarmed-deployment', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PrewarmEncoderSettings>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PrewarmEncoderSettings(i));
      }
      return paginationResponse;
    });
  }
}