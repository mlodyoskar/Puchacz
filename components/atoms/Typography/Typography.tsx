import React from 'react';
import cx from 'clsx';

interface Props {
	children: React.ReactNode;
	component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography = ({ children, component = 'p' }: Props) => {
	const Component = component;
	return (
		<Component
			className={cx({
				'text-sm':
					component === 'h6' || component === 'p' || component === 'span',
				'text-base': component === 'h5',
				'text-lg': component === 'h4',
				'text-xl': component === 'h3',
				'text-3xl': component === 'h2',
				'text-4xl': component === 'h1',
			})}
		>
			{children}
		</Component>
	);
};
