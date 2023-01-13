import { Typography } from 'components/atoms/Typography/Typography';
import { MainLayout } from 'components/layouts/MainLayout';
import { useGetAllEventsQuery } from 'generated/graphql';

const StatisticsPage = () => {
	const x = useGetAllEventsQuery();

	console.log(x);

	return (
		<MainLayout>
			<Typography component="h1">Logs Statistics page</Typography>
		</MainLayout>
	);
};

export default StatisticsPage;
