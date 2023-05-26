[English](https://github.com/Hiryuto/website-game/blob/develop/doc/README.md)

# このリポジトリの扱いについて

このリポジトリは develop がメインブランチとなっていますが、
サイトで公開されているブランチは main ブランチです。

hotfix 等をする場合は main ブランチに行って下さい

# 参加の仕方

[Issues](https://github.com/Hiryuto/website-game/issues)から取り組めそうな Issues を見つけて**ブランチを作って**参加して下さい

**develop に直接 commit はしないでください**

## ブランチ名の命名方法

以下の規則は守って作成して下さい

### 種類

| 内容                             | 名前       |
| -------------------------------- | ---------- |
| ドキュメント作成等               | doc/\*     |
| 新機能等実装                     | feature/\* |
| 公開中の不具合修正               | hotfix/\*  |
| 未公開 or 緊急性のない不具合修正 | fix/\*     |

## PR について

PR のタイトルは自動でリリースに記載されるため**わかりやすい名前**にすることを心がけて下さい

また、PR を作成する際には必ずどのジャンルの内容かをラベルから選び必ず選択して下さい

# 自動リリース記載機能について(release drafter)

このリポジトリは release drafter を実装しています

develop に Push した際と PR を作成した際に Github Action が走ります ([詳しくはこちら](https://github.com/Hiryuto/website-game/blob/develop/.github/workflows/release-drafter.yml))

## カテゴリーについて

release drafter では PR についているラベルに応じて自動でカテゴリー分けされます
| ラベル | カテゴリー |
| ---- | ---- |
| features | 🚀 Features |
| enhancement | 💪 Enhancement |
| bug | 🐛 Bug Fixes |
| chore | 🧰 Maintenance |
| refactor | 🔧 Refactoring |
| documentation | 📖 Documentation |
| dependencies | ⛓️ Dependency update|