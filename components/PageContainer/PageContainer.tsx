
import Head from "next/head";
import {Footer} from '../footer/Footer'

type ContainerProps = {
  title: string;
  className: string;
  children: React.ReactNode;
};

export function PageContainer({ title="House and Land", className="", children }: ContainerProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={className}>
        {children}
      </main>
      <Footer/>
    </>
  );
}