import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import Link from 'next/link';

const EventsPage = () => {
	return (
		<MainLayout>
			<Typography component="h1">Events dummy page</Typography>
<<<<<<< HEAD:pages/imprezy.tsx
			<p>Does it work??</p>
=======
			<Link href="events/create">Utwórz nową imprezę</Link>
>>>>>>> event-creation:pages/events/index.tsx
		</MainLayout>
	);
};

export default EventsPage;
