import { useSession, signIn } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { useZodForm } from 'utils/useZodForm';
import { z } from 'zod';

const LoginForm = z.object({
	login: z.string().min(1),
	password: z.string().min(1),
});

interface Props {
	children: React.ReactNode;
}

export const ProtectedWrapper = ({ children }: Props) => {
	const { data: session, status } = useSession();
	const { register, handleSubmit } = useZodForm({ schema: LoginForm });
	const [errorLoginMessage, setErrorLoginMessage] = useState<
		'Podano błędne dane logowania' | undefined
	>(undefined);

	interface onSubmit {
		login: string;
		password: string;
	}
	const onSubmit = async ({ login, password }: onSubmit) => {
		const signInResponse = await signIn('credentials', {
			username: login,
			password,
			redirect: false,
		});

		if (signInResponse && signInResponse.error) {
			setErrorLoginMessage('Podano błędne dane logowania');
		}
	};

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (!session) {
		return (
			<section className="bg-white">
				<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
					<section className="relative flex h-56 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
						<Image
							alt="Group of people at party"
							width={3240}
							height={1920}
							src="https://media.graphassets.com/66RIIUhTpWDfrJEO20zw"
							className="absolute inset-0 h-full w-full rounded-sm object-cover opacity-80"
						/>
					</section>

					<main
						aria-label="Main"
						className="flex w-full items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
					>
						<div className="w-full">
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="mt-8 grid grid-cols-6 gap-6"
							>
								<div className="col-span-12">
									<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
										Puchacz Label 🦉
									</h1>

									<p className="leading-relaxed text-gray-500">
										Aplikacja do zarządzania imprezami i budżetem
									</p>
								</div>
								{errorLoginMessage && (
									<div className="col-span-12">
										<p className="text-xs text-red-600">{errorLoginMessage}</p>
									</div>
								)}
								<div className="col-span-12">
									<Input {...register('login')}>Login</Input>
								</div>

								<div className="col-span-12">
									<Input {...register('password')} type="password">
										Hasło
									</Input>
								</div>

								<div className="col-span-12 h-16 sm:flex sm:items-center sm:gap-4">
									<Button fullWidth={true}>Zaloguj się</Button>
								</div>
							</form>
						</div>
					</main>
				</div>
			</section>
		);
	}

	return <>{children}</>;
};
