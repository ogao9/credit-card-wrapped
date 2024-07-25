const SimpleTable = ({ data, header }: { data: Array<any>, header: Array<string> }) => {
	return (
		<table className="w-full">
			<thead className="bg-slate-300 text-left">
				<tr>
					<th className="py-2 px-2">{header[0]}</th>
					<th className="py-2 px-2">{header[1]}</th>
				</tr>
			</thead>
			<tbody className="bg-stone-100">
				{data.map(([category, value], i) => (
					<tr key={i}>
						<td className="py-1 px-2">{category}</td>
						<td className="py-1 px-2 text-right">{value}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default SimpleTable;
