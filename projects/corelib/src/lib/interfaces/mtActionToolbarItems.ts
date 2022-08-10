export interface ImtActionToolbarItems {
	id?: null | string;
	icon?: null | string;
	toolTipMessage: string;
  color?: null | string;
  disabled: boolean;
	command?: () => void;
}

