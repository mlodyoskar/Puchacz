import Link from 'next/link';
import DollarIcon from '../../../components/icons/Dollar.svg';
import UserGroupIcon from '../../../components/icons/UserGroup.svg';

export type CardType = 'money' | 'participants';
interface Props {
	name: string;
	value: string | number;
	href?: string;
	type: CardType;
}

const typeToIcon = {
	money: DollarIcon,
	participants: UserGroupIcon,
};

export const Card = ({ name, value, href, type }: Props) => {
	const Icon = typeToIcon[type];

	return (
		<div className="overflow-hidden rounded-lg bg-white shadow">
			<div className="p-5">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
					</div>
					<div className="ml-5 w-0 flex-1">
						<dl>
							<dt className="truncate text-sm font-medium text-gray-500">
								{name}
							</dt>
							<dd>
								<div className="text-lg font-medium text-gray-900">{value}</div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			{href && (
				<div className="bg-gray-50 px-5 py-3">
					<div className="text-sm">
						<Link
							href={href}
							className="font-medium text-blue-700 hover:text-blue-900"
						>
							Szczegóły
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};
