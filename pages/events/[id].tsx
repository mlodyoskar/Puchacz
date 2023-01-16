import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import Calendar from 'components/icons/Calendar.svg';
import TrendingUp from 'components/icons/TrendingUp.svg';
import TrendingDown from 'components/icons/TrendingDown.svg';
import Ticket from 'components/icons/Ticket.svg';
import Wallet from 'components/icons/Wallet.svg';
import Back from 'components/icons/Back.svg';
import Dollar from 'components/icons/Dollar.svg';
import Group from 'components/icons/Group.svg';
import { MainLayout } from 'components/layouts/MainLayout';
import { useGetEventByIdQuery } from 'generated/graphql';

const EventDetailsPage = () => {
	const router = useRouter();
	const id = router.query.id as string;
	const { data, loading } = useGetEventByIdQuery({ variables: { id } });
	if (loading) {
		return (
			<MainLayout>
				<Typography component="h1">Szczegóły wydarzenia</Typography>
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
	console.log(data, loading);
	return (
		<MainLayout>
			<div>
				<div>
					<Typography component="h1">Szczegóły wydarzenia</Typography>
				</div>
				<div onClick={() => router.back()}>
					<Button size="large">
						<Typography component="h4">Back</Typography>
						<Back className="h-5 w-5 " aria-hidden="true" />
					</Button>
				</div>
				<div className="xl:b flex flex-col items-start xl:items-center">
					<div>
						<Image
							src={data.event?.image?.url || '/part.png'}
							height={1000}
							width={1000}
							alt="Parties picture"
							className="mb-2 rounded-lg"
						/>
						<div className="mb-2 flex flex-row">
							<Calendar className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">{data.event?.day}</Typography>
						</div>
						<Typography component="h1">{data.event?.name}</Typography>
						<div className=" my-2 flex flex-row">
							<Group className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">
								Stuff:
								{data.event?.stuffs.map((stuff) => (
									<Typography component="h3" key={stuff.id}>
										{`-${stuff.name}`}
									</Typography>
								))}
							</Typography>
						</div>
						<div className="mb-2 flex flex-row">
							<Ticket className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">Obecnych: 500 </Typography>
						</div>
						<div className="mb-2 flex flex-row">
							<TrendingUp className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">Zarobek: 12500 PLN</Typography>
						</div>
						<div className="mb-2 flex flex-row">
							<TrendingDown className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">Wydatki: 3500 PLN</Typography>
						</div>
						<div className="mb-2 flex flex-row">
							<Wallet className="h-5 w-5 " aria-hidden="true" />
							<Typography component="h3">Pozostało: 9500 PLN</Typography>
						</div>
						<div className="mb-2">
							<Link href="http://localhost:3000/budzet">
								<Button size="medium">
									<Typography component="h2">Szczegolowy budzet</Typography>
									<Dollar className="h-5 w-5 " aria-hidden="true" />
								</Button>
							</Link>
						</div>
						<div className="text-slate-600">
							<Typography component="h6">
								Created at: {data.event?.createdAt}
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
export default EventDetailsPage;
