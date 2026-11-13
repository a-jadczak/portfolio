import SegmentedControl from '@/components/ui/SegmentedControl/SegmentedControl';
import { switchLanguage } from '@/i18n/utils';
import { languages, supportedLanguages } from '@/i18n/config';
import type { Language } from '@/types/Language';
import { disableDialogControls, openDialog } from '@/utils/dialog';
import { refreshCurrentPage } from '@/utils/refreshCurrentPage';

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
        void switchLanguage(language, async () => {
          disableDialogControls('settings-dialog');
          await refreshCurrentPage(async () => openDialog('settings-dialog'));
        });
      },
    }))}
  />
);

export default LanguageControl;
