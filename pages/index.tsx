import Layout from "components/Layout";
import NewsList from "components/NewsList";

import { GetServerSideProps } from 'next'

const titleLocales = {
  ru: 'Главная',
  en: 'Main'
}

const index = (props) => {  
  return (
    <Layout title={titleLocales[props.locale]}>
      <div className="container">
        <NewsList />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {locale} = context

  return {
    props: {
      locale
    }
  }
}

export default index;