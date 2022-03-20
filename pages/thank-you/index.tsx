import type { NextPage } from 'next'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'

const ThankYouPage: NextPage = () => {
  return (
    <PageContainer title={"Thank you for getting touch"} className={'thank-you'}>
        <section className="default-content">
            <div className="container">	
                <h1>THANK YOU</h1>
                <h2>Thank you for getting in touch.</h2>
                <h3>ONE OF OUR SALES EXECUTIVES WILL BE IN TOUCH SOON.</h3>
            </div>

        </section>
    </PageContainer>
  )
}

export default ThankYouPage