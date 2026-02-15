import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'http://localhost:4200/graphql',
	documents: ['src/graphql/**/*.ts', 'src/graphql/**/*.tsx'],
	generates: {
		'src/graphql/types/': {
			preset: 'client',
			plugins: [],
			config: {
				useTypeImports: true,
				strictScalars: true,
				enumsAsTypes: true,
				scalars: {
					DateTime: 'string'
				}
			}
		}
	},
	ignoreNoDocuments: true
}

export default config
