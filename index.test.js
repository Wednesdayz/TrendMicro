import {getS3ObjectList} from './index';

const express = require("express");

test('should connect to server and see a bucket', () => {
    var AWSMock = require('mock-aws-s3');
    AWSMock.config.basePath = '/tmp/buckets/' // Can configure a basePath for your local buckets
    var s3 = AWSMock.S3({
        params: { Bucket: 'example' }
    });

    var params = { Bucket: 'example' };
    s3.createBucket(params, function(err) {
        if(err) {
            console.error(err);
        }
    });
    getS3ObjectList('example');
    
});
