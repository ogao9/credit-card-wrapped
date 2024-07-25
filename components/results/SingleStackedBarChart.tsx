export default function SingleStackedBarChart({ data }: { data: Array<any> }) {
	const colors = ["#d64933", "#F4F1BB", "#0c7c59", "#58a4b0", "#bac1b8"];
	let accum = 0;

	return (
		<div className="flex justify-center mt-2">
			<svg height={400}>
				{data.map(([category, value], i: number) => {
					const y = accum;
					const height = value * 4;
					accum += height;

					const showPercentage = value > 10;

					return (
						<g key={i}>
							<rect
								x={0}
								y={y}
								width="100%"
								height={height}
								fill={colors[i]}
							/>
							<text
								x="50%"
								y={y + height / 3}
								dominantBaseline="middle"
								textAnchor="middle"
								fill="black"
								fontSize="14px"
								fontWeight="bold"
							>
								{category}
							</text>
							{showPercentage && (
							<text
								x="50%"
								y={y + height / 3 + 20}
								dominantBaseline="middle"
								textAnchor="middle"
								fill="black"
								fontSize="12px"
								fontWeight="semibold"
							>
								{value}%
							</text>
							)}
						</g>
					);
				})}
			</svg>
		</div>
	);
}
