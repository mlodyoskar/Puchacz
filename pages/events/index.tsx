import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import { Button } from 'components/atoms/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import { parties } from '../api/parties';
import UserIcon from 'components/icons/UserIcon.svg';
import Wallet from 'components/icons/Wallet.svg';
import Clock from 'components/icons/Clock.svg';

const EventsPage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Imprezy</Typography>
			<div className=" fixed bottom-0 w-full">
				<div className="float-right mr-10 md:mr-72">
					<Button>
						<Link href="events/create">Utwórz nową imprezę</Link>
					</Button>
				</div>
			</div>
			<div className="mt-6">
				{parties.map((data) => (
					<Link href={`events/${data.id}`} key={data.id}>
						<div className="flex justify-between rounded-lg border-b-2 border-slate-300 p-2 hover:bg-slate-100">
							<div className="flex md:mr-4">
								<div className="mb-2 md:mr-2">
									<Image
										src={`/${data.image}`}
										height={300}
										width={300}
										alt="Parties picture"
										className="hidden rounded-lg md:block"
									/>
								</div>
								<div>
									<Typography component="h2">{data.name}</Typography>
									<Typography component="h4">{data.date}</Typography>
								</div>
							</div>
							<div className="mb-12 flex justify-between md:mx-4">
								<div className="mx-2 h-8 w-8 md:mx-10">
									<UserIcon />
									<Typography component="h4">
										{data.budget.people_in_party}
									</Typography>
								</div>
								<div className="mx-2 h-8 w-8 md:mx-10">
									<Wallet />
									<Typography component="h4">{data.budget.overall}</Typography>
								</div>
								<div className="mx-2 h-8 w-8 md:mx-10">
									<Clock />
									<Typography component="h4">
										{data.start_time}
										<br />
										{data.end_time}
									</Typography>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</MainLayout>
	);
};

export default EventsPage;
