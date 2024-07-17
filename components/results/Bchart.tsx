"use client";

import { TrendingUp } from "lucide-react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
	label: {
		color: "hsl(var(--background))",
	},
} satisfies ChartConfig;

export default function BChart({ chartData} : { chartData: Array<any> }) {
	return (
		<Card className="w-full">
			<CardContent>
				<ChartContainer config={chartConfig} className="min-h-[250px] w-full">
					<BarChart
						accessibilityLayer
						data={chartData}
						layout="vertical"
						margin={{
							right: 16,
                            top: 16,
						}}
					>
						<CartesianGrid horizontal={false} />
						<YAxis
							dataKey="day"
							type="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
							hide
						/>
						<XAxis dataKey="amount" type="number" hide />
						<Bar
							dataKey="amount"
							layout="vertical"
							fill="var(--color-desktop)"
							radius={4}
						>
							<LabelList
								dataKey="day"
								position="insideLeft"
								offset={8}
								className="fill-[--color-label]"
								fontSize={12}
							/>
							<LabelList
								dataKey="amount"
								position="right"
								offset={8}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					You spent the most on Monday
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					On average, you spent $200 every Monday
				</div>
			</CardFooter>
		</Card>
	);
}
