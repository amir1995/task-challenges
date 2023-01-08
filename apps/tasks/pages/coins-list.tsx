import { useQuery } from '@tanstack/react-query';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import {Card} from "ui";
import { Layout } from 'ui/Layout';
import LayoutContainer from 'ui/Layout/LayoutContainer';

import { coinList } from '@/services/getCoinList';
import { ISetupLocale } from '@/types/interface/functionResult';
import { setupTranslation } from '@/utils/setupTranslation';

interface IPageProps extends ISetupLocale {}

const Index: NextPage<IPageProps> = (props: IPageProps) => {
  const { locale } = props;
  const { t } = useTranslation(locale);

  const { isLoading, isError, isSuccess, data } = useQuery(['coinList'], () => coinList());

  return (
    <Layout>
      <Head>
        <title>Coin Market</title>
      </Head>
      <LayoutContainer>
        <Card><div className="pl-3 font-light text-neutral-035 text-base">inja coine</div></Card>
      </LayoutContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async props => {
  const { locale } = props;

  return {
    props: { ...(await setupTranslation({ locale })) },
  };
};

export default Index;
