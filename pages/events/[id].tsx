import { useRouter } from 'next/router';
import { MainLayout } from 'components/layouts/MainLayout';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import { parties } from '../api/data.json';
import Expand from '../../public/Expand.svg';
import Back from '../../public/Back.svg';
import Hide from '../../public/Hide.svg';
import Image from 'next/image';
import { useState } from 'react';
const EventDetailsPage = () => {
	const router = useRouter();
	console.log(router.query);
	console.log(parties);
	const [showBudget, setShowBudget] = useState(false);

	function handleHide() {
		setShowBudget(!showBudget);
	}
	return (
		<MainLayout>
			<div className="mb-2">
				<Typography component="h1">Szczegóły wydarzenia</Typography>
			</div>
			<div onClick={() => router.back()}>
				<Button size="small">
					<Typography component="h5">Back</Typography>
					<Back className="h-5 w-5 text-white" aria-hidden="true" />
				</Button>
			</div>
			<div className="mb-2 flex flex-col items-center">
				<Image
					src="/puch.png"
					height={800}
					width={800}
					alt="Parties picture"
					className="rounded-lg"
				/>
			</div>
			<div className="flex flex-col">
				<div className="mt-2 mb-2 flex flex-row justify-center">
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
				{showBudget ? (
					<div className="flex flex-col">
						<div className="mt-2 mb-2 flex flex-row justify-center">
							<div className=" mx-auto rounded-lg bg-blue-700 p-5 text-white">
								<Typography component="h2">Ludzi na imprezie:</Typography>
								<Typography component="h1">
									{parties[0].budget.people_in_party}
								</Typography>
							</div>
							<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
								<Typography component="h2">Zarobki:</Typography>
								<Typography component="h1">
									{parties[0].budget.party_income}
								</Typography>
							</div>
							<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
								<Typography component="h2">Wydatki:</Typography>
								<Typography component="h1">
									{parties[0].budget.party_spend}
								</Typography>
							</div>
							<div className="mx-auto rounded-lg bg-blue-700 p-5 text-white">
								<Typography component="h2">Zysk ogółem:</Typography>
								<Typography component="h1">
									{parties[0].budget.overall}
								</Typography>
							</div>
						</div>
						<div className="mt-2 flex justify-center">
							<div onClick={() => setShowBudget(!showBudget)}>
								<Button size="small">
									<Typography component="h5">Hide</Typography>
									<Hide className="h-5 w-5 text-white" aria-hidden="true" />
								</Button>
							</div>
						</div>
					</div>
				) : (
					<div className="mt-2 flex justify-center">
						<div
							onClick={() => {
								handleHide();
							}}
						>
							<Button size="small">
								<Typography component="h5">More</Typography>
								<Expand className="h-5 w-5 text-white" aria-hidden="true" />
							</Button>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
};
export default EventDetailsPage;
