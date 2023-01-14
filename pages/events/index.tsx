import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
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
			<MainLayout>
				<Typography component="h1">Imprezy</Typography>
				<div className="flex justify-center">
					<Image
						src={'/RingSpinner.svg'}
						width={80}
						height={80}
						alt="Spinner"
					/>
				</div>
			</MainLayout>
		);
	}
	if (!data) {
		return (
			<MainLayout>
				<Typography component="h1">Data not found</Typography>
			</MainLayout>
		);
	}
	return (
		<MainLayout>
			<Typography component="h1">Imprezy</Typography>
			<div className=" fixed bottom-0 w-full">
				<div className="float-right mr-10 opacity-95 md:mr-72">
					<Button>
						<Link href="events/create">Utwórz nową imprezę</Link>
					</Button>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{data.events.map((data) => (
					<Link
						href={`events/${data.id}`}
						key={data.id}
						className="h-80 rounded-lg border-2 border-slate-300 hover:bg-slate-100"
					>
						<div className="mb-2 truncate text-center">
							<div>
								<Image
									src={data.image?.url || '/part.png'}
									height={450}
									width={450}
									alt="Parties picture"
									className="rounded-lg"
								/>
							</div>
							<div>
								<Typography component="h1">{data.name}</Typography>
								<Typography component="h4">{data.day}</Typography>
							</div>
						</div>
						<div className="mt-4 flex justify-around">
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
		</MainLayout>
	);
};

export default EventsPage;
