export const TableRowPlaceholder = () => {
	return (
		<tr className="bg-white">
			<td className="w-full max-w-0 whitespace-nowrap px-6 py-4  text-gray-900">
				<div className="flex">
					<div className=" inline-flex space-x-2 truncate ">
						<div
							className="skeleton h-5 w-32 flex-shrink-0"
							aria-hidden="true"
						/>
					</div>
				</div>
			</td>
			{Array.from({ length: 4 }).map((_, i) => (
				<td key={i} className="px-6 py-4">
					<span className="skeleton block h-5 w-16"></span>
				</td>
			))}
		</tr>
	);
};
