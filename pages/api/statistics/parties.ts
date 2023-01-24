import type { GetEventsSummaryQuery } from './../../../generated/graphql';
import { GetEventsSummaryDocument } from './../../../generated/graphql';
import { authorizedApolloClient } from 'graphql/authorizedClient';
import type { NextApiHandler } from 'next';
import dayjs from 'dayjs';
import * as dayjsLocale from 'dayjs/locale/pl';

export interface StatisticsParties {
	events: Party[];
}
interface Party {
	id: string;
	name: string;
	slug: string | null | undefined;
	day: string;
	participants: number | null | undefined;
	income: string;
	spending: string;
	profit: string;
}

dayjs.locale('pl');

const handler: NextApiHandler = async (req, res) => {
	try {
		const { data } = await authorizedApolloClient.query<GetEventsSummaryQuery>({
			query: GetEventsSummaryDocument,
		});

		const events = data.events.map<Party>(
			({ id, name, slug, budgets, day, participants }) => {
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
					slug,
					participants,
					income: `${budget.income / 100} PLN`,
					spending: `${budget.spending / 100} PLN `,
					profit: `${budget.profit / 100} PLN`,
					day: dayjs(day).format('D MMM YYYY'),
				};
			}
		);

		res.status(200).json({ events });
	} catch (error) {
		res.status(501).json({ error });
	}
};

export default handler;
