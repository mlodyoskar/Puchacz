import { Typography } from 'components/atoms/Typography/Typography';
import { useGetAllLogsQuery } from 'generated/graphql';
import Image from 'next/image';
const LogsPage = () => {
	const { data, loading } = useGetAllLogsQuery();
	if (loading) {
		return (
			<div>
				<Typography component="h1">Logs page</Typography>
				<div className="flex justify-center">
					<Image
						src={'/RingSpinner.svg'}
						width={80}
						height={80}
						alt="Spinner"
					/>
				</div>
			</div>
		);
	}
	if (!data) {
		return (
			<div>
				<Typography component="h1">Data not found</Typography>
			</div>
		);
	}
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
											Wiadomość
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Akcja
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Autor
										</th>
										<th
											scope="col"
											className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
										>
											Kiedy
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{data?.logs?.map((logs) => (
										<tr key={logs.message}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
												{logs.action} {logs.source} {logs.message}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{logs.action}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{logs.account?.id}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
												{logs.createdAt}
											</td>
										</tr>
									))}
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
