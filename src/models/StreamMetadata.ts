import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamMetadata
 */
export class StreamMetadata {
  /**
   * Language of the media contained in the stream. If the value is not set, then no metadata tag is set for the media stream.
   * @type {string}
   * @memberof StreamMetadata
   */
  public language?: string;

  constructor(obj?: Partial<StreamMetadata>) {
    if(!obj) {
      return;
    }
    this.language = map(obj.language);
  }
}

export default StreamMetadata;

