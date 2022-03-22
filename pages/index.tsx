import type { NextPage } from 'next'
import Image from 'next/image'
import {PageContainer} from '../components/PageContainer/PageContainer'
import Head from 'next/head'
import {Carousel, Button} from 'react-bootstrap'
import styles from '../styles/Home.module.scss'
import homeSlider1 from '../public/images/home/home-slider-1.jpg'
import homeSlider2 from '../public/images/home/home-slider-2.jpg'
import homeSlider3 from '../public/images/home/home-slider-3.jpg'
import homeContent1 from '../public/images/home/Circle-Image-3.jpeg'
import homeImageFrame from '../public/images/home/frame.svg'
import homeBottomSlider1 from '../public/images/home/home-bottom-slider-1.jpeg'
import homeBottomSlider2 from '../public/images/home/home-bottom-slider-2.jpeg'
import homeBottomSlider3 from '../public/images/home/home-bottom-slider-3.jpeg'
import homeBottomSlider4 from '../public/images/home/home-bottom-slider-4.jpeg'
import homeBottomSlider5 from '../public/images/home/home-bottom-slider-5.jpeg'
import homeContent2 from '../public/images/home/Circle-Image-2.jpeg'
import betterLifestyle from '../public/images/home/Better-Lifestyle.svg'





const Home: NextPage = () => {

  return (
    <PageContainer title={'Home'} className={'Home-page home--page-test'}>

        <section className='hero hero-home'>
          <div className='hero__bg'>

          <Carousel className='zoom' fade indicators={false} interval={4000} controls={false}>
            <Carousel.Item>
              <Image src={homeBottomSlider1} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home bottom slider 1"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeBottomSlider2} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home bottom slider 2"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeBottomSlider3} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home bottom slider 3"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeBottomSlider4}  className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home bottom slider 4"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeBottomSlider5}  className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home bottom slider 5"/>
            </Carousel.Item>            
                                                            
          </Carousel>

          </div>
        </section>

        <section className='devider devider-orange'>
          <div className='devider__text'>
                WELCOME TO SPRING CREEK
          </div>
        </section>


        <section className="difference common-content common-left">
            <div className="container">
              <div className="flex-wrapper">

                  <div className="inner-content">
                  <p>
                    <span>THE LOCALS CALL IT &quot;BEAUY&quot;, <br/>FIND OUT WHY</span><br/><br/>
                                  The newest part of &quot;Beauy&quot; is Spring Creek. 
                                  &quot;Beauy&quot; is how the locals refer to their home town.
                                  &quot;Beauy&quot; is the genuine stuff. It&apos;s the traditional Aussie way of living in an ever-changing world.
                                  It&apos;s a place where 2 cars are a traffic jam.
                                  A place where people nod and say G&apos;Day as you walk down the street. Sometimes, it&apos;s the small things that make all the difference.

                  </p>
                    <Button className="cta" variant="primary" href="/lifestyle/">See why the locals love &quot;beauy&quot;</Button> 
                </div>

                <div className="common__image">
                    <div className="image__out">		
                      <div className="wrap-image">
                      <Image src={homeContent1} layout='fill' objectFit='cover' objectPosition='center' priority={true} alt="Beaudesert Spring Creek"/>
                      </div>
                    </div>	

                </div>
              </div>
            </div>
        </section>

          <section className="blocks-home">
            <div className="container">
                <h2>REGISTERED BLOCKS NOW SELLING!</h2>
                <p>
                    If you are looking for a place to raise a family, retire or just keen to make a change for a better lifestyle, Spring Creek offers blocks in town. Spring Creek has been designed to continue the traditional values of good old fashioned &quot;Beauy&quot;.
                </p>
                <Button className="cta" variant="primary" href="/lifestyle/">Learn more</Button> 
            </div>
        </section>   

        <section className="home-slider-low">
          <Carousel fade indicators={false} interval={4000} controls={false}>
            <Carousel.Item>
              <Image src={homeSlider1} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home slider 1"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeSlider2} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur" alt="Home slider 2"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={homeSlider3} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' priority loading={'eager'} placeholder="blur" alt="Home slider 3"/>
            </Carousel.Item>              
          </Carousel>
        </section>   

        <section className="home-lifestyle common-content">
          <div className="container">
            <div className="flex-wrapper">

                <div className="inner-content">
                  <Image className="heading-image"  src={betterLifestyle}  alt="Better Lifestyle"/>
                  <p>
                    A picturesque setting of mountains and open spaces with clean air and no pollution. It&apos;s a different pace. There&apos;s no traffic jams and no high rises.<br/><br/>

                    Here you enjoy the closeness to nature and the conveniences of all essentials to daily life.                 
                  </p>
                  <Button className="cta" variant="primary" href="/lifestyle/">LEARN MORE</Button> 
                </div>

              <div className="common__image">
                  <div className="image__out">		
                    <div className="wrap-image">
                      <Image src={homeContent2} layout='fill' objectFit='cover' objectPosition='center' priority={true} alt="Beaudesert Spring Creek"/>
                    </div>
                  </div>	
              </div>

            </div>
          </div>
        </section>              


    </PageContainer>
  )
}

export default Home
