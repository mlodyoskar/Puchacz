import { ApolloClient, InMemoryCache } from '@apollo/client';
import { invariant } from '@apollo/client/utilities/globals';

const NEXT_PUBLIC_HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL;

export const generateInvariantMessage = (envName: string) =>
	`'missing ${envName} env'`;

invariant(
	NEXT_PUBLIC_HYGRAPH_ENDPOINT,
	generateInvariantMessage('NEXT_PUBLIC_HYGRAPH_ENDPOINT')
);

export const apolloClient = new ApolloClient({
	ssrMode: true,
	uri: NEXT_PUBLIC_HYGRAPH_ENDPOINT,
	cache: new InMemoryCache(),
});
``;
