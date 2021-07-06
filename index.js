const core = require('@actions/core');

try {
    const contents = core.getInput('contents');
    const filePath = core.getInput('path');

    const fs = require('fs')
    fs.writeFile(filePath, contents, (error) => {
        if (error) throw error;
    })

} catch (error) {
    core.setFailed(error.message);
}