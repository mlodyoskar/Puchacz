import { invariant } from '@apollo/client/utilities/globals';
import type { CodegenConfig } from '@graphql-codegen/cli';

const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;

invariant(HYGRAPH_URL);

const config: CodegenConfig = {
	schema: HYGRAPH_URL,
	documents: ['graphql/*.graphql'],
	ignoreNoDocuments: true, // for better experience with the watcher
	generates: {
		'./generated/graphql.tsx': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
		},
	},
	overwrite: true,
};

export default config;
