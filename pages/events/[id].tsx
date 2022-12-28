import { useRouter } from 'next/router';
import { MainLayout } from 'components/layouts/MainLayout';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import { parties } from '../api/data.json';
import Image from 'next/image';
const EventDetailsPage = () => {
	const router = useRouter();
	console.log(router.query);
	console.log(parties);
	return (
		<MainLayout>
			<div onClick={() => router.back()}>
				<Button size="small" fullWidth={true}>
					Powrót
				</Button>
			</div>
			<Typography component="h1">Szczegóły imprezy</Typography>
			<Image src="/puch.png" width={1000} height={1000} alt="Banner" />
			<Typography component="h2">Nazwa: {parties[0].name}</Typography>
			<Typography component="h2">Data: {parties[0].date}</Typography>
			<Typography component="h2">
				Godzina rozpoczęcia: {parties[0].start_time}
			</Typography>
			<Typography component="h2">
				Godzina zakończenia: {parties[0].end_time}
			</Typography>
			<Typography component="h2">Opis: {parties[0].Description}</Typography>
			<Typography component="h2">Dje: {parties[0].dj}</Typography>
			<Typography component="h2">
				Staff: {parties[0].staff.photos} {parties[0].staff.graphic}
			</Typography>
		</MainLayout>
	);
};
export default EventDetailsPage;
