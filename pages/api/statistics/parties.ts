import type { GetEventsSummaryQuery } from './../../../generated/graphql';
import { GetEventsSummaryDocument } from './../../../generated/graphql';
import { authorizedApolloClient } from 'graphql/authorizedClient';
import type { NextApiHandler } from 'next';

export interface StatisticsParties {
	events: Party[];
}
interface Party {
	id: string;
	name: string;
	slug: string | null | undefined;
	day: string;
	participients: number | null | undefined;
	budget: {
		income: number;
		spending: number;
	};
}

const handler: NextApiHandler = async (req, res) => {
	const { data } = await authorizedApolloClient.query<GetEventsSummaryQuery>({
		query: GetEventsSummaryDocument,
	});

	const events = data.events.map<Party>(
		({ id, name, slug, budgets, day, participients }) => {
			const budget = budgets.reduce(
				(acc, curr) => {
					if (curr.isIncome) {
						return {
							...acc,
							income: acc.income + curr.amount,
							profit: acc.profit + curr.amount,
						};
					} else {
						return {
							...acc,
							spending: acc.spending + curr.amount,
							profit: acc.profit - curr.amount,
						};
					}
				},
				{ income: 0, spending: 0, profit: 0 }
			);
			return {
				id,
				name,
				participients,
				slug,
				budget,
				day,
			};
		}
	);

	res.status(200).json({ events });
};

export default handler;
