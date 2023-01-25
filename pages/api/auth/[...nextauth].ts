import { authorizedApolloClient } from './../../../graphql/authorizedClient';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type {
	GetAccountByEmailQuery,
	GetAccountByEmailQueryVariables,
} from 'generated/graphql';
import { GetAccountByEmailDocument } from 'generated/graphql';

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

				console.log('arePasswordsEqual', arePasswordsEqual);

				if (!arePasswordsEqual) {
					return null;
				}

				return {
					id: user.data.account.id,
					email: user.data.account.email,
				};
			},
		}),
	],
};
export default NextAuth(authOptions);
