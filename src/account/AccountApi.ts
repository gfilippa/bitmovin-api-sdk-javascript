import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import InformationApi from './information/InformationApi';
import ApiKeysApi from './apiKeys/ApiKeysApi';
import OrganizationsApi from './organizations/OrganizationsApi';

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export default class AccountApi extends BaseAPI {
  public information: InformationApi;
  public apiKeys: ApiKeysApi;
  public organizations: OrganizationsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.information = new InformationApi(configuration);
    this.apiKeys = new ApiKeysApi(configuration);
    this.organizations = new OrganizationsApi(configuration);
  }
}
