import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import buildingHero from '../../public/images/building/building-hero.jpg'



const BuildingInformation: NextPage = () => {
  return (
    <PageContainer title={"Building information"} className={'building-information'}>
        <section className='hero hero-lan'>
          <div className='hero__bg'>
            <Image src={buildingHero} className='carousel__image' layout='fill' objectFit='cover' objectPosition='center' loading={'eager'} placeholder="blur"  alt="Tony image"/>
          </div>
        </section>  

        <section className="information">
          <div className="container">

            <div className="information-items">
                      
              <div className="information-item">

                <h3>Building Envelopes</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/Buiding-Envelope-Stage-1A-1B.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Building-Envelopes (Preliminary) – Stage 1A &amp; 1B</a>
                    </Link>
                  </li>
                </ul>

              </div>

              <div className="information-item">

                <h3>Compaction Reports</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/Buiding-Envelope-Stage-1A-1B.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Compaction Report – Spring Creek 1A &amp; 1B</a>
                    </Link>
                  </li>
                </ul>
                
              </div>     

              <div className="information-item">

                <h3>DISCLOSURE PLANS</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/9297-S-14-DP-B_Stage-1a1b.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Disclosure Plans – Stage A1 &amp; 1B</a>
                    </Link>
                  </li>
                </ul>
                
              </div>       

              <div className="information-item">

                <h3>SURVEY PLANS</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/DP312144-1.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Survey Plans – Stage 1A &amp; 1B</a>
                    </Link>
                  </li>
                </ul>
                
              </div>     

              <div className="information-item">

                <h3>ACOUSTIC REPORTS</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/14GCA0177-R01_2-Stage-1-2.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Environmental Noise Assessment Report</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/pdf/20GCA0101-L01_0.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Acoustic Certification of Stage 1 Noise Barrier</a>
                    </Link>
                  </li>                  
                </ul>
                
              </div>     

              <div className="information-item">

                <h3>AS CONSTRUCTED PLANS</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/AC14546TS-1-SEWER-A1-cert.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">AC14546TS 1 SEWER A1 Certification</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/pdf/AC14546W-2-WATER-A1-Cert.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">AC14546W 2 WATER-A1 Certification</a>
                    </Link>
                  </li>     
                  <li>
                    <Link href={"/pdf/AC14546S-3-SEWER-A1-CERT.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">AC14546S 3 SEWER A1 Certification</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/pdf/AC14546SW-0-CERT.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">AC14546SW 0 Certification</a>
                    </Link>
                  </li>                                      
                </ul>
                
              </div>  

              <div className="information-item">

                <h3>SOIL TEST</h3>
                <ul>
                  <li>
                    <Link href={"/pdf/0616_001-1.pdf"} passHref>
                      <a rel="noreferrer noopener" target="_blank">Lot 1</a>
                    </Link>
                  </li>
                </ul>
                
              </div>                                                                            

            </div>
        </div> 
    </section>        
    </PageContainer>
  )
}

export default BuildingInformation