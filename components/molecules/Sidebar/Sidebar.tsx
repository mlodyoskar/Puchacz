import LogoutIcon from '../../icons/Logout.svg';
import HomeIcon from '../../icons/Home.svg';
import DollarIcon from '../../icons/Dollar.svg';
import CalendarIcon from '../../icons/Calendar.svg';
import TableIcon from '../../icons/TableCells.svg';
import { Button } from '../../atoms/Button/Button';
import { SidebarItem } from '../../atoms/SidebarItem/SidebarItem';
import { useRouter } from 'next/router';
import { useState } from 'react';

const sidebarItems = [
	{
		text: 'Statystyki',
		link: '/statistics',
		icon: HomeIcon,
	},
	{
		text: 'Budżet',
		link: '/budzet',
		icon: DollarIcon,
	},
	{
		text: 'Imprezy',
		link: '/events',
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
		<aside className="relative h-screen w-full md:w-64" aria-label="Sidebar">
			<div className="flex h-full flex-col overflow-y-auto rounded bg-gray-50 py-4 px-3">
				<div className="mb-4 flex items-center justify-between">
					<h1 className="text-xl">Puchacz Label App</h1>
				</div>
				<ul className="mt-4 space-y-2 md:mt-0">
					{sidebarItems.map(({ text, link, icon: Icon }) => {
						const isActive = router.pathname.includes(link);

						return (
							<SidebarItem
								key={text}
								isActive={isActive}
								icon={Icon}
								link={link}
							>
								{text}
							</SidebarItem>
						);
					})}
				</ul>
				<div className="mt-auto">
					<Button size="large" fullWidth={true}>
						<LogoutIcon className="h-6 w-6" />
						Wyloguj się
					</Button>
				</div>
			</div>
		</aside>
	);
};
