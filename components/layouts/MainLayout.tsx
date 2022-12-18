import cx from 'clsx';
import { Hamburger } from 'components/atoms/Hamburger/Hamburger';
import { Sidebar } from 'components/atoms/Sidebar/Sidebar';
import React, { useState } from 'react';

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => setIsOpen((prevValue) => !prevValue);

	return (
		<div>
			<div
				className={cx(
					'absolute right-0 left-0 transition-transform md:fixed md:translate-x-0',
					{
						'translate-x-0': isOpen,
						'-translate-x-full': !isOpen,
					}
				)}
			>
				<Sidebar />
			</div>
			<div className="fixed z-20 flex w-full justify-end p-4 md:hidden">
				<Hamburger isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
			</div>
			<main className="p-4 md:ml-64">{children}</main>
		</div>
	);
};
