import Link from 'next/link';
import type { SVGIcon } from '../Card/Card';

interface Props {
	icon: SVGIcon;
	href: string;
	items: {
		value: string | number | undefined | null;
	}[];
}

export const TableRow = ({ href, icon: Icon, items }: Props) => {
	return (
		<tr className="bg-white">
			<td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
				<div className="flex">
					<Link
						href={href}
						className="group inline-flex space-x-2 truncate text-sm"
					>
						<Icon
							className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
							aria-hidden="true"
						/>
						<p className="truncate text-gray-500 group-hover:text-gray-900">
							{items[0].value}
						</p>
					</Link>
				</div>
			</td>
			{items.slice(1).map(({ value }, i) => (
				<td
					key={`${value}-${i}`}
					className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
				>
					<span className="font-medium text-gray-900">{value}</span>{' '}
				</td>
			))}
		</tr>
	);
};
