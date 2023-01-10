import type { CodegenConfig } from '@graphql-codegen/cli';

const HYGRAPH_API_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;

// if (!HYGRAPH_API_URL) {
// 	throw new Error('HYGRAPH_API_URL was not provided');
// }

const config: CodegenConfig = {
	schema:
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbjk869o2cnq01t66w7yabqe/master',
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
