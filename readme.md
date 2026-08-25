hello
work

## Development setup

This repo uses [husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) to run ESLint and Prettier on staged files before each commit, plus [gitleaks](https://github.com/gitleaks/gitleaks) for secret scanning. Setup is a one-time step after `npm install`:

```bash
npm install   # runs the `prepare` script, which installs the husky hook
```

The secret-scan step needs `gitleaks` installed separately (it's not an npm package):

```bash
brew install gitleaks   # see https://github.com/gitleaks/gitleaks#installing for other platforms
```

If `gitleaks` isn't installed, the pre-commit hook skips the secret scan with a warning rather than blocking the commit. Available scripts: `npm run lint`, `npm run format`. Lint rules live in `eslint.config.js`; the staged-file hook config is the `lint-staged` block in `package.json`; the secret-scan allowlist is `.gitleaks.toml`. See ADR-041 (in `magnet-app-front`) for the rollout plan.
