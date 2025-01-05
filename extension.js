const vscode = require("vscode");
const { Parser } = require("@dbml/core");

function formatLine(line, indentLevel, indentStr) {
  let trimmed = line.trim();
  if (!trimmed) {
    return {
      newLine: "",
      newIndentLevel: indentLevel,
    };
  }

  trimmed = trimmed.replace(/\s*\{/, " {");

  let newIndentLevel = indentLevel;
  if (trimmed.endsWith("}")) {
    newIndentLevel = Math.max(newIndentLevel - 1, 0);
  }
  const newLine = indentStr.repeat(newIndentLevel) + trimmed;
  if (trimmed.endsWith("{")) {
    newIndentLevel += 1;
  }

  return {
    newLine,
    newIndentLevel,
  };
}

function insertNewLinesBetweenBlocks(lines) {
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    result.push(lines[i]);

    if (
      lines[i].trim().endsWith("}") &&
      lines[i + 1] &&
      lines[i + 1].trim() !== ""
    ) {
      result.push("");
    }
  }
  return result;
}

function activate(context) {
  const formatter = {
    provideDocumentFormattingEdits(document) {
      const fullText = document.getText();
      try {
        const parser = new Parser();
        parser.parse(fullText, "dbmlv2");
      } catch (error) {
        vscode.window.showErrorMessage(
          `Failed to parse DBML${error.message ? ": " + error.message : ""}`
        );
        return [];
      }

      let indentLevel = 0;
      const INDENT_STR = "  ";
      const lines = fullText.split("\n");
      const newLines = lines.map((line) => {
        const { newLine, newIndentLevel } = formatLine(
          line,
          indentLevel,
          INDENT_STR
        );
        indentLevel = newIndentLevel;
        return newLine;
      });

      const formattedLines = insertNewLinesBetweenBlocks(newLines);
      const formatted = formattedLines.join("\n");

      const firstLine = document.lineAt(0);
      const lastLine = document.lineAt(document.lineCount - 1);
      const entireRange = new vscode.Range(
        firstLine.range.start,
        lastLine.range.end
      );
      return [vscode.TextEdit.replace(entireRange, formatted)];
    },
  };

  const disposable = vscode.languages.registerDocumentFormattingEditProvider(
    { language: "dbml" },
    formatter
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
