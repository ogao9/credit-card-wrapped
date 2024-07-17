import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselCards({ pages }: { pages: Array<any> }) {
	return (
		<Carousel className="w-full max-w-xs">
			<CarouselContent>
				{pages.map((component, index) => (
					<CarouselItem key={index}>{component}</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
