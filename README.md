# Smart Utility Toolkit

A Node.js hands-on lab assignment using only Node.js built-in modules.

## Requirements

- Node.js
- Terminal / Command Prompt
- No external npm packages

## Project Structure

```text
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── test.txt
├── README.md
└── modules/
    ├── isEven.js
    └── logger.js
```

## 1. CLI Calculator

```bash
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

## 2. Custom Modules

```bash
node app.js
```

Demonstrates `module.exports` and `require()`.

## 3. HTTP Server

Start:

```bash
node server.js
```

Test in a browser:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/invalid
```

Stop the server with `Ctrl+C`.

## 4. File Manager

```bash
node fileManager.js create
node fileManager.js read
node fileManager.js update
node fileManager.js append
node fileManager.js read
node fileManager.js delete
```

## 5. Random Dice Generator

```bash
node dice.js
node dice.js 5
```

Uses the built-in `crypto.randomInt()` to generate values from 1 to 6.

## Assignment Constraints

This project uses only Node.js built-in modules:

- `process`
- `http`
- `fs`
- `crypto`

No Express, third-party frameworks, external npm packages, or database are used.
