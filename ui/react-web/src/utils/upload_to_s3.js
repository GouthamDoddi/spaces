import S3 from 'react-aws-s3';
// https://medium.com/@steven_creates/uploading-files-to-s3-using-react-js-hooks-react-aws-s3-c4c0684f38b3
const config = {
    bucketName: 'spaces2',
    dirName: 'project-param',
    region: 'eu-central-1',
    accessKeyId: 'AKIAJCBLFHV3KW2VT5RA',
    secretAccessKey: '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',
}

export default new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

/* This is optional */
// const newFileName = 'test-file';

// ReactS3Client
//     .uploadFile(file, newFileName)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

  /**
   * {
   *   Response: {
   *     bucket: "myBucket",
   *     key: "image/test-image.jpg",
   *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
   *   }
   * }
   */
// });