import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { DataFormat } from "@/lib/interfaces";

export default function CarouselCards({ pages, data }: { pages: Array<any>, data: DataFormat }) {
	const dataArray = [
		"in 2023",
		data["top_categories"],
		data["days_of_week_spend"],
		data["num_places_spent"],
		data["top_freq_places"],
		data["top_date_and_amt"],
		data["top_spend_places"],
		"See you next time!",
	];

	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{pages.map((component, index) => (
					<CarouselItem key={index}>
						{React.cloneElement(component, {data: dataArray[index]})}
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
