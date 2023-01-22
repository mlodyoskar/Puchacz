import type { GetParticipantsSummaryQuery } from './../../../generated/graphql';
import { GetParticipantsSummaryDocument } from './../../../generated/graphql';
import { authorizedApolloClient } from 'graphql/authorizedClient';
import type { NextApiHandler } from 'next';
import type { CardType } from 'components/molecules/Card/Card';

export interface StatisticsSummary {
	summary: {
		name: string;
		value: number | string;
		type: CardType;
	}[];
}

const handler: NextApiHandler = async (req, res) => {
	const {
		data: { events },
	} = await authorizedApolloClient.query<GetParticipantsSummaryQuery>({
		query: GetParticipantsSummaryDocument,
	});

	const lastPartyParticipants = events.find(
		(event) => event.participants !== null
	);

	const allPartiesParticipants = events.reduce((acc, curr) => {
		if (curr.participants) {
			return acc + curr.participants;
		} else {
			return acc + 0;
		}
	}, 0);

	const summary = [
		{ name: 'Stan konta', value: '12 496 PLN', type: 'money' },
		{
			name: 'Na ostatniej imprezie',
			value: lastPartyParticipants?.participants,
			type: 'participants',
		},
		{
			name: 'Osób łącznie',
			value: allPartiesParticipants,
			type: 'participants',
		},
	];

	res.status(200).json({ summary });
};

export default handler;
