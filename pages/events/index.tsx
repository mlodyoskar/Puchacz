import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import { Button } from 'components/atoms/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { parties } from '../api/data.json';
import UserIcon from '../../public/UserIcon.svg';
import Wallet from '../../public/Wallet.svg';
import Clock from '../../public/Clock.svg';

const EventsPage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Imprezy</Typography>
			<Button>
				<Link href="events/create">Utwórz nową imprezę</Link>
			</Button>
			<div className="mt-6">
				<Link href={`events/${parties[0].id}`}>
					<div className="flex justify-between rounded-lg border-b-2 border-slate-300 p-2 hover:bg-slate-100">
						<div className="flex md:mr-4">
							<div className="mb-2 md:mr-2">
								<Image
									src="/puch.png"
									height={300}
									width={300}
									alt="Parties picture"
									className="hidden rounded-lg md:block"
								/>
							</div>
							<div>
								<Typography component="h2">{parties[0].name}</Typography>
								<Typography component="h4">{parties[0].date}</Typography>
							</div>
						</div>
						<div className="mb-12 flex justify-between md:mx-4">
							<div className="mx-2 h-8 w-8 md:mx-10">
								<UserIcon />
								<Typography component="h4">
									{parties[0].budget.people_in_party}
								</Typography>
							</div>
							<div className="mx-2 h-8 w-8 md:mx-10">
								<Wallet />
								<Typography component="h4">
									{parties[0].budget.overall}
								</Typography>
							</div>
							<div className="mx-2 h-8 w-8 md:mx-10">
								<Clock />
								<Typography component="h4">
									{parties[0].start_time}
									<br />
									{parties[0].end_time}
								</Typography>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</MainLayout>
	);
};

export default EventsPage;
