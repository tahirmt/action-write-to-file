const core = require('@actions/core');

try {
    const filePath = core.getInput('path');

    const fs = require('fs')
    fs.unlink(filePath, (error) => {
        if (error) throw error;
    })
} catch (error) {
    core.setFailed(error.message);
}