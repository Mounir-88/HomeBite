# CI Pipeline Project

![CI Status](https://github.com/mounir-88/CI-Pipeline/actions/workflows/ci.yml/badge.svg)
![Deploy Status](https://github.com/mounir-88/CI-Pipeline/actions/workflows/deploy.yml/badge.svg)

## 🚀 Live Demo
[https://mounir-88.github.io/CI-Pipeline](https://mounir-88.github.io/CI-Pipeline)



## ⚙️ Pipeline Architecture

This project uses **GitHub Actions** for CI/CD with two workflows:

- `ci.yml`:
  - Runs on every push to `main`
  - Performs:
    - ✅ Code Linting (`npm run lint`)
    - ✅ Unit Testing with Vitest (`npm run test`)
    - ✅ Coverage enforcement (min 70%)
    - ✅ Build step with Vite

- `deploy.yml`:
  - Runs on every push to `main`
  - Builds the app (`npm run build`)
  - Deploys to **GitHub Pages** using `peaceiris/actions-gh-pages`
  - Uses `dist/` as the deploy folder

**Deployment URL:**  
➡️ [https://mounir-88.github.io/CI-Pipeline](https://mounir-88.github.io/CI-Pipeline)

## 🛠 Troubleshooting

### Blank Page After Deployment?
- Make sure `vite.config.js` has:  
  ```js
  base: '/CI-Pipeline/'


