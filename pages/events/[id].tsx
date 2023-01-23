import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetEventByIdQuery } from 'generated/graphql';
import { Typography } from 'components/atoms/Typography/Typography';
import { useState } from 'react';
import Camera from 'components/icons/Camera.svg';
import Star from 'components/icons/Star.svg';
import UserIcon from 'components/icons/UserIcon.svg';
import Ticket from 'components/icons/Ticket.svg';

const EventDetailsPage = () => {
	const router = useRouter();
	const id = router.query.id as string;
	const { data, loading } = useGetEventByIdQuery({ variables: { id } });
	const [isEvent, setIsEvent] = useState(true);
	if (loading) {
		return (
			<div>
				<Typography component="h1">Szczegóły wydarzenia</Typography>
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
			<div>
				<Typography component="h1">Wydarzenie</Typography>
			</div>
			<div>
				<Image
					className="h-32 w-full rounded-lg object-cover lg:h-48"
					src={data.event?.image?.url || '/part.png'}
					height={600}
					width={600}
					alt=""
				/>
				<div className="mt-6 sm:mt-2 2xl:mt-5">
					<div className="border-b border-gray-200">
						<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
							<nav className="-mb-px flex space-x-8">
								<button
									onClick={() => setIsEvent(true)}
									className={
										isEvent
											? 'border-b-2 border-blue-500 text-gray-900'
											: 'whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
									}
								>
									Wydarzenie
								</button>
								<button
									onClick={() => setIsEvent(false)}
									className={
										isEvent
											? 'whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
											: 'border-b-2 border-blue-500 text-gray-900'
									}
								>
									Budzet
								</button>
							</nav>
						</div>
					</div>
				</div>
				{isEvent ? (
					<div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
						<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">
									Nazwa wydarzenia
								</dt>
								<dd className="text-md mt-1 text-gray-900">
									{data.event?.name}
								</dd>
							</div>
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">
									Data wydarzenia
								</dt>
								<dd className="text-md mt-1 text-gray-900">
									{data.event?.day}
								</dd>
							</div>
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">Stuff</dt>
								{data.event?.stuffs.map((stuff) => (
									<dd
										className="text-md mt-1 flex flex-row text-gray-900"
										key={stuff.id}
									>
										{stuff.type === 'photograph' ? (
											<Camera
												className="mt-1 mr-1 h-4 w-4"
												aria-hidden="true"
											/>
										) : (
											<Star className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
										)}
										{stuff.name}
									</dd>
								))}
							</div>
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">Stworzony</dt>
								<dd className="text-md mt-1 text-gray-900">
									{data.event?.createdAt}
								</dd>
							</div>
						</dl>
					</div>
				) : (
					<div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
						<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">
									Osób na imprezie
								</dt>
								<dd className="text-md mt-1 flex flex-row text-gray-900">
									<UserIcon className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
									{data.event?.participants}
								</dd>
							</div>
							<div className="sm:col-span-1">
								<dt className="text-md font-medium text-gray-500">Tix cena</dt>
								<dd className="text-md mt-1 flex flex-row text-gray-900">
									<Ticket className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
									{data.event?.ticketPrice} PLN
								</dd>
							</div>
						</dl>
						<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div className="sm:col-span-1">
								<nav
									className="mt-6 h-full overflow-y-auto"
									aria-label="Directory"
								>
									<dt className="text-md font-medium text-gray-500">
										Przychody
									</dt>
									<div className="relative">
										<ul role="list" className="relative z-0">
											{data.event?.budgets.map((budget) => (
												<li key={budget.id} className="bg-white">
													<div
														className={
															budget.isIncome
																? 'relative flex items-center space-x-3 border-b-2 border-gray-200 px-6 py-3'
																: 'hidden'
														}
													>
														<div className="min-w-0 flex-1">
															<div className="focus:outline-none">
																<span
																	className="absolute inset-0"
																	aria-hidden="true"
																/>
																<p className="text-sm font-medium text-gray-900">
																	{budget.name}
																</p>
																<p className="truncate text-sm text-gray-500">
																	{budget.amount} PLN
																</p>
															</div>
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</nav>
							</div>
							<div className="sm:col-span-1">
								<nav
									className="mt-6 h-full overflow-y-auto"
									aria-label="Directory"
								>
									<dt className="text-md font-medium text-gray-500">Wydatki</dt>
									<div className="relative">
										<ul role="list" className="relative z-0">
											{data.event?.budgets.map((budget) => (
												<li key={budget.id} className="bg-white">
													<div
														className={
															budget.isIncome
																? 'hidden'
																: 'relative flex items-center space-x-3 border-b-2 border-gray-200 px-6 py-3 '
														}
													>
														<div className="min-w-0 flex-1">
															<div className="focus:outline-none">
																<span
																	className="absolute inset-0"
																	aria-hidden="true"
																/>
																<p className="text-sm font-medium text-gray-900">
																	{budget.name}
																</p>
																<p className="truncate text-sm text-gray-500">
																	{budget.amount} PLN
																</p>
															</div>
														</div>
													</div>
												</li>
											))}
										</ul>
									</div>
								</nav>
							</div>
						</dl>
					</div>
				)}
			</div>
		</div>
	);
};
export default EventDetailsPage;
