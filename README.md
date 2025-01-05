# DBML Formatter – The Best and Only DBML Formatter

> **Format** your `.dbml` files with **one click** inside VS Code!  
> Automatically **parse** and **format** your Database Markup Language (DBML) files for **clean**, **consistent**, and **readable** schemas.

[![Visual Studio Marketplace Version](https://img.shields.io/badge/VS%20Code-Extension-blue.svg?style=flat)](https://marketplace.visualstudio.com/)  
[![GitHub stars](https://img.shields.io/github/stars/idoaflalo/dbml-formatter.svg?style=social&label=Star)](https://github.com/idoaflalo/dbml-formatter/stargazers)

---

## Table of Contents
- [DBML Formatter – The Best and Only DBML Formatter](#dbml-formatter--the-best-and-only-dbml-formatter)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Sample](#sample)
  - [Contributing](#contributing)
  - [License](#license)

---

## Features
- **Single-Command Formatting:** Use the standard VS Code “Format Document” command to instantly reformat your DBML file.
- **DBML Validation:** Leverages [\@dbml/core](https://github.com/holistics/dbml) internally to parse your file, ensuring it’s syntactically correct.
- **No Reordering of References:** Keeps your references exactly where you placed them, only adjusting spaces and indentation (according to the code you’ve integrated).
- **Indentation & Spacing:** Removes excessive whitespace and enforces consistent spacing around tokens.
- **Smooth Integration:** Automatically activates when you open a `.dbml` file in Visual Studio Code.

---

## Installation
1. **Search** for “**DBML Formatter**” in the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/).
2. **Click** “Install”.
3. **Reload** your editor if prompted.

Or, install via CLI:
```bash
code --install-extension dbml-formatter.vsix
```

---

## Usage
1. **Open** any `.dbml` file in VS Code.
2. **Press** `Shift + Alt + F` (Windows) or `Shift + Option + F` (macOS) or `Ctrl + Shift + I` (Linux) to format the document.
3. **Save** your changes. Enjoy a clean DBML file!

You can also right-click in the editor and select:
```
Format Document
```
Or search the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) for:
```
Format Document
```

---

## Configuration
- **Error Handling:** If the parser encounters invalid DBML, the formatter will notify you in VS Code with an error message.

---

## Sample
Below is a quick before-and-after snippet:

**Before:**
```dbml
Table users {
  _id          ObjectId      [primary key]
  firstName    string      [not null]
  lastName    string      [not null]
  ...
}
```

**After:**
```dbml
Table users {
  _id ObjectId [primary key]
  firstName string [not null]
  lastName string [not null]
  ...
}
```

---

## Contributing
1. **Fork** this repo.
2. **Clone** your fork locally.
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Make your changes** (bug fixes, features, docs).
5. **Commit** and **push** to your fork.
6. **Open a Pull Request** describing your changes.

We welcome PRs for new features, bug fixes, or improvements in formatting logic!

---

## License
This extension is provided under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

Happy Formatting!  
**DBML Formatter** – Because your DBML deserves the **best**.
