import React, { forwardRef } from 'react';
import cx from 'clsx';

interface Props {
	children: React.ReactNode;
	placeholder?: string;
	type?: React.HTMLInputTypeAttribute;
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
	({ children, type = 'text', placeholder, error, ...props }, ref) => {
		return (
			<div>
				<label
					className={cx(
						{
							'border-red-400': error,
						},
						'block overflow-hidden rounded-md border px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
					)}
				>
					<span className="text-xs font-medium text-gray-700">
						{' '}
						{children}{' '}
					</span>

					<input
						ref={ref}
						{...props}
						type={type}
						placeholder={placeholder}
						className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
					/>
				</label>
				{error && <p className="mt-1 text-sm text-red-400">{error}</p>}
			</div>
		);
	}
);

Input.displayName = 'Input';
