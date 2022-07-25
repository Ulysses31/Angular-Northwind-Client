import { MaterialBtnAlign } from '../models/enums';

export interface MtDialogActionsContent {
  aling: 'start' | MaterialBtnAlign;
  buttons: { text: string }[];
}
