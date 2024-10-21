import { RuleConfigSeverity } from "@commitlint/types";

/**
 * @type {import("@commitlint/types").UserConfig}
 */
const config = {
  rules: {
    // Use the body to explain what and why vs. how
    "body-case": [RuleConfigSeverity.Error, "always", ["sentence-case"]],
    // Separate subject from body with a blank line
    "body-leading-blank": [RuleConfigSeverity.Error, "always"],
    // Wrap the body at 72 characters
    "body-max-line-length": [RuleConfigSeverity.Warning, "always", 72],
    // Capitalize the subject line
    "header-case": [RuleConfigSeverity.Error, "always", ["sentence-case"]],
    // Do not end the subject line with a period
    "header-full-stop": [RuleConfigSeverity.Error, "never", "."],
    // Limit the subject line to 50 characters
    "header-max-length": [RuleConfigSeverity.Error, "always", 50],
    "header-trim": [RuleConfigSeverity.Error, "always"],
  },
};

export default config;
