import type { NextApiHandler } from 'next';

export interface StatisticsSummary {
	summary: typeof cards;
}

const cards = [
	{ name: 'Stan konta', href: '#', amount: '12 496 PLN', type: 'money' },
	{
		name: 'Na ostatniej imprezie',
		href: '#',
		amount: '378',
		type: 'people',
	},
	{ name: 'Osób łącznie', href: '#', amount: '20 432', type: 'people' },
];

const handler: NextApiHandler = async (req, res) => {
	res.status(201).json({ summary: cards });
};

export default handler;
