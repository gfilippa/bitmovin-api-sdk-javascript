/**
 * @export
 * @enum {string}
 */
export enum InputStreamType {
  INGEST = 'INGEST',
  CONCATENATION = 'CONCATENATION',
  TRIMMING_TIME_BASED = 'TRIMMING_TIME_BASED',
  TRIMMING_TIME_CODE_TRACK = 'TRIMMING_TIME_CODE_TRACK',
  TRIMMING_H264_PICTURE_TIMING = 'TRIMMING_H264_PICTURE_TIMING',
  AUDIO_MIX = 'AUDIO_MIX',
  FILE = 'FILE'
}

export default InputStreamType;
