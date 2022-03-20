import Image from 'next/image'
import type { NextPage } from 'next'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import Head from 'next/head'
import {Carousel, Button} from 'react-bootstrap'

import lifestyleHeroHeading from '../../public/images/lifestyle/the locals call it beauy.svg'
import whatHeading from '../../public/images/lifestyle/Just far enough away.svg'
import whatCarousel1 from '../../public/images/lifestyle/lifestyle-slider-1.jpeg'
import whatCarousel2 from '../../public/images/lifestyle/lifestyle-slider-2.jpeg'
import whatCarousel3 from '../../public/images/lifestyle/lifestyle-slider-3.jpeg'
import whatCarousel4 from '../../public/images/lifestyle/lifestyle-slider-4.jpeg'
import whatCarousel5 from '../../public/images/lifestyle/lifestyle-slider-5.jpeg'
import whatCarousel6 from '../../public/images/lifestyle/lifestyle-slider-6.jpeg'
import lifestyleIcon1 from '../../public/images/lifestyle/lifestyle-icon-1.svg'
import lifestyleIcon2 from '../../public/images/lifestyle/lifestyle-icon-2.svg'
import lifestyleIcon3 from '../../public/images/lifestyle/lifestyle-icon-3.svg'
import lifestyleIcon4 from '../../public/images/lifestyle/lifestyle-icon-4.svg'
import lifestyleIcon5 from '../../public/images/lifestyle/lifestyle-icon-5.svg'
import lifestyleIcon6 from '../../public/images/lifestyle/lifestyle-icon-6.svg'
import lifestyleIcon7 from '../../public/images/lifestyle/lifestyle-icon-7.svg'
import lifestyleIcon8 from '../../public/images/lifestyle/lifestyle-icon-8.svg'
import lifestyleIcon9 from '../../public/images/lifestyle/lifestyle-icon-9.svg'
import lifestyleIcon10 from '../../public/images/lifestyle/lifestyle-icon-10.svg'
import lifestyleIcon11 from '../../public/images/lifestyle/lifestyle-icon-11.svg'
import lifestyleIcon12 from '../../public/images/lifestyle/lifestyle-icon-12.svg'
import lifestyleIcon13 from '../../public/images/lifestyle/lifestyle-icon-13.svg'
import lifestyleIcon14 from '../../public/images/lifestyle/lifestyle-icon-14.svg'
import lifestyleIcon15 from '../../public/images/lifestyle/lifestyle-icon-15.svg'
import lifestyleIcon16 from '../../public/images/lifestyle/lifestyle-icon-16.svg'
import lifestyleCarousel1 from '../../public/images/lifestyle/lifestyle-slider-image-1.jpg'
import lifestyleCarousel2 from '../../public/images/lifestyle/lifestyle-slider-image-2.jpg'
import lifestyleCarousel3 from '../../public/images/lifestyle/lifestyle-slider-image-3.jpg'
import lifestyleCarousel4 from '../../public/images/lifestyle/lifestyle-slider-image-4.jpg'
import lifestyleCarouselHeading from '../../public/images/lifestyle/escape to a better lifestyle.svg'



const Lifestyle: NextPage = () => {
  return (
    <PageContainer title={"Lifestyle"} className={'lifestyle'}>
      <section className="hero hero-why">
        <div className="video-hero" lc-helper="video-bg">
          <video autoPlay loop muted playsInline poster={'/images/lifestyle/video-poster.jpg'}>
            <source src={'/images/lifestyle/lifestyle-bg-video-large-2.mp4'} type="video/mp4" />              
          </video>
        </div>    
          <div className="offer">
          <Image className="heading-image"  src={lifestyleHeroHeading}  alt="The Locals call it Beauty"/>

        </div> 
      </section>

      <section className='devider devider-brown'>
        <div className='devider__text'>
              WELCOME TO SPRING CREEK
        </div>
      </section>    

      <section className="what">
        <div className="container">
          <div className="flex-wrapper">
			      <div className="what__slider">
              <Carousel fade indicators={false} interval={4000} controls={false}>
                <Carousel.Item>
                  <Image src={whatCarousel1} className='carousel__image' priority={true} alt="Home slider 1"/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={whatCarousel2} className='carousel__image' alt="Home slider 2"/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={whatCarousel3} className='carousel__image'  alt="Home slider 3"/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={whatCarousel4}  className='carousel__image' alt="Home slider 4"/>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={whatCarousel5} className='carousel__image' alt="Home slider 5"/>
                </Carousel.Item>      
                <Carousel.Item>
                  <Image src={whatCarousel6} className='carousel__image' alt="Home slider 6"/>
                </Carousel.Item>                       
              </Carousel>
            </div>  

            <div className="what__content">
              <div className="heading-image">
                <Image src={whatHeading} alt="Just far enough away"/>
              </div>
            
              <h2 className="what-dt">
                          A THRIVING COMMUNITY
              </h2>
              <p>
                The locals call the township of Beaudesert, &quot;Beauy&quot;,
                because it&apos;s spot on for describing the true  Aussie 
                lifestyle, laid back, peaceful and neighbourly.<br/><br/>

                &quot;Beauy&quot; is a totally walkable town with great shopping precincts,
                  heaps of schools, a public hospital and ambulance, churches, 
                  sports facilities and commercial centres. Living at Spring Creek
                  you&apos;re only two minutes from everything that matters. So become 
                  a local, and you too can call it &quot;Beauy&quot;!
              </p>

            </div>
          </div>


        <div className="surrounging">
          <h2>&quot;BEAUY&apos;S&quot; GOT EVERYTHING</h2>

          <div className="icons flex-wrapper">

            <div className="icon__item">
              <Image src={lifestyleIcon1} width={86} height={86} alt="Surroning icon 1"/>
              <h3>WOOLWORTHS</h3>
              <div className="destination">
                2 mins walk
              </div>
            </div> 

            <div className="icon__item">
              <Image src={lifestyleIcon2} width={86} height={86} alt="Surroning icon 2"/>
              <h3>COLES</h3>
              <div className="destination">
                2 mins walk
              </div>
            </div> 

            <div className="icon__item">
              <Image src={lifestyleIcon3} width={86} height={86} alt="Surroning icon 3"/>
              <h3>ALDI</h3>
              <div className="destination">
                2 mins walk
              </div>
            </div>             

            <div className="icon__item">
              <Image src={lifestyleIcon4} width={86} height={86} alt="Surroning icon 3"/>
              <h3>BEAUDESERT HOTEL</h3>
              <div className="destination">
                2 mins walk
              </div>
            </div> 

            <div className="icon__item">
              <Image src={lifestyleIcon5} width={86} height={86} alt="Surroning icon 4"/>
              <h3>ST MARY&apos;S CATHOLIC<br/>
                PRIMARY SCHOOL</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div> 

            <div className="icon__item">
                <Image src={lifestyleIcon6} width={86} height={86} alt="Surroning icon 5"/>
              <h3>MCAULEY<br/>
                COLLEGE</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>    

            <div className="icon__item">
                <Image src={lifestyleIcon7} width={86} height={86} alt="Surroning icon 7"/>
              <h3>BEAUDESERT<br/>
                  STATE HIGH<br/>
                  SCHOOL</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon8} width={86} height={86} alt="Surroning icon 8"/>
              <h3>BEAUDESERT<br/>
                  HOSPITAL &amp;<br/>
                  MEDICAL CENTRE</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon9} width={86} height={86} alt="Surroning icon 9"/>
              <h3>BEAUDESERT<br/>
                  RACECOURSE</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon10} width={86} height={86} alt="Surroning icon 10"/>
              <h3>BEAUDESERT<br/>
                  GOLF COURSE</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon11} width={86} height={86} alt="Surroning icon 11"/>
              <h3>JUBILEE<br/>
                PARK</h3>
              <div className="destination">
                next door
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon12} width={86} height={86} alt="Surroning icon 12"/>
              <h3>BEAUDESERT<br/>
                  SWIMMING POOL</h3>
              <div className="destination">
                1 mins walk
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon13} width={86} height={86} alt="Surroning icon 13"/>
              <h3>BROMELTON</h3>
              <div className="destination">
                6 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon14} width={86} height={86} alt="Surroning icon 14"/>
              <h3>THE OVERFLOW<br/>
                  ESTATE WINERY</h3>
              <div className="destination">
                14 mins drive
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon15} width={86} height={86} alt="Surroning icon 15"/>
              <h3>BEAUDESERT<br/>
                 SHOWGROUNDS</h3>
              <div className="destination">
                14 mins walk
              </div>
            </div>   

            <div className="icon__item">
                <Image src={lifestyleIcon16} width={86} height={86} alt="Surroning icon 16"/>
              <h3>BEAUDESERT FARMERS<br/>
                 MARKET</h3>
              <div className="destination">
                2 mins drive
              </div>
            </div>                                                                                                                           



            
          </div>

         </div> 

        </div>  
      </section>  


      <section className="lifestyle-slider">

        <div className="lifestyle__contect">
          <div className="heading-image">
            <Image src={lifestyleCarouselHeading} alt="Escape to a better lifestyle"/>
          </div>  

          <p>
            &quot;Beauy&quot; is the gateway to the Scenic Rim. You can hike to beautiful waterfalls, climb ancient volcanic mountains and swim in refreshing water holes. It&apos;s all there, no more than 60 minutes from Spring Creek. Leaving the city for &quot;Beauy&quot; is your chance to escape the rat race, to create a new normal and to live a healthier and happier life. Flipping the city-to-country switch is easier than you could imagine.
          </p>
	      </div>

      <Carousel className='lifestyle-carousel zoom' fade indicators={false} interval={4000} controls={false}>
            <Carousel.Item>
              <Image src={lifestyleCarousel1} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} alt="Lifestyle bottom slider 1"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={lifestyleCarousel2} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} alt="Lifestyle bottom slider 2"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={lifestyleCarousel3} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'}  alt="Lifestyle bottom slider 3"/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={lifestyleCarousel4}  className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'}  alt="Lifestyle bottom slider 4"/>
            </Carousel.Item>                                                                                                 
      </Carousel>


	      <div className="overlay"></div>
      </section>      

    </PageContainer>
  )
}

export default Lifestyle