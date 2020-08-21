const fs = require('fs').promises;
const { existsSync } = require('fs');
const path = require('path');
const JSON_DATA_PATH = path.resolve(__dirname, './data');
const writeJsonFile = async (data, jsonFileName) => {
    fs.writeFile(
        `${JSON_DATA_PATH}/${jsonFileName}`,
        JSON.stringify(data, null, 2)
    );
};
const readJsonFile = async jsonFileName =>
    fs
        .readFile(`${JSON_DATA_PATH}/${jsonFileName}`)
        .then(res => JSON.parse(res.toString()));
const transferData = async () => {
    const transferJSONPath = path.resolve(__dirname, '../data');
    const originalJSONPath = path.resolve(__dirname, './data');
    if (existsSync(transferJSONPath + '/articles.json')) {
        console.log('The path exists.');
    } else {
        await fs.copyFile(
            originalJSONPath + '/articles.json',
            transferJSONPath + '/articles.json'
        );
        await fs.copyFile(
            originalJSONPath + '/authors.json',
            transferJSONPath + '/authors.json'
        );
        await fs.copyFile(
            originalJSONPath + '/comments.json',
            transferJSONPath + '/comments.json'
        );
        await fs.copyFile(
            originalJSONPath + '/tags.json',
            transferJSONPath + '/tags.json'
        );
    }
};
module.exports = {
    readJsonFile,
    writeJsonFile,
    transferData
};