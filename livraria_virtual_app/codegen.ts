
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://livrariavirtual.saleor.cloud/graphql/",
  documents: "graphql/**/*.graphql",
  generates: {
    "saleor/api.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
