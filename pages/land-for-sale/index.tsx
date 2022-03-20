import type { NextPage } from 'next'
import Image from 'next/image'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import Head from 'next/head'
import {Carousel, Button} from 'react-bootstrap'
import landHero from '../../public/images/land-for-sale/land-for-sale-hero.jpg'
import landContent from '../../public/images/land-for-sale/Tony-Circle-Image-3.jpeg'
import landSlider1 from '../../public/images/land-for-sale/Land-Now-Registered-Slider-1.jpg'
import landSlider2 from '../../public/images/land-for-sale/Land-Now-Registered-Slider-2.jpg'
import landSlider3 from '../../public/images/land-for-sale/Land-Now-Registered-Slider-3.jpg'
import landSlider4 from '../../public/images/land-for-sale/Land-Now-Registered-Slider-4.jpg'


const LandForSale: NextPage = () => {
  return (
    <PageContainer title={"Land for Sale"} className={'land-for-sale'}>
        <section className='hero hero-land'>
          <div className='hero__bg'>
            <Image src={landHero} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Tony image"/>
          </div>
        </section>  

        <section className='devider devider-brown'>
          <div className='devider__text'>
          BIG BLOCKS &amp; SMALL PRICES<br/>
          <span>ARE OUR COMMITMENT</span>
          </div>
        </section>  

        <section className="land-content common-content common-left">
            <div className="container">
              <div className="flex-wrapper">

                  <div className="inner-content">
                  <p>
                    <span>MOVING TO &quot;BEAUY&quot;, <br/>ISN&apos;T JUST ABOUT<br/>A BETTER WAY OF LIFE </span><br/><br/>
                    Spring Creek homes sites have wide frontages. A master planned suburb with footpaths and streetscaping, preserved old trees as well as dedicated nature reserves and parklands. Make the most of the beautiful natural surroundings and experience country living within a one-of-a-kind community. Spring Creek could be exactly the different lifestyle that you have been looking for.
                  </p>
                  <p>
                  The Spring Creek vision is to create a new suburb that is an extension of the Beaudesert town centre. Here, you will be lucky enough to live in a town that is not only rich in history but also actively connected by a true sense of community. 
                  </p>
                   
                </div>

                <div className="common__image">
                    <div className="image__out">		
                      <div className="wrap-image">
                      <Image src={landContent} layout='fill' objectFit='cover' objectPosition='center' priority={true} alt="Beaudesert Spring Creek"/>
                      </div>
                    </div>	

                </div>
              </div>
            </div>
        </section>     

      <section className="lifestyle-slider ">

      <Carousel className='lifestyle-carousel' fade indicators={false} interval={4000} controls={false}>
            <Carousel.Item>
              <Image src={landSlider1} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} alt="Lifestyle bottom slider 1"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={landSlider2} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} alt="Lifestyle bottom slider 2"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={landSlider3} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'}  alt="Lifestyle bottom slider 3"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={landSlider4}  className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'}  alt="Lifestyle bottom slider 4"/>
            </Carousel.Item>                                                                                                 
          </Carousel>

	      <div className="lifestyle__contect">
          <p>
          <span>STAGE ONE - 82% SOLD
          </span><br/><br/>  
          The first stage of Spring Creek features 52 unique allotments, all NBN ready, ranging in size from 404m2 to 768m2. Spring Creek is Beaudesert&apos;s newest and biggest suburb, dedicated to keeping the dream alive. Buy a block of land from $189,000 or buy a house land selling from $449,000 including free solar package*.
          <Button className="cta" variant="primary" target="_blank" href="/images/land-for-sale/A4-Stage-1-AB-plan-for-download-compressed-compressed.pdf">DOWNLOAD THE MASTERPLAN</Button> 
          </p>
          
	      </div>
	      <div className="overlay"></div>
      </section>              
    </PageContainer>
  )
}

export default LandForSale