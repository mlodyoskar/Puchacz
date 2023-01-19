import React from 'react';
import cx from 'clsx';

type Variants = 'default' | 'warning';

interface Props {
	children: React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	variant?: Variants;
	fullWidth?: boolean;
	disabled?: boolean;
	disabled?: boolean;
}

export const Button = ({
	children,
	variant = 'default',
	size = 'medium',
	fullWidth = false,
	disabled = false,
	disabled = false,
}: Props) => {
	return (
		<button
			disabled={disabled}
			disabled={disabled}
			className={cx(
				{
					'text-sm': size === 'small',
					'text-base': size === 'medium',
					'py-4': size === 'large',
					'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300':
						variant === 'default',
					'bg-red-600 hover:bg-red-800  focus:ring-red-300':
						variant === 'warning',
					'bg-blue-700 hover:bg-blue-800 hover:opacity-100 focus:ring-blue-300':
						variant === 'default',
					'bg-red-600 hover:bg-red-800 hover:opacity-100  focus:ring-red-300':
						variant === 'warning',
					'w-full': fullWidth,
					'cursor-not-allowed': disabled,
				},
				'mr-2 mb-2 flex h-full items-center justify-center  gap-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white transition-colors focus:outline-none focus:ring-4'
			)}
		>
			{children}
		</button>
	);
};
