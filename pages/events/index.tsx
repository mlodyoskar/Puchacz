import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import UserIcon from 'components/icons/UserIcon.svg';
import Wallet from 'components/icons/Wallet.svg';
import Clock from 'components/icons/Clock.svg';
import { useGetAllEventsQuery } from 'generated/graphql';

const EventsPage = () => {
	const { data, loading } = useGetAllEventsQuery();
	console.log(data, loading);
	if (loading) {
		return (
			<div>
				<Typography component="h1">Imprezy</Typography>
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
			<Typography component="h1">Imprezy</Typography>
			<div className=" fixed bottom-0 w-full">
				<div className="float-right mr-10 opacity-95 md:mr-72">
					<Button>
						<Link href="events/create">Utwórz nową imprezę</Link>
					</Button>
				</div>
			</div>
			<div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{data.events.map((data) => (
					<Link
						href={`events/${data.id}`}
						key={data.id}
						className="rounded-lg border-2 border-slate-300 hover:bg-slate-100"
					>
						<div className="truncate text-center">
							<div>
								<Image
									src={data.image?.url || '/part.png'}
									height={600}
									width={600}
									alt="Parties picture"
									className="rounded-lg"
								/>
							</div>
							<div>
								<Typography component="h2">{data.name}</Typography>
								<div className="text-slate-600">
									<Typography component="h4">{data.day}</Typography>
								</div>
							</div>
						</div>
						<div className="my-10 flex justify-around">
							<div className="h-8 w-8">
								<UserIcon className="h-8 w-8" aria-hidden="true" />
								<Typography component="h4">500</Typography>
							</div>
							<div className="h-8 w-8">
								<Wallet className="h-8 w-8" aria-hidden="true" />
								<Typography component="h4">3500</Typography>
							</div>
							<div className="h-8 w-8">
								<Clock className="h-8 w-8" aria-hidden="true" />
								<Typography component="h4">3500</Typography>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default EventsPage;
