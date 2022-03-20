import {
  GetItemCommand,
  PutItemCommand,
  UpdateItemCommand,
  DeleteItemCommand,
  ScanCommand,
  GetItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import type {
  AttributeValue,
  UpdateItemCommandInput,
  ScanCommandInput,
  PutItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import dynamodb from './dynamodb-client';

const tableName = `Post`;

export type PostEntity = {
  slug: string;
  title: string;
  body: string;
  description: string;
  commentItems: CommentEntity[];
};

export type CommentEntity = {
  body: string;
  createddate: string;
};

export type DynamoPostEntity = {
  id: AttributeValue;
  body: AttributeValue;
  title: AttributeValue;
  description: AttributeValue;
  commentItems: { L: AttributeValue[] };
  [key: string]: AttributeValue;
};

// const getPostEntity = ({ id, title, description, body, commentItems }: DynamoPostEntity): PostEntity => {
//   const post: Partial<PostEntity> = {};
//   post.slug = id.S;
//   post.title = title.S;
//   post.description = description.S;
//   post.body = body.S;
//   post.commentItems = getCommentEntity(commentItems?.L);
//   return post as PostEntity;
// };

// const getCommentEntity = (comments: AttributeValue[]): CommentEntity[] => {
//   if (!comments) return [];
//   return comments.map((comment) => {
//     return {
//       body: comment?.M?.body.S || '',
//       createddate: comment?.M?.createddate.S || '',
//     };
//   });
// };

const awsDataToItems = (items: Array<DynamoPostEntity> | any) => {
  const updatedItems: any   = []
  items.forEach((item: any, i: number) => {
    Object.keys(item).forEach((column: string) => {
       updatedItems[i][column] = item[column][Object.keys(item[column])[0]]
    })
  })
  return updatedItems;
}


export async function getPostById(params: GetItemCommandInput ) {
  
  // Key: {
    //     id: { S: id },
    //   },
  // const params: GetItemCommandInput = {
  //   TableName: tableName,
  //   Key: {
  //     id: { S: id },
  //   },
  //   ProjectionExpression: `id, title, description, commentItems, body`,
  // };
  const { Item } = await dynamodb.send(new GetItemCommand(params));
  if (!Item) return null;
  return Item
  // return getPostEntity(Item as DynamoPostEntity);
}

export async function getPosts(params :ScanCommandInput, options?: { limit?: number; startkey?: string }) {
  // const { limit, startkey } = options || {};

  // if (limit) {
  //   params.Limit = limit;
  // }
  // if (startkey) {
  //   params.ExclusiveStartKey = {
  //     id: { S: startkey },
  //   };
  // }
  const ScanResponse = await dynamodb.send(new ScanCommand(params));
  
  // const { Items, LastEvaluatedKey } = ScanResponse;
  // return {
  //   Items
    // posts: Items?.map((item) => getPostEntity(item as DynamoPostEntity)),
    // nextCursor: LastEvaluatedKey?.id?.['S'],
    // prevCursor: startkey || '',
  // };

  return ScanResponse.Items
  
}