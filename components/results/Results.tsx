"use client";
import { Slider } from "@/components/ui/slider";
import BChart from "./DayOfWeekBarChart";
import CarouselCards from "./CarouselCards";
import StackedSingleBarChart from "./SingleStackedBarChart";
import SimpleTable from "./SimpleTable";
import { DataFormat } from "@/lib/interfaces";

const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="glass h-[600px] py-4 px-6 flex justify-center items-center">
			<div className="w-full">{children}</div>
		</div>
	);
};

const Intro = ({ data }: { data: string }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5 text-center">
				Credit Card Wrapped
			</h1>
			<p className="text-center">
				Here's how you spent {data}.
			</p>
		</PageContainer>
	);
};

const Page1 = ({ data }: { data: Array<any> }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				Let's break down your top spending categories
			</h1>
			<div className="w-full">
				<StackedSingleBarChart data={data} />
			</div>
		</PageContainer>
	);
};

const Page2 = ({ data }: { data: Array<object> }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				This is how you spent on each day of the week
			</h1>
			<BChart chartData={data} />

			{/* <div className="mt-4">
				<p className="mb-2">Choose the data included in this chart</p>
				<Slider defaultValue={[25, 75]} />
			</div> */}
		</PageContainer>
	);
};

const Page3 = ({ data }: { data: number }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				You swiped your credit card at {data} different places.
			</h1>
			<p>Go get it!</p>
		</PageContainer>
	);
};

const Page4 = ({ data }: { data: Array<any>  }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				The places you swiped your credit card the most
			</h1>
			<SimpleTable data={data} />
		</PageContainer>
	);
};

const Page5 = ({ data }: { data: Array<any> }) => {
	const date = data[0];
	const amount = data[1];

	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold pt-12">
				You spent the most on {date} when ${amount} came out of your
				pocket.
			</h1>
		</PageContainer>
	);
};

const Page6 = ({ data }: { data: Array<any> }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				The places you spent the most money
			</h1>
			<SimpleTable data={data} />
		</PageContainer>
	);
};

const Outro = ({ data }: { data: string }) => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5 text-center">
				That's a wrap!
			</h1>
			<p className="text-center">
				{data}
			</p>
		</PageContainer>
	);
};

const pages = [
	<Intro data={""}/>,
	<Page1 data={[[]]} />,
	<Page2 data={[{}]} />,
	<Page3 data={0} />,
	<Page4 data={[[]]} />,
	<Page5 data={[null, null]} />,
	<Page6 data={[[]]} />,
	<Outro data={""} />,
];

export default function Results({ data }: { data: DataFormat }) {
	return (
		<div className="mt-6 mb-4">
			<CarouselCards pages={pages} data={data} />
		</div>
	);
}
