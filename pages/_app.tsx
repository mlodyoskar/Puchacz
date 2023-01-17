import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Open_Sans } from '@next/font/google';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'graphql/client';
import { Sidebar } from 'components/molecules/Sidebar/Sidebar';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={apolloClient}>
			<main className={openSans.className}>
				<Sidebar>
					<Component {...pageProps} />
				</Sidebar>
			</main>
		</ApolloProvider>
	);
}
