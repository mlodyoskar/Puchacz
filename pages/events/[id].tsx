import { useRouter } from 'next/router';
import { MainLayout } from 'components/layouts/MainLayout';
import { Typography } from 'components/atoms/Typography/Typography';
import { Button } from 'components/atoms/Button/Button';
import Image from 'next/image';
const EventDetailsPage = () => {
	const router = useRouter();
	return (
		<MainLayout>
			<Button size="small" fullWidth={true}>
				Powrót
			</Button>
			<Image src="/puch.png" width={1000} height={1000} alt="Banner" />
			<Typography component="h1">Szczegóły imprezy</Typography>
			<Typography component="h2">Nazwa: {router.query.id}</Typography>
			<Typography component="h2">Data: </Typography>
			<Typography component="h2">Godzina rozpoczęcia:</Typography>
			<Typography component="h2">Godzina zakończenia:</Typography>
			<Typography component="h2">Opis:</Typography>
			<Typography component="h2">Dje:</Typography>
			<Typography component="h2">Staff:</Typography>
		</MainLayout>
	);
};
export default EventDetailsPage;
