import UserIcon from 'components/icons/UserIcon.svg';
import TicketIcon from 'components/icons/TicketIcon.svg';
interface Budget {
	participants: number;
	ticketPrice: number;
	budgets: [
		{
			id: string;
			isIncome: boolean;
			name: string;
			amount: number;
		}
	];
}
export const BudgetDetails = ({
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
				<div className="sm:col-span-1">
					<nav className="mt-6 h-full overflow-y-auto" aria-label="Directory">
						<dt className="text-md font-medium text-gray-500">Przychody</dt>
						<div className="relative">
							<ul role="list" className="relative z-0">
								{budgets.map((budget) => (
									<li key={budget.id} className="bg-white">
										<div
											className={
												budget.isIncome
													? 'relative flex items-center space-x-3 border-b-2 border-gray-200 px-6 py-3'
													: 'hidden'
											}
										>
											<div className="min-w-0 flex-1">
												<div className="focus:outline-none">
													<span
														className="absolute inset-0"
														aria-hidden="true"
													/>
													<p className="text-sm font-medium text-gray-900">
														{budget.name}
													</p>
													<p className="truncate text-sm text-gray-500">
														{budget.amount} PLN
													</p>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
				<div className="sm:col-span-1">
					<nav className="mt-6 h-full overflow-y-auto" aria-label="Directory">
						<dt className="text-md font-medium text-gray-500">Wydatki</dt>
						<div className="relative">
							<ul role="list" className="relative z-0">
								{budgets.map((budget) => (
									<li key={budget.id} className="bg-white">
										<div
											className={
												budget.isIncome
													? 'hidden'
													: 'relative flex items-center space-x-3 border-b-2 border-gray-200 px-6 py-3 '
											}
										>
											<div className="min-w-0 flex-1">
												<div className="focus:outline-none">
													<span
														className="absolute inset-0"
														aria-hidden="true"
													/>
													<p className="text-sm font-medium text-gray-900">
														{budget.name}
													</p>
													<p className="truncate text-sm text-gray-500">
														{budget.amount} PLN
													</p>
												</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
			</dl>
		</div>
	);
};
