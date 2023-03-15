export type Item = {
	id: string;
	name: string;
	photoUrL: string;
}

export type Ship = {
	id: string;
	name?: string;
	title?: string;
	items: Item[];
}

export type OptionsData = {
	items: Ship[];
}
