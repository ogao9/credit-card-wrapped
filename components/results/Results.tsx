"use client";
import { Slider } from "@/components/ui/slider";
import BChart from "./Bchart";
import CarouselCards from "./Carousel";

const categoryData = {
	Restaurants: 42.61058092020308,
	"Travel/ Entertainment": 16.62185349631176,
	Supermarkets: 13.356056853761652,
	Merchandise: 11.208230882170845,
	Education: 6.242482001025986,
	Services: 4.5687322000318416,
	Gasoline: 2.342298915639207,
	"Department Stores": 2.18618987811997,
	"Home Improvement": 0.5499195131874548,
	"Government Services": 0.31365533954821245,
};

const day_totals = [
	{ day: "Monday", amount: 1237.23 },
	{ day: "Tuesday", amount: 1402.92 },
	{ day: "Wednesday", amount: 966.91 },
	{ day: "Thursday", amount: 1492.68 },
	{ day: "Friday", amount: 1106.62 },
	{ day: "Saturday", amount: 1668.37 },
	{ day: "Sunday", amount: 1170.23 },
];

const topFreqData = {
	TARGET: 28,
	"PANDA EXPRESS": 19,
	"FIRESIDE CAFE ANN ARBOR MI": 19,
	"PIZZA BOBS": 16,
	"MAIZIE'S ANN ARBOR MI": 13,
	"SPOTIFY P": 12,
};

const topSpendData = {
	"DELTA AIR LINES": 817.8,
	TARGET: 403.97,
	"FIRESIDE CAFE ANN ARBOR MI": 221.36,
	"UCSF FIT REC BILLING EOM": 213.0,
	"MICHIGAN TICKET OFFICE ANN ARBOR MI": 204.0,
};

const StackedSingleBarChart = ({ data }: { data: object }) => {
	const colors = ["#d64933", "#F4F1BB", "#0c7c59", "#58a4b0", "#bac1b8"];

	const entries = Object.entries(data); // Convert object to array of entries
	let accum = 0;

	return (
		<div className="flex justify-center mt-2">
			<svg height={400}>
				{entries.map(([category, value], i: number) => {
					const y = accum;
					const height = value * 4;
					accum += height;

					return (
						<>
							<rect
								x={0}
								y={y}
								width="100%"
								height={height}
								fill={colors[i]}
								key={i}
							/>
							<text
								x="50%"
								y={y + height / 2}
								dominantBaseline="middle"
								textAnchor="middle"
								fill="black"
								fontSize="14px"
								fontWeight="bold"
							>
								{category}
							</text>
						</>
					);
				})}
			</svg>
		</div>
	);
};

const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="glass h-[600px] py-4 px-6 flex justify-center items-center">
			<div className="w-full">{children}</div>
		</div>
	);
};

const Table = ({ data }: { data: object }) => {
	return (
		<table className="w-full">
			<thead className="bg-slate-300 text-left">
				<tr>
					<th className="py-2">Category</th>
					<th className="py-2">Amount</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(data).map(([category, amount], i) => (
					<tr key={i}>
						<td className="py-1">{category}</td>
						<td className="py-1">{amount}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const Intro = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5 text-center">Credit Card Wrapped</h1>
			<p className="text-center">Here's how you spent in 2023.</p>
		</PageContainer>
	);
};

const Page1 = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				Let's break down your top spending categories
			</h1>
			<div className="w-full">
				<StackedSingleBarChart data={categoryData} />
			</div>
		</PageContainer>
	);
};

const Page2 = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				This is how you spent on each day of the week
			</h1>
			<BChart chartData={day_totals} />

			<div className="mt-4">
				<p className="mb-2">Choose the data included in this chart</p>
				<Slider defaultValue={[25, 75]} />
			</div>
		</PageContainer>
	);
};

const Page3 = () => {
	const datum = 227;

	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				You swiped your credit card at {datum} different places.
			</h1>
			<p>Go get it!</p>
		</PageContainer>
	);
};

const Page4 = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				The places you swiped your credit card the most
			</h1>
			<Table data={topFreqData} />
		</PageContainer>
	);
};

const Page5 = () => {
	const date = "March 22nd";
	const amount = "817.8";

	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold pt-12">
				You spent the most on {date} when ${amount} came out of your
				pocket.
			</h1>
		</PageContainer>
	);
};

const Page6 = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5">
				The places you spent the most money
			</h1>
			<Table data={topSpendData} />
		</PageContainer>
	);
};

const Outro = () => {
	return (
		<PageContainer>
			<h1 className="text-2xl font-semibold py-5 text-center">
				That's a wrap!
			</h1>
			<p className="text-center">
				Thank you for using Credit Card Wrapped.
			</p>
		</PageContainer>
	);
};

const pages = [
	<Intro />,
	<Page1 />,
	<Page2 />,
	<Page3 />,
	<Page4 />,
	<Page5 />,
	<Page6 />,
	<Outro />,
];

export default function Results({data}: {data: object}) {
	return (
		<div className="mt-6 mb-4">
			<CarouselCards pages={pages} />
		</div>
	);
}
