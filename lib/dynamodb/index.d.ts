
declare namespace s3Manager {
  interface S3ManagerConstructor {
    /**
     Use a template string.

     @example
     ```
     const S3Manager = require('aws-manager');

     const bucket = process.env.s3Bucket
     const s3 = new S3Manager(bucket)
     ```
     */
    (s3Bucket: string): string;

    (): S3Manager;
  }

  interface S3Manager extends S3ManagerConstructor {
    /**
     @param prefix - Get a list of all objects starting with the given prefix.

     @example
     ```
     const S3Manager = require('aws-manager');
     const s3 = new S3Manager(bucket)
     const objectList = s3.list('pre-);
     ```
     */
    list(prefix: string): Promise<{Name: string, Contents1: any[]}>;

  }
}

declare const s3Manager: s3Manager.S3Manager;

export = s3Manager
