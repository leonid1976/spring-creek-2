import type { NextPage, GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import {Button, Card, Row, Col} from 'react-bootstrap'
import {getPostById} from '../../utils/postTable';
import type {GetItemCommandInput, AttributeValue} from '@aws-sdk/client-dynamodb'; 
import {PageContainer} from '../../components/PageContainer/PageContainer'



type postData = {
  title: string,
  slug: string,
  image: string,
  content: string,
  post_date: string
}

export type DynamoPostEntity = {
  title: AttributeValue;
  slug: AttributeValue;
  image: AttributeValue;
  content: AttributeValue;
  post_date: AttributeValue;
};


const NewsAndEvents: NextPage = (props: any) => {

  const awsDataToItems = (items: Array<AttributeValue> | any) => {
    const updatedItems: any   = []

      Object.keys(items).forEach((column: any) => {
         // @ts-ignore  
         updatedItems[column] = items[column]['S']
      })

    return updatedItems;
  }
 
  const posts = (awsDataToItems(props.posts))




  return (

    <PageContainer title={posts.title} className={'single-post'}>
      <div className='container'>

        <h1 className="single-post__heading">{posts.title}</h1>
        <div className="post-date">{posts.post_date}</div>
        <div className="block__content">
        <article dangerouslySetInnerHTML={ { __html : posts.content} } />

        </div>
      </div>
    </PageContainer> 
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  
  const { params } = context;
  console.log(params)
  // @ts-ignore  
  const { slug } = params;

  const dbParams: GetItemCommandInput = {
    TableName: process.env.AWS_DATABASE_POSTS_NAME,
    ConsistentRead: false,
    ProjectionExpression: `title, slug, post_date, image, content`,
    Key: {
          "slug": { 
            S: slug
          }

        },
  } 

  const posts = await getPostById(dbParams);
  
   return {
    props: {
      posts
    }
  };
}

export default NewsAndEvents