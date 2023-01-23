import { Typography } from 'components/atoms/Typography/Typography';

const LogsPage = () => {
	return (
		<div>
			<Typography component="h1">Logs page</Typography>
			<div className="mt-8 flex flex-col">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
										>
											Nazwa wydarzenia/budzetu
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Co dodał/edytował itd
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Kiedy
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Kto
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									<tr>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
											test test
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											test
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											test
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
											test
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogsPage;
