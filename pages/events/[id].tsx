import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetEventByIdQuery } from 'generated/graphql';
import { Typography } from 'components/atoms/Typography/Typography';
import { useState } from 'react';
import { EventDetailsSummary } from 'components/templates/events/eventDetails';
import { EventBudgetDetails } from 'components/templates/events/budgetDetails';
const RenderPage = ({ viewProps, data }: { viewProps: string; data: any }) => {
	if (viewProps === 'event') {
		return (
			<EventDetailsSummary
				name={data?.event?.name}
				day={data?.event?.day}
				stuffs={data?.event?.stuffs}
			/>
		);
	}
	return (
		<EventBudgetDetails
			participants={data?.event?.participants}
			ticketPrice={data?.event?.ticketPrice}
			budgets={data?.event?.budgets}
		/>
	);
};

const EventDetailsPage = () => {
	const router = useRouter();
	const id = router.query.id as string;
	const { data, loading } = useGetEventByIdQuery({ variables: { id } });
	type View = 'event' | 'budget';
	const [view, setView] = useState<View>('event');

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
									onClick={() => setView('event')}
									className={
										view === 'event'
											? 'border-b-2 border-blue-500 text-gray-900'
											: 'whitespace-nowrap border-b-2 border-transparent py-4 px-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
									}
								>
									Wydarzenie
								</button>
								<button
									onClick={() => setView('budget')}
									className={
										view === 'event'
											? 'whitespace-nowrap border-b-2 border-transparent py-4 px-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
											: 'border-b-2 border-blue-500 text-gray-900'
									}
								>
									Budzet
								</button>
							</nav>
						</div>
					</div>
				</div>
				<RenderPage viewProps={view} data={data} />
			</div>
		</div>
	);
};
export default EventDetailsPage;
