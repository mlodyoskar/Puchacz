export const CardPlaceholder = () => {
	return (
		<div className="overflow-hidden rounded-lg bg-white shadow">
			<div className="h-[5.25rem] p-5">
				<div className="flex h-6 items-center">
					<div className="flex-shrink-0">
						<div className="skeleton h-6 w-6" />
					</div>
					<div className="ml-5 w-0 flex-1">
						<dl>
							<dt className="skeleton mb-1 h-5 w-1/2 truncate "></dt>
							<dd>
								<div className="skeleton h-5 w-2/3"></div>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<div className="h-11 bg-gray-50 px-5 py-3"></div>
		</div>
	);
};
