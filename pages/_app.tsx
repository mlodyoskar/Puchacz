import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Open_Sans } from '@next/font/google';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'graphql/client';
import { Sidebar } from 'components/molecules/Sidebar/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { ProtectedWrapper } from 'components/templates/ProtectedWrapper';

const openSans = Open_Sans({ subsets: ['latin'] });

export const queryClient = new QueryClient();

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ProtectedWrapper>
				<QueryClientProvider client={queryClient}>
					<ApolloProvider client={apolloClient}>
						<main className={openSans.className}>
							<Sidebar>
								<Component {...pageProps} />
							</Sidebar>
						</main>
					</ApolloProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ProtectedWrapper>
		</SessionProvider>
	);
}
