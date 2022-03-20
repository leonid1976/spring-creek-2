import type { NextPage } from 'next'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import Image from 'next/image'
import {Button, Card, Row, Col} from 'react-bootstrap'
import {getPosts} from '../../utils/postTable';
import type {ScanCommandInput, AttributeValue} from '@aws-sdk/client-dynamodb'; 
import houseLandHero from '../../public/images/house-and-land/land-for-sale-hero-bg.jpg'
import bedroomIcon from '../../public/images/house-and-land/bedroom-icon.svg'
import bathroomIcon from '../../public/images/house-and-land/bathroom-icon.svg'
import carIcon from '../../public/images/house-and-land/car-icon.svg'


type packageData = {
  title: string,
  slug: string,
  image: string,
  price: string,
  bedroom: number,
  bathroom: number,
  car: number,
  booklet: string
}

export type DynamoPostEntity = {
  title: AttributeValue;
  slug: AttributeValue;
  image: AttributeValue;
  price: AttributeValue;
  bedroom: AttributeValue;
  bathroom: AttributeValue;
  car: AttributeValue;
  booklet: AttributeValue;  

};




const HouseAndLand: NextPage = (props: any) => {


  // const {packages} = props
  // console.log(packages)

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
    <PageContainer title={"House and Land"} className={'house-and-land'}>
        <section className='hero hero-house'>
          <div className='hero__bg'>
            <Image src={houseLandHero} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' priority={true} placeholder="blur" alt="Tony image"/>
          </div>
        </section>  

        <section className='devider devider-brown'>
          <div className='devider__text'>
            HOUSE AND LAND <span className="devider-accent">FROM $449,000</span>
          </div>
        </section> 

        <section className="packages">
          <div className="container">
            <h2>
            QUALITY SELECTION
            </h2>
            <p className='packages__content'>
              Spring Creek&apos;s exclusive House and Land packages are now selling from just $449,000. Build on blocks with views, perfectly located close to schools, shops, cafes and more! Select from our wide range of modern homes with full pressure town water, sewage, NBN broadband connection and free solar power package.
            </p>


            <Row xs={1}  md={2} lg={3} className="g-3 packages__items">

              {
                packages.map((package_: packageData, key: number ) => {
                  return (
                    <Col key={key}>
                      <Card>
                      <Card.Img variant="top" src={package_.image} />
                      <Card.Body>
                        <Card.Title as="h3" >{package_.title}</Card.Title>
                        <Card.Text as="div" className="specification">
                          <div className="specification-col">
                                  <div className="title">
                                      From
                                  </div>
                                  <div className="price"> 
                                  {package_.price}									
                                  </div><br/>
                          </div>
                          <div className="specification-col specification-right">
                              <div className="specification-items">
                                  <div className="specification-item">
                                      <div className="specification-icon"> 
                                        <Image src={bedroomIcon} width={22} height={22} alt="Bedrooms"/>
                                      </div>
                                      <div className="specification-data">
                                        {package_.bedroom}														
                                      </div>
                                    </div>
                                  <div className="specification-item">
                                    <div className="specification-icon"> 
                                      <Image src={bathroomIcon} width={22} height={22} alt="Bathrooms"/>
                                    </div>
                                    <div className="specification-data"> 
                                      {package_.bathroom}														
                                    </div>
                                  </div>
                                  <div className="specification-item">
                                    <div className="specification-icon"> 
                                      <Image src={carIcon} width={22} height={22} alt="Cars"/>                                  
                                    </div>
                                    <div className="specification-data"> 
                                      {package_.car}													
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </Card.Text>
                        <Button className="cta cta-red" variant="primary" target="_blank" href={package_.booklet}>READ MORE</Button> 
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
    TableName: process.env.AWS_DATABASE_PROJECT_NAME,
    ConsistentRead: false,
    ProjectionExpression: `title, image, price, bedroom, bathroom, car, booklet`,
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

export default HouseAndLand

