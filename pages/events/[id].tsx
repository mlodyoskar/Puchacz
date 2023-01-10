import { useRouter } from 'next/router';
import { MainLayout } from 'components/layouts/MainLayout';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import Budget from '../../public/Budget.svg';
import Calendar from '../../public/Calendar.svg';
import Clock from '../../public/Clock.svg';
import Music from '../../public/Music.svg';
import Up from '../../public/Up.svg';
import Down from '../../public/Down.svg';
import Ticket from '../../public/Ticket.svg';
import Wallet from '../../public/Wallet.svg';
import Back from '../../public/Back.svg';
import Star from '../../public/Star.svg';
import { parties } from '../api/parties';
import Image from 'next/image';
import Link from 'next/link';

const EventDetailsPage = () => {
	const router = useRouter();
	const query = Number(router.query.id);
	return (
		<MainLayout>
			<div className="mb-2">
				<Typography component="h1">Szczegóły wydarzenia</Typography>
			</div>
			<div onClick={() => router.back()}>
				<Button size="large">
					<Typography component="h4">Back</Typography>
					<Back className="h-5 w-5 " aria-hidden="true" />
				</Button>
			</div>
			<div className="mb-2 flex flex-col items-center">
				<Image
					src={`/${parties[Number(query)].image}`}
					height={800}
					width={800}
					alt="Parties picture"
					className="rounded-lg"
				/>
			</div>
			<div>
				<div className="grid grid-cols-2 gap-4 lg:grid lg:grid-cols-4">
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Star className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Wydarzenie:</Typography>
						<Typography component="h4">
							{parties[Number(query)].name}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Calendar className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Data:</Typography>
						<Typography component="h4">
							{parties[Number(query)].date}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Clock className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Godziny:</Typography>
						<Typography component="h4">
							{parties[Number(query)].start_time} -{' '}
							{parties[Number(query)].end_time}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Music className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Dj`e:</Typography>
						<Typography component="h4">
							{parties[Number(query)].dj[0]}, {parties[Number(query)].dj[1]},{' '}
							{parties[Number(query)].dj[2]}
						</Typography>
					</div>
					<div className="  rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Ticket className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Obecnych:</Typography>
						<Typography component="h4">
							{parties[Number(query)].budget.people_in_party}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Up className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Zarobki:</Typography>
						<Typography component="h4">
							{parties[Number(query)].budget.party_income}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Down className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Wydatki:</Typography>
						<Typography component="h4">
							{parties[Number(query)].budget.party_spend}
						</Typography>
					</div>
					<div className=" rounded-lg border-b-2 border-slate-300 p-5 hover:bg-slate-100 ">
						<Wallet className="h-5 w-5 " aria-hidden="true" />
						<Typography component="h2">Zysk ogółem:</Typography>
						<Typography component="h4">
							{parties[Number(query)].budget.overall}
						</Typography>
					</div>
				</div>
				<div className="mt-4 flex justify-center">
					<Link href="http://localhost:3000/events">
						<Button size="medium">
							<Typography component="h2">Szczegolowy budzet</Typography>
							<Budget className="h-5 w-5 " aria-hidden="true" />
						</Button>
					</Link>
				</div>
			</div>
		</MainLayout>
	);
};
export default EventDetailsPage;
