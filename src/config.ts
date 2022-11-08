import OSS from 'ali-oss'

export interface PublisherOssConfig extends OSS.Options {
  basePath?: string
}
