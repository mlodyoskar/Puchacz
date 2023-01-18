import Link from 'next/link';

const ErrorPage = () => {
	return (
		<>
			<div className="flex min-h-full flex-col bg-white pt-16 pb-12">
				<main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
					<div className="py-16">
						<div className="text-center">
							<p className="text-base font-semibold text-blue-600">404</p>
							<h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								Nie znaleziono strony
							</h1>
							<p className="mt-2 text-base text-gray-500">
								Nie udało się znaleźć przez Ciebie szukanej strony
							</p>
							<div className="mt-6">
								<Link
									href="/statistics"
									className="text-base font-medium text-blue-600 hover:text-blue-500"
								>
									Wróć na stronę główną
									<span aria-hidden="true"> &rarr;</span>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default ErrorPage;
