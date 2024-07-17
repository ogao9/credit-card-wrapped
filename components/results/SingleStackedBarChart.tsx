export default function StackedSingleBarChart({ data }: { data: Array<any> }) {
	const colors = ["#d64933", "#F4F1BB", "#0c7c59", "#58a4b0", "#bac1b8"];
	let accum = 0;

	return (
		<div className="flex justify-center mt-2">
			<svg height={400}>
				{data.map(([category, value], i: number) => {
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
}
