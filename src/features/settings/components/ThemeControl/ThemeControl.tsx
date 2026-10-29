import { Moon, Sun } from 'lucide-react';
import SegmentedControl from '@/components/ui/SegmentedControl/SegmentedControl';

const options = [
  { Icon: Sun, text: 'Light' },
  { Icon: Moon, text: 'Dark' },
];

const ThemeControl = () => <SegmentedControl options={options} value="Dark" />;

export default ThemeControl;
