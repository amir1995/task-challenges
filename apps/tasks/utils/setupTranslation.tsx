import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import {ISetupLocale} from "@/types/interface/functionResult";
import {Locale} from "@/types/types/staticProps";

export const setupTranslation = async (props: Locale): Promise<ISetupLocale> => {
  const {
    locale,
  } = props;

  return {
    ...await serverSideTranslations(locale ?? 'fa', [
      locale ?? 'fa',
    ]),
    locale: locale ?? 'fa'
  }
};
