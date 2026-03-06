const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function replaceInFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (fileContent.includes('Advanced Finishing')) {
        const updatedContent = fileContent.replace(/Advanced Finishing/g, 'Quince Canada');
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated ${filePath}`);
    }
    if (fileContent.includes('advancedfinishing.com')) {
        const updatedContent = fileContent.replace(/advancedfinishing\.com/g, 'quincecanada.com');
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated email domain in ${filePath}`);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            traverseDirectory(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
            replaceInFile(filePath);
        }
    });
}

traverseDirectory(directoryPath);
console.log('Replacement complete.');
