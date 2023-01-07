import type {GetStaticProps, NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {Layout} from "ui/Layout"

import {ISetupLocale} from "@/types/interface/functionResult"
import {setupTranslation} from "@/utils/setupTranslation"

interface IPageProps extends ISetupLocale {
}

const Index: NextPage<IPageProps> = (props: IPageProps) => {
  const {locale} = props;
  const {t} = useTranslation(locale);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div>{t('h1')}</div>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (props) => {
  const {locale} = props;

  return {
    props: {...await setupTranslation({locale})},
  }
}

export default Index;
