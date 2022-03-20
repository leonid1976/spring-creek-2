import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {Button, Card, Row, Col} from 'react-bootstrap'
import {getPosts} from '../../utils/postTable';
import type {ScanCommandInput, AttributeValue} from '@aws-sdk/client-dynamodb'; 
import {PageContainer} from '../../components/PageContainer/PageContainer'
import newsHero from '../../public/images/news/news-hero.jpg'


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

  console.log(props)

  const awsDataToItems = (items: Array<DynamoPostEntity> | any) => {
    const updatedItems: any   = []
    items.forEach((item: any, i: number) => {
      let innerItems: object = {}
      Object.keys(item).forEach((column: any) => {
         // @ts-ignore  
        innerItems[column] = item[column][Object.keys(item[column])[0]]
      })
      updatedItems[i] = innerItems
    })
    return updatedItems;
  }
 
  const packages = (awsDataToItems(props.packages))

  return (
    <PageContainer title={"News and Events"} className={'news-and-events'}>
        <section className='hero hero-house'>
          <div className='hero__bg'>
            <Image src={newsHero} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur"  alt="Tony image"/>
          </div>
        </section>  


        <section className="packages">
          <div className="container">



            <Row xs={1}  md={2} lg={3} className="g-3 packages__items">

              {
                packages.map((package_: postData, key: number ) => {
                  return (
                    <Col key={key}>
                      <Card>
                      <div className="post-date">{package_.post_date}</div>
                      <Card.Img variant="top" src={package_.image} />
                      <Card.Body>
                        <Card.Title as="h3" >{package_.title}</Card.Title>
                        <Link href={`/news-and-events/${package_.slug}`} passHref>
                        <Button className="cta cta-red" variant="primary" >READ MORE</Button> 
                        </Link>

                        

                      </Card.Body>
                    </Card>
                  </Col>
                  )
                })
              }


            </Row>



    </div>
        </section>   
    </PageContainer> 
  )
}


export async function getServerSideProps() {

  const params: ScanCommandInput = {
    TableName: process.env.AWS_DATABASE_POSTS_NAME,
    ConsistentRead: true,
    ProjectionExpression: `title, slug, post_date, image`,
  } 
  
  const packages = await getPosts(params);
  


//   let resData:any = []

//   type scanParams = {
//     TableName: string | undefined;
//     ConsistentRead: boolean;
//     ProjectionExpression: string;
// }


//     resData = await client.scan(params , function (err: any, data: any) {
//       if (err) {
//         console.log('Error', err);
//       } else {
//         // send the json response from the callback
//         return data.json();
//       }
//     }).promise()



   return {
    props: {
      packages
    }
  };
}

export default NewsAndEvents