import {
	authorizedApolloClient,
	generateInvariantMessage,
} from './../../../graphql/authorizedClient';
import { invariant } from '@apollo/client/utilities/globals';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import type {
	GetAccountByEmailQuery,
	GetAccountByEmailQueryVariables,
} from 'generated/graphql';
import { GetAccountByEmailDocument } from 'generated/graphql';
import { compare } from 'bcrypt';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

invariant(GOOGLE_CLIENT_ID, generateInvariantMessage('GOOGLE_CLIENT_ID'));
invariant(
	GOOGLE_CLIENT_SECRET,
	generateInvariantMessage('GOOGLE_CLIENT_SECRET')
);

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Logowanie z hasłem',
			credentials: {
				username: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@example.com',
				},
				password: { label: 'Hasło', type: 'password' },
			},

			async authorize(credentials, req) {
				console.log('Username', credentials?.username);
				console.log('Password', credentials?.password);

				if (!credentials) {
					return null;
				}

				const user = await authorizedApolloClient.query<
					GetAccountByEmailQuery,
					GetAccountByEmailQueryVariables
				>({
					query: GetAccountByEmailDocument,
					variables: { email: credentials.username },
				});

				if (!user.data.account) {
					return null;
				}

				// const arePasswordsEqual = await compare(
				// 	credentials.password,
				// 	user.data.account.password
				// );

				// We dont hash passwords as for now
				const arePasswordsEqual =
					credentials.password === user.data.account.password;

				if (!arePasswordsEqual) {
					return null;
				}

				return {
					id: user.data.account.id,
					email: user.data.account.email,
				};
			},
		}),
		// GoogleProvider({
		// 	clientId: GOOGLE_CLIENT_ID,
		// 	clientSecret: GOOGLE_CLIENT_SECRET,
		// }),
	],
};
export default NextAuth(authOptions);
