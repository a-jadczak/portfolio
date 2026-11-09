import SegmentedControl from '@/components/ui/SegmentedControl/SegmentedControl';
import { switchLanguage } from '@/i18n/switchLanguage';
import { languages, supportedLanguages } from '@/i18n/config';
import type { Language } from '@/types/Language';

interface Props {
  lang: Language;
}

const LanguageControl = ({ lang }: Props) => (
  <SegmentedControl
    value={lang}
    options={supportedLanguages.map((language) => ({
      value: language,
      text: languages[language],
      onClick: () => {
        void switchLanguage(language);
      },
    }))}
  />
);

export default LanguageControl;
