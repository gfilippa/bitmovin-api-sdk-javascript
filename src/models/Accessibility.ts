import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Accessibility
 */
export class Accessibility {
  /**
   * Can be either list of languages or a complete map of services (or CC channels, in CEA-608 terminology) (required)
   * @type {string}
   * @memberof Accessibility
   */
  public value?: string;

  /**
   * The scheme id to use. Please refer to the DASH standard. (required)
   * @type {string}
   * @memberof Accessibility
   */
  public schemeIdUri?: string;

  constructor(obj?: Partial<Accessibility>) {
    if(!obj) {
      return;
    }
    this.value = map(obj.value);
    this.schemeIdUri = map(obj.schemeIdUri);
  }
}

export default Accessibility;

