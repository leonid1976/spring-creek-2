// import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: process.env.AWS_REGION
// });


// const client = new AWS.DynamoDB.DocumentClient({ apiVersion: 'latest' });

// export default client;

import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';


const config: DynamoDBClientConfig = {
  region: process.env['AWS_REGION'] || 'ap-southeast-2',
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY'] || '[fake]',
    secretAccessKey: process.env['AWS_SECRET_KEY'] || '[fake]',
  },
};


const dynamodb = new DynamoDBClient(config);

export default dynamodb;