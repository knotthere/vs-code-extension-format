// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vs-code-extension-format" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.formatAllDocuments",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Formating All Documents!");

      (async function () {
        // let files = await vscode.workspace.findFiles('**/*.{svelte}');
        // https://code.visualstudio.com/api/references/vscode-api#GlobPattern
        let files = await vscode.workspace.findFiles("**/*.{js,json}");
        // let file = files[0];
        // Sync:
        for (let index = 0; index < files.length; index++) {
          let file = files[index];
          // files.forEach(async (file) => {
          let response;

          if (!file.path.includes("node_modules") && !file.path.includes('public/preview')) {
            let uri = vscode.Uri.file(file.path);
            console.log(file.path);
            // let response = await vscode.commands.executeCommand(
            // 	'workbench.action.files.openFileFolder',
            // 	uri
            // );

            // response = await vscode.workspace.openTextDocument(uri)
            // console.log(response);
            // response = await vscode.window.showTextDocument(response);

            // let response = await vscode.commands.executeCommand('vscode.openFolder', uri);
            // console.log(response);

            // vscode-extension-samples/helper.ts at e1ecdaec8974b938e7a92589faa233e1691d251f · microsoft/vscode-extension-samples · GitHub
            // Another option...
            let doc = await vscode.workspace.openTextDocument(uri); // docUri
            let editor = await vscode.window.showTextDocument(doc);
            // await sleep(2000); // Wait for server activation

            // Error: Illegal argument: resource
            // response = await vscode.commands.executeCommand(
            // 	'vscode.executeFormatDocumentProvider',
            // 	uri,
            // 	{}
            // );

            // Error: Illegal argument: resource
            // response = await vscode.commands.executeCommand(
            // 	'vscode.executeFormatDocumentProvider',
            // 	uri
            // );

            // // Error: Invalid argument 'uri' when running 'vscode.executeFormatDocumentProvider', receieved: undefined
            // response = await vscode.commands.executeCommand(
            // 	'vscode.executeFormatDocumentProvider',
            // 	uri
            // );

            // console.log(response);

            response = await vscode.commands.executeCommand(
              "editor.action.formatDocument"
            );
            // console.log(response);

            response = await vscode.commands.executeCommand(
              "workbench.action.files.save"
            );
            // console.log(response);

            response = await vscode.commands.executeCommand(
              "workbench.action.closeActiveEditor"
            );

            // End up closint VSCode
            // response = await vscode.commands.executeCommand('workbench.action.closeWindow', uri);
            // console.log(response);
            // break;
          } else {
              console.log(`Skipping: ${file.path}`)
          }
        }
      })();
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
