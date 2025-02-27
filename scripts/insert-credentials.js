const fs = require('fs');
const path = require('path');

function replaceValuesInFile(textFilePath, jsonFilePath, outputFolderPath) {
    // Check if the JSON file exists
    if (!fs.existsSync(jsonFilePath)) {
        console.log(`JSON file '${jsonFilePath}' does not exist. Writing input file as is.`);
        
        // Ensure the output folder exists
        if (!fs.existsSync(outputFolderPath)) {
            fs.mkdirSync(outputFolderPath, { recursive: true });
        }
        
        // Generate the output file path
        const outputFilePath = path.join(outputFolderPath, path.basename(textFilePath));
        
        // Write the original content to the output file
        fs.copyFileSync(textFilePath, outputFilePath);
        return;
    }

    // Read the JSON file
    const replacementValues = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    // Read the text file
    let content = fs.readFileSync(textFilePath, 'utf8');

    const valuesDict = {
        "clientId": "Client Id from https://dashboard.aspose.cloud/applications",
        "clientSecret": "Client Secret from https://dashboard.aspose.cloud/applications"
    };

    // Replace the old values with the new values
    for (const [newValueKey, oldValue] of Object.entries(valuesDict)) {
        content = content.replace(new RegExp(oldValue, 'g'), replacementValues[newValueKey]);
    }

    // Ensure the output folder exists
    if (!fs.existsSync(outputFolderPath)) {
        fs.mkdirSync(outputFolderPath, { recursive: true });
    }

    // Generate the output file path
    const outputFilePath = path.join(outputFolderPath, path.basename(textFilePath));

    // Write the updated content to the output file
    fs.writeFileSync(outputFilePath, content, 'utf8');
}

if (process.argv.length !== 5) {
    console.log("Usage: node replaceValues.js <text_file_path> <json_file_path> <output_folder_path>");
} else {
    const textFilePath = process.argv[2];
    const jsonFilePath = process.argv[3];
    const outputFolderPath = process.argv[4];
    replaceValuesInFile(textFilePath, jsonFilePath, outputFolderPath);
}
