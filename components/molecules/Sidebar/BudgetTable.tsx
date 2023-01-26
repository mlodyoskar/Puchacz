import type { GetEventByIdQuery } from 'generated/graphql';
type BudgetHelper = Pick<NonNullable<GetEventByIdQuery['event']>, 'budgets'>;
type BudgetAll = {
	tableName: string;
	budgets: BudgetHelper;
};
export const BudgetTable = ({ tableName, budgets }: BudgetAll) => {
	return (
		<div className="sm:col-span-1">
			<div className="mt-6 h-full overflow-y-auto">
				<dt className="text-md font-medium text-gray-500">{tableName}</dt>
				<div className="relative">
					<ul role="list" className="relative z-0">
						{budgets.map((budget) => (
							<li key={budget.id} className="bg-white">
								<div className="relative flex items-center space-x-3 border-b-2 border-gray-200 px-6 py-3">
									<div className="min-w-0 flex-1">
										<div className="focus:outline-none">
											<span className="absolute inset-0" aria-hidden="true" />
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
			</div>
		</div>
	);
};
