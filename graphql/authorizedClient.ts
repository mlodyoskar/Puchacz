import { ApolloClient, InMemoryCache } from '@apollo/client';
import { invariant } from '@apollo/client/utilities/globals';

const NEXT_PUBLIC_HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_URL;
const HYGRAPH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

export const generateInvariantMessage = (envName: string) =>
	`'missing ${envName} env'`;

invariant(
	NEXT_PUBLIC_HYGRAPH_ENDPOINT,
	generateInvariantMessage('NEXT_PUBLIC_HYGRAPH_ENDPOINT')
);
invariant(HYGRAPH_TOKEN, generateInvariantMessage('HYGRAPH_TOKEN'));

export const authorizedApolloClient = new ApolloClient({
	uri: NEXT_PUBLIC_HYGRAPH_ENDPOINT,
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer ${HYGRAPH_TOKEN}`,
	},
});
``;
