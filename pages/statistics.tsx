import { Typography } from 'components/atoms/Typography/Typography';
import { Card } from 'components/molecules/Card';
import UserIcon from './../components/icons/User.svg';
import DollarIcon from './../components/icons/Dollar.svg';
import UserGroupIcon from './../components/icons/UserGroup.svg';

const cards = [
	{ name: 'Stan konta', href: '#', icon: DollarIcon, amount: '12 496 PLN' },
	{
		name: 'Osób na ostatniej imprezie',
		href: '#',
		icon: UserIcon,
		amount: '378',
	},
	{ name: 'Osób łącznie', href: '#', icon: UserGroupIcon, amount: '20 432' },
	{ name: 'Ilość imprez', href: '#', icon: UserIcon, amount: '13' },
];

const StatisticsPage = () => {
	return (
		<>
			<div className="min-h-full">
				<div className="flex flex-1 flex-col">
					<main className="flex-1 pb-8">
						<div className="">
							<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
								<Typography component="h2">Podsumowanie</Typography>
								<div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
									{cards.map((card) => (
										<Card key={card.name} {...card} />
									))}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default StatisticsPage;
