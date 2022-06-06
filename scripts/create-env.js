const fs = require('fs');

fs.writeFileSync('../.env', `API=${process.env.API}\N`);