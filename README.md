# Format All Files

I wanted to make some changes accross all files in a project (using Format Document), but VSCode does not provide for this.

So, I took the following sample extension code, and tweaked it to do this for me.

The sequence is:
1. Tweak [extension.js](./extension.js) to process the files of interest
2. `Run Extension`
3. In the new VSCode window, open the project to run this on
4. CMD-Shift-P and run `Format All Documents`

---
---
_Original README.md:_

---

# Hello World Minimal Sample

This is a minimal version of the [Hello World Sample](../helloworld-sample).

It does not use TypeScript and only includes the `vscode` devDependency needed for extension development.

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## Running the Sample

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View.# vs-code-extension-format
