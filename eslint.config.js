import browser from "@inglorious/eslint-config/browser"
import node from "@inglorious/eslint-config/node"
import globals from "globals"

/**
 * `src/` is browser code and gets the browser config. The verification scripts
 * at the repo root are Node CLIs: they run under Playwright, print a report and
 * legitimately use `process` and `console.log`, none of which the browser config
 * allows.
 */
export default [
  ...browser,

  {
    name: "site",
    /*
     * `no-magic-numbers` fires on every layout constant, stagger index and map
     * coordinate in the project, which makes it noise rather than signal. The
     * ones that do matter — durations, viewports, tile zoom — are named.
     */
    files: ["src/**"],
    rules: {
      "no-magic-numbers": "off",
    },
  },

  {
    name: "build config",
    files: ["src/site.config.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  {
    name: "verification scripts",
    files: ["*.mjs"],
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      ...Object.assign({}, ...node.map((config) => config.rules ?? {})),
      // These scripts exist to print their findings.
      "no-console": "off",
      "no-magic-numbers": "off",
    },
  },
]
