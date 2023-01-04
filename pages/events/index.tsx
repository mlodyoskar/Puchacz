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
						<div className="mr-4 flex">
							<div className="mr-2 mb-2">
								<Image
									src="/puch.png"
									height={300}
									width={300}
									alt="Parties picture"
									className=" rounded-lg"
								/>
							</div>
							<div>
								<Typography component="h2">{parties[0].name}</Typography>
								<Typography component="h4">{parties[0].date}</Typography>
							</div>
						</div>
						<div className="mx-4 mb-2 flex justify-between">
							<div className="mx-10 h-8 w-8">
								<UserIcon />
								<Typography component="h4">
									{parties[0].budget.people_in_party}
								</Typography>
							</div>
							<div className="mx-10 h-8 w-8">
								<Wallet />
								<Typography component="h4">
									{parties[0].budget.overall}
								</Typography>
							</div>
							<div className="mx-10 h-8 w-8">
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
