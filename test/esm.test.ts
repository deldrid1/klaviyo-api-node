import { readdirSync, readFileSync } from "fs";
import path from "path";

describe("ESM-compatible sources", () => {
  test("API modules use static imports instead of runtime require", () => {
    const apiDirectory = path.resolve(__dirname, "../api");
    const apiModules = readdirSync(apiDirectory).filter((file) =>
      file.endsWith(".ts")
    );

    for (const apiModule of apiModules) {
      const source = readFileSync(path.join(apiDirectory, apiModule), "utf8");
      expect(source).not.toMatch(/\brequire\s*\(/);
    }
  });
});
