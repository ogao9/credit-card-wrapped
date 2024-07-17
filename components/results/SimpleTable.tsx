const SimpleTable = ({ data }: { data: Array<any> }) => {
	return (
		<table className="w-full">
			<thead className="bg-slate-300 text-left">
				<tr>
					<th className="py-2">Category</th>
					<th className="py-2">Amount</th>
				</tr>
			</thead>
			<tbody>
				{data.map(([category, value], i) => (
					<tr key={i}>
						<td className="py-1">{category}</td>
						<td className="py-1">{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SimpleTable;
