import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import Link from 'next/link';

const EventsPage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Events dummy page</Typography>
			<Link href="events/create">Utwórz nową imprezę</Link>
		</MainLayout>
	);
};

export default EventsPage;
