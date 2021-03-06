import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../../common/Mapper';
import BitmovinResponse from '../../../../../../../models/BitmovinResponse';
import DashVttRepresentation from '../../../../../../../models/DashVttRepresentation';
import PaginationResponse from '../../../../../../../models/PaginationResponse';
import {DashVttRepresentationListQueryParams, DashVttRepresentationListQueryParamsBuilder} from './DashVttRepresentationListQueryParams';

/**
 * VttApi - object-oriented interface
 * @export
 * @class VttApi
 * @extends {BaseAPI}
 */
export default class VttApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add VTT Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {DashVttRepresentation} dashVttRepresentation The VTT representation to be added to the adaptation set
   * @throws {BitmovinError}
   * @memberof VttApi
   */
  public create(manifestId: string, periodId: string, adaptationsetId: string, dashVttRepresentation?: DashVttRepresentation): Promise<DashVttRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.post<DashVttRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/vtt', pathParamMap, dashVttRepresentation).then((response) => {
      return map(response, DashVttRepresentation);
    });
  }

  /**
   * @summary Delete VTT Representation
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the VTT representation to be deleted
   * @throws {BitmovinError}
   * @memberof VttApi
   */
  public delete(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/vtt/{representation_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary VTT Representation Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {string} representationId Id of the VTT representation
   * @throws {BitmovinError}
   * @memberof VttApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string, representationId: string): Promise<DashVttRepresentation> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId,
      representation_id: representationId
    };
    return this.restClient.get<DashVttRepresentation>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/vtt/{representation_id}', pathParamMap).then((response) => {
      return map(response, DashVttRepresentation);
    });
  }

  /**
   * @summary List all VTT Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof VttApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashVttRepresentationListQueryParams | ((q: DashVttRepresentationListQueryParamsBuilder) => DashVttRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashVttRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashVttRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashVttRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashVttRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations/vtt', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashVttRepresentation>(response, DashVttRepresentation);
    });
  }
}
