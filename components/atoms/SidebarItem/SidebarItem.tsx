import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

interface Props {
	children: React.ReactNode;
	link: string;
	isActive: boolean;
	icon?: any;
}

export const SidebarItem = ({
	children,
	link,
	isActive,
	icon: Icon,
}: Props) => {
	return (
		<li>
			<Link
				href={link}
				className={clsx(
					'flex items-center p-2 text-base group font-normal rounded-lg',
					{ 'bg-blue-600 hover:bg-blue-700 text-white': isActive },
					{
						' text-gray-900  hover:bg-gray-200': !isActive,
					}
				)}
			>
				{Icon && <Icon className="w-6 h-6" />}
				<span className="ml-3">{children}</span>
			</Link>
		</li>
	);
};
