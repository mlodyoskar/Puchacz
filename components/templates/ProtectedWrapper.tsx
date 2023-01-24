import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

export const ProtectedWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const { data: session, status } = useSession();

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (!session) {
		return (
			<section className="bg-white">
				<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
					<section className="relative flex h-64 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
						<Image
							alt="Group of people at party"
							width={900}
							height={900}
							src="/../public/assets/login.jpg"
							className="absolute inset-0 h-full w-full rounded-sm object-cover opacity-80"
						/>

						<div className="hidden lg:relative lg:block lg:p-12">
							<h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
								Puchacz Label 🦉
							</h2>

							<p className="mt-4 leading-relaxed text-white/90">
								Aplikacja do zarządzania imprezami i budżetem
							</p>
						</div>
					</section>

					<main
						aria-label="Main"
						className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
					>
						<div className="max-w-xl lg:max-w-3xl">
							<div className="relative block lg:hidden">
								<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
									Puchacz Label 🦉
								</h1>

								<p className="leading-relaxed text-gray-500">
									Aplikacja do zarządzania imprezami i budżetem
								</p>
							</div>

							<form className="mt-8 grid grid-cols-6 gap-6">
								<div className="col-span-12 sm:col-span-3">
									<Input>Login</Input>
								</div>

								<div className="col-span-12 sm:col-span-6">
									<Input type="password">Hasło</Input>
								</div>

								<div className="col-span-12 sm:flex sm:items-center sm:gap-4">
									<Button fullWidth={true}>Zaloguj się</Button>
								</div>
							</form>
						</div>
					</main>
				</div>
			</section>
		);
		// return (
		// 	<div className="flex h-screen w-full flex-col items-center justify-center">
		// 		<Typography component="h1">Kliknij aby się zalogować</Typography>

		// 		<div className="mt-8 h-12">
		// 			<Button
		// 				onClick={() =>
		// 					signIn('credentials', {
		// 						username: 'oskarpuchalski17@gmail.com',
		// 						password: 'Lakers21',
		// 					})
		// 				}
		// 			>
		// 				Zaloguj się
		// 			</Button>
		// 		</div>
		// 	</div>
		// );
	}

	return <>{children}</>;
};
