import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
    state: true
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  output: {
    assetPrefix: "https://cwy-ai-web.oss-cn-beijing.aliyuncs.com/dist/"
  }
});
