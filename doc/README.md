[日本語](https://github.com/Hiryuto/website-game/blob/develop/doc/README-ja.md)

# Handling of this Repository

**Note: Until this repository is officially released, the develop branch is available.**

In this repository, the `develop` branch serves as the main branch, but the branch displayed on the website is the `main` branch.

If you need to work on a hotfix or any other urgent task, please make the changes directly on the `main` branch.

# How to Contribute

To contribute, please follow these steps:

1. Find an issue that you would like to work on from the [Issues](https://github.com/Hiryuto/website-game/issues) page.
2. Create a new branch for your work.
3. Make your changes on the newly created branch.
4. Avoid making direct commits to the `develop` branch.
5. Once you have finished your work, create a pull request (PR).

## Naming Convention for Branches

Please adhere to the following naming convention when creating branches:

### Types

| Content                                 | Name         |
| --------------------------------------- | ------------ |
| Documentation-related tasks             | doc/\*       |
| Implementation of new features           | feature/\*   |
| Fixes for issues in the production code  | hotfix/\*    |
| Fixes for issues in unreleased code      | fix/\*       |

## Pull Requests (PRs)

When creating a pull request, please give it a descriptive title as it will be used for release notes. Additionally, make sure to select the appropriate label that categorizes the content of the PR.

# Automatic Release Drafting (Release Drafter)

This repository has the Release Drafter feature implemented.

When you push changes to the `develop` branch or create a PR, a GitHub Action is triggered ([details can be found here](https://github.com/Hiryuto/website-game/blob/develop/.github/workflows/release-drafter.yml)).

## Categories

Release Drafter automatically categorizes the release notes based on the labels attached to the PR. The following labels are used:

| Label          | Category           |
| -------------- | ------------------ |
| features       | 🚀 Features        |
| enhancement    | 💪 Enhancement     |
| bug            | 🐛 Bug Fixes       |
| chore          | 🧰 Maintenance     |
| refactor       | 🔧 Refactoring     |
| documentation  | 📖 Documentation   |
| dependencies   | ⛓️ Dependency update |
