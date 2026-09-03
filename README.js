const fs = require('fs');
const path = require('path');

// Change this to the folder where you store your solutions
const solutionsDir = path.join(__dirname); 

function generateTable() {
    let markdown = `# 🧩 LeetCode Solutions in JavaScript\n\n`;
    markdown += `A collection of LeetCode problem solutions implemented in JavaScript.\n\n`;
    markdown += `| Problem | Solution File |\n`;
    markdown += `|---|---|\n`;

    const files = fs.readdirSync(solutionsDir);
    files.forEach(file => {
        if (file.endsWith('.js') && file !== 'generate-readme.js') {
            const formattedName = file.replace('.js', '').replace(/-/g, ' ');
            markdown += `| ${formattedName} | [JavaScript](./${file}) |\n`;
        }
    });

    fs.writeFileSync('README.md', markdown);
    console.log('README.md updated successfully!');
}

generateTable();
