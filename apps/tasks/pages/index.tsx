import { useQuery } from '@tanstack/react-query';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';
import { Card, CoinCard, Loader, Table, Title } from 'ui';
import { Layout } from 'ui/Layout';
import LayoutContainer from 'ui/Layout/LayoutContainer';

import { marketsCoinColumns } from '@/constant/marketsCoinColumns';
import { coinList } from '@/services/getCoinList';
import { marketsCoinList } from '@/services/getMarketsCoinList';
import { setupTranslation } from '@/utils/setupTranslation';

const Index: NextPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const { t } = useTranslation(router.locale);

  const { isLoading, data } = useQuery(['coinList'], () => coinList());
  const dataMarkets = useQuery(
    ['marketsCoinList', page, perPage],
    () => marketsCoinList({ page: page + 1, perPage })
  );

  const columns = useMemo(() => marketsCoinColumns, []);
  const tableData = useMemo(() => dataMarkets.data, [dataMarkets?.data]);

  return (
    <Layout>
      <Head>
        <title>Coin Market</title>
      </Head>
      <LayoutContainer>
        <Card>
          <Title title={t('coins')} titleSize="text-2.5xl" />
          {isLoading ? (
            <div className="align-center flex justify-center pt-4">
              <Loader />
            </div>
          ) : (
            <div className="align-center flex flex-wrap justify-start pt-4">
              {data && data.length
                ? data.map(p => {
                    return <CoinCard coinName={p.toUpperCase()} />;
                  })
                : null}
            </div>
          )}
        </Card>
        <Table
          columns={columns}
          title={t('marketsCoin')}
          tableData={tableData?.length ? tableData : []}
          setPage={setPage}
          setPerPage={setPerPage}
          isSuccess={dataMarkets.isSuccess}
          isLoading={dataMarkets.isLoading}
          error={dataMarkets.error}
          pageNum={page}
        />
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
