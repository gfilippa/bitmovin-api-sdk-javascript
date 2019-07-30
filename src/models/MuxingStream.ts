import {map} from '../common/Mapper';

/**
 * @export
 * @class MuxingStream
 */
export class MuxingStream {
  /**
   * @type {string}
   * @memberof MuxingStream
   */
  public streamId: string;

  constructor(obj: Partial<MuxingStream>) {
    this.streamId = map(obj.streamId);
  }
}

export default MuxingStream;
