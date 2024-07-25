export interface DataFormat {
	intro: string;
	top_categories: Array<Array<string|number>>;
	days_of_week_spend: Array<object>;
	num_places_spent: number;
	top_freq_places: Array<Array<string|number>>;
	top_date_and_amt: Array<number|string>;
	top_spend_places: Array<Array<string|number>>;
}