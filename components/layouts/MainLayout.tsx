import Head from 'next/head'
import { Header } from '../header/Header';
import Transition from "../../components/Transition/Transition"
import { useRouter } from "next/router"


type DashboardLayoutProps = {
  children: React.ReactNode;
}

export const MainLayout: React.FC<DashboardLayoutProps> = ({children}) => {
  const router = useRouter()
  return (
    <>

      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="house,land for sale, Beaudesert, new homes" />
        <meta name="description" content="House and land for sale in Beaudesert. The best offer in Beaudesert. New release. Blocks of land from $199,000." />
      </Head>

      <Header/>

      <div className="page-inner">
        <Transition location={router.pathname}>
          <div className="min-h-screen">{children}</div>
        </Transition>
      </div>       
    </>
  );
}
