import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import StatusApi from './status/StatusApi';
import CustomdataApi from './customdata/CustomdataApi';
import ConfigurationApi from './configuration/ConfigurationApi';
import AgentDeploymentApi from './agentDeployment/AgentDeploymentApi';
import PrewarmedDeploymentApi from './prewarmedDeployment/PrewarmedDeploymentApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import KubernetesCluster from '../../../models/KubernetesCluster';
import PaginationResponse from '../../../models/PaginationResponse';
import {KubernetesClusterListQueryParams, KubernetesClusterListQueryParamsBuilder} from './KubernetesClusterListQueryParams';

/**
 * KubernetesApi - object-oriented interface
 * @export
 * @class KubernetesApi
 * @extends {BaseAPI}
 */
export default class KubernetesApi extends BaseAPI {
  public status: StatusApi;
  public customdata: CustomdataApi;
  public configuration: ConfigurationApi;
  public agentDeployment: AgentDeploymentApi;
  public prewarmedDeployment: PrewarmedDeploymentApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.status = new StatusApi(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.configuration = new ConfigurationApi(configuration);
    this.agentDeployment = new AgentDeploymentApi(configuration);
    this.prewarmedDeployment = new PrewarmedDeploymentApi(configuration);
  }

  /**
   * @summary Connect Kubernetes Cluster
   * @param {KubernetesCluster} kubernetesCluster The Kubernetes Cluster to be created
   * @throws {BitmovinError}
   * @memberof KubernetesApi
   */
  public create(kubernetesCluster?: KubernetesCluster): Promise<KubernetesCluster> {
    return this.restClient.post<KubernetesCluster>('/encoding/infrastructure/kubernetes', {}, kubernetesCluster).then((response) => {
      return map(response, KubernetesCluster);
    });
  }

  /**
   * @summary Disconnect Kubernetes Cluster
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @throws {BitmovinError}
   * @memberof KubernetesApi
   */
  public delete(infrastructureId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/kubernetes/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Kubernetes Cluster Details
   * @param {string} infrastructureId Id of the Kubernetes cluster
   * @throws {BitmovinError}
   * @memberof KubernetesApi
   */
  public get(infrastructureId: string): Promise<KubernetesCluster> {
    const pathParamMap = {
      infrastructure_id: infrastructureId
    };
    return this.restClient.get<KubernetesCluster>('/encoding/infrastructure/kubernetes/{infrastructure_id}', pathParamMap).then((response) => {
      return map(response, KubernetesCluster);
    });
  }

  /**
   * @summary List Kubernetes Cluster
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof KubernetesApi
   */
  public list(queryParameters?: KubernetesClusterListQueryParams | ((q: KubernetesClusterListQueryParamsBuilder) => KubernetesClusterListQueryParamsBuilder)): Promise<PaginationResponse<KubernetesCluster>> {
    let queryParams: KubernetesClusterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new KubernetesClusterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<KubernetesCluster>>('/encoding/infrastructure/kubernetes', {}, queryParams).then((response) => {
      return new PaginationResponse<KubernetesCluster>(response, KubernetesCluster);
    });
  }
}
