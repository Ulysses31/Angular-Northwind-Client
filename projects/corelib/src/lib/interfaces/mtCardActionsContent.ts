import { MaterialButtonType, MaterialColor } from './../models/enums';
import { MaterialBtnAlign } from '../models/enums';

export interface MtCardActionsContent {
  aling: 'start' | MaterialBtnAlign;
  buttonsType: 'basic' | MaterialButtonType;
  buttons: {
    disabled: boolean,
    color: MaterialColor,
    icon: string,
    text: string,
    command: () => any
  }[];
}
