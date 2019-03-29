import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AwsCloudRegion from './AwsCloudRegion';
import Output from './Output';
import S3SignatureVersion from './S3SignatureVersion';

/**
 * @export
 * @class S3Output
 */
export default class S3Output extends Output {
  constructor(obj: any) {
    super(obj);
    this.bucketName = map(obj.bucketName);
    this.accessKey = map(obj.accessKey);
    this.secretKey = map(obj.secretKey);
    this.md5MetaTag = map(obj.md5MetaTag);
    this.cloudRegion = map(obj.cloudRegion);
    this.signatureVersion = map(obj.signatureVersion);
  }

  /**
   * Amazon S3 bucket name
   * @type {string}
   * @memberof S3Output
   */
  public bucketName: string;
  /**
   * Amazon S3 access key
   * @type {string}
   * @memberof S3Output
   */
  public accessKey: string;
  /**
   * Amazon S3 secret key
   * @type {string}
   * @memberof S3Output
   */
  public secretKey: string;
  /**
   * If set a user defined tag (x-amz-meta-) with that key will be used to store the MD5 hash of the file.
   * @type {string}
   * @memberof S3Output
   */
  public md5MetaTag?: string;
  /**
   * @type {AwsCloudRegion}
   * @memberof S3Output
   */
  public cloudRegion?: AwsCloudRegion;
  /**
   * @type {S3SignatureVersion}
   * @memberof S3Output
   */
  public signatureVersion?: S3SignatureVersion;
}
