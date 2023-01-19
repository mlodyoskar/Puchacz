import {
	GetEventsSummaryDocument,
	GetEventsSummaryQuery,
} from './../../../generated/graphql';
import { authorizedApolloClient } from 'graphql/authorizedClient';
import type { NextApiHandler } from 'next';
import { setTimeout } from 'timers/promises';
import { access } from 'fs';

export interface StatisticsParties {
	parties: typeof parties;
}

const parties = [
	{
		id: 1,
		name: 'American Party',
		href: '#',
		income: '4 300 PLN',
		outcome: '2 100 PLN',
		earned: '2 200',
		date: 'July 11, 2020',
	},
	{
		id: 2,
		name: 'Hawai Party',
		href: '#',
		income: '4 300 PLN',
		outcome: '2 100 PLN',
		earned: '2 200',
		date: 'July 11, 2020',
	},
	{
		id: 3,
		name: 'Pink party',
		href: '#',
		income: '4 300 PLN',
		outcome: '2 100 PLN',
		earned: '2 200',
		date: 'July 11, 2020',
	},
	{
		id: 4,
		name: 'Puchacz roczek',
		href: '#',
		income: '4 300 PLN',
		outcome: '2 100 PLN',
		earned: '2 200',
		date: 'July 11, 2020',
	},
];

const handler: NextApiHandler = async (req, res) => {
	const { data } = await authorizedApolloClient.query<GetEventsSummaryQuery>({
		query: GetEventsSummaryDocument,
	});

	const events = data.events.map(({ name, slug, budgets }) => {});

	res.status(200).json({ data });
};

export default handler;
