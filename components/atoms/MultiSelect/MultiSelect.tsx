import { Listbox, Transition } from '@headlessui/react';
import UpDownIcon from '../../icons/upDown.svg';
import CheckIcon from '../../icons/Check.svg';
import { Fragment } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { z } from 'zod';

const OptionSchema = z.object({
	id: z.number(),
	name: z.string(),
});

type Option = z.infer<typeof OptionSchema>;

interface Props {
	readonly label: string;
	readonly options: Option[];
}

export const MultiSelect = <T extends FieldValues>(
	props: Props & UseControllerProps<T>
) => {
	const {
		field: { value, onChange, name },
	} = useController<T>({ ...props });

	const { label, options } = props;

	const parsedValues = OptionSchema.array().parse(value);

	return (
		<div>
			<Listbox value={value} name={name} onChange={onChange} multiple>
				<Listbox.Label>{label}</Listbox.Label>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
						{parsedValues.length > 0 ? (
							parsedValues.map((option) => option.name).join(', ')
						) : (
							<span className="text-gray-700">Wybierz grajków </span>
						)}
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<UpDownIcon
								className="h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{options.map((option) => (
								<Listbox.Option
									key={option.id}
									className={({ active }) =>
										`relative cursor-default select-none py-3 pl-10 pr-4 md:py-2 ${
											active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{option.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};
