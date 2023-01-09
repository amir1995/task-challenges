import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ISetupLocale } from '@/types/interface/functionResult';
import { TLocale } from '@/types/types/staticProps';

export const setupTranslation = async (props: TLocale): Promise<ISetupLocale> => {
  const { locale } = props;
  const lang = locale?.length ? locale : 'fa';
  return {
    ...(await serverSideTranslations(lang, [lang])),
    locale: lang,
  };
};
