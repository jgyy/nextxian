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
  },
});
