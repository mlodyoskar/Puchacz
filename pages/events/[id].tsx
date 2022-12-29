import { useRouter } from 'next/router';
import { MainLayout } from 'components/layouts/MainLayout';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import { parties } from '../api/data.json';
import Expand from '../../public/Expand.svg';
import Back from '../../public/Back.svg';
import Image from 'next/image';
const EventDetailsPage = () => {
	const router = useRouter();
	console.log(router.query);
	console.log(parties);
	return (
		<MainLayout>
			<div onClick={() => router.back()}>
				<Button size="small">
					Powrót <Back className="h-5 w-5 text-white" aria-hidden="true" />
				</Button>
			</div>

			<div className="flex flex-col items-center ">
				<Image
					src="/puch.png"
					height={1000}
					width={1000}
					alt="Parties picture"
					className="rounded-lg"
				/>
			</div>
			<div className="flex flex-col">
				<div className="mt-2 flex flex-row justify-center ">
					<div className=" mx-auto rounded-lg bg-blue-700 p-5 text-white">
						<Typography component="h2">Nazwa wydarzenia:</Typography>
						<Typography component="h1">{parties[0].name}</Typography>
					</div>
					<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
						<Typography component="h2">Data wydarzenia:</Typography>
						<Typography component="h1">{parties[0].date}</Typography>
					</div>
					<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
						<Typography component="h2">Godziny wydarzenia:</Typography>
						<Typography component="h1">
							{parties[0].start_time} - {parties[0].end_time}
						</Typography>
					</div>
					<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
						<Typography component="h2">Dj`e:</Typography>
						<Typography component="h1">
							{parties[0].dj[0]}, {parties[0].dj[1]}, {parties[0].dj[2]}
						</Typography>
					</div>
				</div>
				<div className="mt-2 flex justify-center">
					<Button size="small">
						More
						<Expand className="h-5 w-5 text-white" aria-hidden="true" />
					</Button>
				</div>
				{/* <div className="mx-auto mt-2 rounded-lg bg-blue-700 p-5 text-white">
					<Typography component="h2">Opis:</Typography>
					<Typography component="h1">{parties[0].Description}</Typography>
				</div> */}
			</div>
		</MainLayout>
	);
};
export default EventDetailsPage;
