# GitHub Pages Deployment

GitHub Pages is a good fit for the meeting demo because the current dashboard is a static MVP view.

Important limitation:

- GitHub Pages can show the portal UI from any computer.
- GitHub Pages cannot run server-side Clerk auth, Convex mutations, or backend workflows.
- For tomorrow, this is fine if the goal is to show the portal design and dashboard direction.

## Recommended Repo Name

Use this repo name if possible:

```text
bridge-agent-network-portal
```

Your GitHub Pages URL will look like:

```text
https://YOUR_ORG_OR_USER.github.io/bridge-agent-network-portal/
```

## Push To GitHub

From PowerShell:

```powershell
cd "C:\Projects\bridge-agent-network-portal"
git add .
git commit -m "initial Bridge Agent Network portal MVP"
git branch -M main
```

If using GitHub CLI:

```powershell
gh auth login
gh repo create YOUR_ORG_NAME/bridge-agent-network-portal --private --source=. --remote=origin --push
```

If creating the repo manually in GitHub:

```powershell
git remote add origin https://github.com/YOUR_ORG_NAME/bridge-agent-network-portal.git
git push -u origin main
```

## Enable Pages

In GitHub:

```text
Repo > Settings > Pages > Build and deployment
```

Set source to:

```text
GitHub Actions
```

The workflow in `.github/workflows/pages.yml` will publish the static site every time `main` is pushed.

