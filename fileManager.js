// File Manager using Node.js fs module

const fs = require("fs");

const fileName = "test.txt";

function createFile(content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log("Error creating file:", err.message);
            return;
        }
        console.log("File created successfully.");
    });
}

function readFile() {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }
        console.log("File contents:");
        console.log(data);
    });
}

function updateFile(content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.log("Error updating file:", err.message);
            return;
        }
        console.log("File updated successfully.");
    });
}

function appendToFile(content) {
    fs.appendFile(fileName, `\n${content}`, (err) => {
        if (err) {
            console.log("Error appending to file:", err.message);
            return;
        }
        console.log("Content appended successfully.");
    });
}

function deleteFile() {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log("Error deleting file:", err.message);
            return;
        }
        console.log("File deleted successfully.");
    });
}

const operation = process.argv[2];

switch (operation) {
    case "create":
        createFile("Hello Node.js");
        break;

    case "read":
        readFile();
        break;

    case "update":
        updateFile("File updated using fs module.");
        break;

    case "append":
        appendToFile("New content appended.");
        break;

    case "delete":
        deleteFile();
        break;

    default:
        console.log("Usage:");
        console.log("node fileManager.js create");
        console.log("node fileManager.js read");
        console.log("node fileManager.js update");
        console.log("node fileManager.js append");
        console.log("node fileManager.js delete");
}
