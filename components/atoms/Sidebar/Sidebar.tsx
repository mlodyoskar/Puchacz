import LogoutIcon from '../../icons/Logout.svg';
import HomeIcon from '../../icons/Home.svg';
import DollarIcon from '../../icons/Dollar.svg';
import CalendarIcon from '../../icons/Calendar.svg';
import TableIcon from '../../icons/TableCells.svg';
import { Button } from '../Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useRouter } from 'next/router';
import { useState } from 'react';

const sidebarItems = [
	{
		text: 'Statystyki',
		link: '/',
		icon: HomeIcon,
	},
	{
		text: 'Budżet',
		link: '/budzet',
		icon: DollarIcon,
	},
	{
		text: 'Imprezy',
		link: '/imprezy',
		icon: CalendarIcon,
	},
	{
		text: 'Logi',
		link: '/logi',
		icon: TableIcon,
	},
];

export const Sidebar = () => {
	const router = useRouter();

	return (
		<aside className="w-full md:w-64 relative h-screen" aria-label="Sidebar">
			<div className="overflow-y-auto py-4 px-3 h-full bg-gray-50 rounded flex flex-col">
				<div className="flex justify-between items-center mb-4">
					<h1 className="text-xl">Puchacz Label App</h1>
				</div>
				<ul className="space-y-2 mt-4 md:mt-0">
					{sidebarItems.map(({ text, link, icon: Icon }) => {
						const isActive = link === router.pathname;

						return (
							<SidebarItem key={text} isActive={isActive} icon={Icon} link={link}>
								{text}
							</SidebarItem>
						);
					})}
				</ul>
				<div className="mt-auto">
					<Button size="large" fullWidth={true}>
						<LogoutIcon className="w-6 h-6" />
						Wyloguj się
					</Button>
				</div>
			</div>
		</aside>
	);
};
