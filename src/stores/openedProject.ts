import type { Nullable } from '@/types/Nullable';
import { atom } from 'nanostores';

export const $openedProject = atom<Nullable<string>>(null);
