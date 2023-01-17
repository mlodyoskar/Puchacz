import { forwardRef } from 'react';
import CloudIcon from './../../icons/CloudArrowUp.svg';

interface Props {
	errorMessage?: string;
}

export const FileInput = forwardRef<HTMLInputElement, Props>(
	({ errorMessage, ...props }, ref) => {
		return (
			<div className="flex w-full flex-col items-center justify-center">
				<label
					htmlFor="dropzone-file"
					className={`flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed ${
						errorMessage ? 'border-red-400' : 'border-gray-300'
					} bg-gray-50   transition-colors hover:bg-gray-100`}
				>
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<CloudIcon
							className={`mb-3 h-10 w-10 ${
								errorMessage ? 'text-red-400' : 'text-blue-600'
							}`}
							aria-hidden="true"
						/>
						<p className="mb-2 text-sm text-gray-500 ">
							<span className="font-semibold">Kliknij, aby dodać zdjęcie</span>
						</p>
						<p className="text-xs text-gray-500 ">PNG, JPG (MAX. 3MB)</p>
					</div>
					<input
						{...props}
						ref={ref}
						id="dropzone-file"
						type="file"
						className="hidden"
					/>
				</label>
				{errorMessage && (
					<p className="mt-1 self-start text-sm text-red-400">{errorMessage}</p>
				)}
			</div>
		);
	}
);

FileInput.displayName = 'FileInput';
