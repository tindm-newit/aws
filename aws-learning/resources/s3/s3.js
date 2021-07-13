var AWS = require('aws-sdk');

var fs = require('fs');

var s3 = new AWS.S3({
   endpoint: 'http://localhost:4566',
   s3ForcePathStyle: true,
   accessKeyId: 'dev',
   secretAccessKey: 'dev'
});

module.exports = {
    s3, fs
}