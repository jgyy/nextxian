import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  test: {
    include: ["tests/**/*.test.ts"],
    // The suite walks every scene and every Elder scenario of a ten-thousand-scene story, so a few tests need more than the default five seconds on a slow runner.
    testTimeout: 60000,
    // Every worker loads the whole story. On a four-core runner three of them starve the main process of the CPU it needs to hear their progress, and the run ends with "Timeout calling onTaskUpdate" after every test has passed.
    maxWorkers: 2,
  },
});
