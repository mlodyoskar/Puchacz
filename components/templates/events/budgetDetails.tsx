import UserIcon from 'components/icons/UserIcon.svg';
import TicketIcon from 'components/icons/TicketIcon.svg';
import type { GetEventByIdQuery } from 'generated/graphql';
import { BudgetTable } from 'components/molecules/Sidebar/BudgetTable';

type Budget = Pick<
	NonNullable<GetEventByIdQuery['event']>,
	'participants' | 'ticketPrice' | 'budgets'
>;
// type Event = Pick<GetAllEventsQuery["events"][number], "name" |  "day"  | "stuffs">
// type BudgetType = Pick<NonNullable<GetEventByIdQuery['event']>, 'budgets'>;

const RenderTable = ({
	tableName,
	budgets,
}: {
	tableName: string;
	budgets: any;
}) => {
	const isIncome = budgets.filter((budget: any) => budget.isIncome);
	const isNotIncome = budgets.filter(
		(budget: any) => budget.isIncome === false
	);

	if (tableName === 'Przychody') {
		return <BudgetTable tableName={tableName} budgets={isIncome} />;
	}
	return <BudgetTable tableName={tableName} budgets={isNotIncome} />;
};
export const EventBudgetDetails = ({
	participants,
	ticketPrice,
	budgets,
}: Budget) => {
	return (
		<div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
			<dl className="grid grid-cols-2 gap-x-4 gap-y-8">
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">
						Osób na imprezie
					</dt>
					<dd className="text-md mt-1 flex flex-row text-gray-900">
						<UserIcon className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
						{participants}
					</dd>
				</div>
				<div className="sm:col-span-1">
					<dt className="text-md font-medium text-gray-500">Cena biletu</dt>
					<dd className="text-md mt-1 flex flex-row text-gray-900">
						<TicketIcon className="mt-1 mr-1 h-4 w-4" aria-hidden="true" />
						{ticketPrice} PLN
					</dd>
				</div>
			</dl>
			<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
				<RenderTable tableName="Przychody" budgets={budgets} />
				<RenderTable tableName="Wydatki" budgets={budgets} />
			</dl>
		</div>
	);
};
