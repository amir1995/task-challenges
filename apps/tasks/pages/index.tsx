import { useQuery } from '@tanstack/react-query';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Card, CoinCard, Title } from 'ui';
import { Layout } from 'ui/Layout';
import LayoutContainer from 'ui/Layout/LayoutContainer';

import { coinList } from '@/services/getCoinList';
import { ISetupLocale } from '@/types/interface/functionResult';
import { setupTranslation } from '@/utils/setupTranslation';

interface IPageProps extends ISetupLocale {}

const Index: NextPage<IPageProps> = (props: IPageProps) => {
  const { data } = useQuery(['coinList'], () => coinList());

  return (
    <Layout>
      <Head>
        <title>Coin Market</title>
      </Head>
      <LayoutContainer>
        <Card className="">
          <Title title="Coins" titleSize="text-2.5xl" />
          <div className="align-center flex flex-wrap justify-start pt-4">
            {data && data.length
              ? data.map(p => {
                  return <CoinCard coinName={p.toUpperCase()} />;
                })
              : null}
          </div>
        </Card>
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
