import { Typography } from 'components/atoms/Typography/Typography';
import Link from 'next/link';

const EventsPage = () => {
	return (
		<>
			<Typography component="h1">Events dummy page</Typography>
			<Link href="events/create">Utwórz nową imprezę</Link>
		</>
	);
};

export default EventsPage;
