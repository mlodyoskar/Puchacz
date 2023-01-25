import { Typography } from 'components/atoms/Typography/Typography';
import { Card } from 'components/molecules/Card/Card';
import UserIcon from './../components/icons/User.svg';
import ChevronIcon from './../components/icons/Chevron.svg';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from 'utils/fetcher';
import type { StatisticsSummary } from './api/statistics/summary';
import { Pagination } from 'components/molecules/Pagination';
import { TableRow } from 'components/molecules/TableRow/TableRow';
import { CardPlaceholder } from 'components/molecules/Card/CardPlaceholder';
import { TableRowPlaceholder } from 'components/molecules/TableRow/TableRowPlaceholder';
import type { StatisticsParties } from './api/statistics/parties';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const useGetStatisticsSummary = () => {
	return useQuery({
		queryKey: ['statistcs', 'summary'],
		queryFn: () => fetcher<StatisticsSummary>('/api/statistics/summary'),
	});
};

const useGetStatisticsParties = () => {
	return useQuery({
		queryKey: ['statistics', 'parties'],
		queryFn: () => fetcher<StatisticsParties>('/api/statistics/parties'),
	});
};

const StatisticsPage = () => {
	const { data: summary } = useGetStatisticsSummary();
	const { data: parties } = useGetStatisticsParties();

	return (
		<motion.div
			initial={{ y: -10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className="min-h-full"
		>
			<div className="flex flex-1 flex-col">
				<main className="flex-1 pb-8">
					<div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6 lg:px-8">
						<Typography component="h2">Podsumowanie</Typography>
						<div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
							{summary ? (
								summary.summary.map((card) => (
									<Card key={card.name} {...card} />
								))
							) : (
								<>
									{Array.from({ length: 3 }).map((x, i) => (
										<CardPlaceholder key={i} />
									))}
								</>
							)}
						</div>
						<div className="mt-8">
							<Typography component="h2">Ostatnie imprezy</Typography>
						</div>
					</div>
					<div className="shadow sm:hidden">
						<ul
							role="list"
							className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
						>
							{parties ? (
								parties.events.map(({ id, name, profit, day }) => (
									<li key={id}>
										<Link
											href={`/events/${id}`}
											className="block bg-white px-4 py-4 hover:bg-gray-50"
										>
											<span className="flex items-center space-x-4">
												<span className="flex flex-1 space-x-2 truncate">
													<UserIcon
														className="h-5 w-5 flex-shrink-0 text-gray-400"
														aria-hidden="true"
													/>
													<span className="flex flex-col truncate text-sm text-gray-500">
														<span className="truncate">{name}</span>
														<span>
															<span className="font-small text-gray-900">
																+ {profit}
															</span>
														</span>
														<time>{day}</time>
													</span>
												</span>
												<ChevronIcon
													className="h-5 w-5 flex-shrink-0 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Link>
									</li>
								))
							) : (
								<>
									{Array.from({ length: 10 }).map((x, i) => (
										<div key={i} className="relative h-24 w-full space-y-1 p-4">
											<div className="skeleton h-4 w-3/5" />
											<div className="skeleton h-4 w-1/4" />
											<div className="skeleton h-4 w-1/4" />
											<ChevronIcon
												className="absolute top-1/3 right-4 h-5 w-5 flex-shrink-0 text-gray-400"
												aria-hidden="true"
											/>
										</div>
									))}
								</>
							)}
						</ul>
						<Pagination />
					</div>

					{/* Activity table (small breakpoint and up) */}
					<div className=" hidden sm:block">
						<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
							<div className="mt-2 flex flex-col">
								<div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead>
											<tr>
												<th
													className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
													scope="col"
												>
													Nazwa
												</th>
												<th
													className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
													scope="col"
												>
													Uczestnicy
												</th>

												<th
													className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
													scope="col"
												>
													Przychód
												</th>
												<th
													className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
													scope="col"
												>
													Wydatki
												</th>
												<th
													className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
													scope="col"
												>
													Dochód
												</th>
												<th
													className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
													scope="col"
												>
													Data
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200 bg-white">
											{parties ? (
												parties.events.map(({ id, slug, ...event }) => {
													const values = [
														...Object.values(event).map((item) => {
															return { value: item };
														}),
													];

													return (
														<TableRow
															key={slug}
															href={`/events/${id}`}
															icon={UserIcon}
															items={values}
														/>
													);
												})
											) : (
												<>
													{Array.from({ length: 10 }).map((x, i) => (
														<TableRowPlaceholder key={i} />
													))}
												</>
											)}
										</tbody>
									</table>
									<Pagination />
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</motion.div>
	);
};

export default StatisticsPage;
