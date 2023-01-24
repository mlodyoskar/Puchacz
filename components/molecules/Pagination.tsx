export const Pagination = () => {
	return (
		<nav
			className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
			aria-label="Pagination"
		>
			<div className="hidden sm:block">
				<p className="text-sm text-gray-700">
					Pokazuje od <span className="font-medium">1</span>
					<span className="font-medium">do 10</span>{' '}
					<span className="font-medium">z 23</span> wyników
				</p>
			</div>
			<div className="flex flex-1 justify-between sm:justify-end">
				<button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
					Poprzednia
				</button>
				<button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
					Następna
				</button>
			</div>
		</nav>
	);
};
