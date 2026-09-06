// Compile the pure TypeScript test targets with the installed compiler, then use
// Node's test runner. This also works on restricted Windows accounts where tsx's
// operating-system user lookup is unavailable.
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const { spawnSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const out = path.join(root, "node_modules", ".cache", "math-library-tests");
const tests = fs
  .readdirSync(path.join(root, "tests"))
  .filter((f) => f.endsWith(".test.ts"));
const files = [
  "lib/domain.ts",
  "lib/session.ts",
  "lib/analysis.ts",
  ...tests.map((f) => "tests/" + f),
];
for (const file of files) {
  if (!fs.existsSync(path.join(root, file))) continue;
  const result = ts.transpileModule(
    fs.readFileSync(path.join(root, file), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    },
  );
  const dest = path.join(out, file.replace(/\.ts$/, ".js"));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, result.outputText);
}
const result = spawnSync(
  process.execPath,
  [
    "--test",
    ...tests.map((f) => path.join(out, "tests", f.replace(/\.ts$/, ".js"))),
  ],
  { stdio: "inherit" },
);
process.exitCode = result.status ?? 1;

