import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'qfoiux',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
