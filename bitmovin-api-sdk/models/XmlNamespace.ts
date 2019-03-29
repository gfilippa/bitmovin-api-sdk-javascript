import {map} from '../common/Mapper';

/**
 * @export
 * @class XmlNamespace
 */
export default class XmlNamespace {
  constructor(obj: any) {
    this.prefix = map(obj.prefix);
    this.uri = map(obj.uri);
  }

  /**
   * Name of the XML Namespace reference
   * @type {string}
   * @memberof XmlNamespace
   */
  public prefix: string;
  /**
   * Source of the XML Namespace reference
   * @type {string}
   * @memberof XmlNamespace
   */
  public uri: string;
}
