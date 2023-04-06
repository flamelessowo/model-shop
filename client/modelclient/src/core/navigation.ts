
interface ITabNavigation {
  label: string | Function;
  icon: string;
  to?: string | object;
  command?: Function;
  url?: string;
  items?: Array<any>;
  disabled?: boolean | Function;
  visible?: boolean | Function;
  target?: string;
  separator?: boolean;
  style?: object | string;
  class?: string;
  key?: object;
}

export function generateTabNavigation(): Array<ITabNavigation> {
	return [
		{
			label: "Головна Сторінка",
			icon: "pi pi-fw pi-home",
			to: { path: '/' }
		},
		{ label: "Моделі", icon: "pi pi-fw pi-box", to: { name: "models" },}, 
	]
}
