console.log(process.argv[2]);

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, process.argv[2]);

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log(`Palabra duplicada`);
        var regex = /(\b\w+\b)(?:.|[\n\r])*(\1)/gmi;
        while(regex.exec(data)) {
            console.log(`(${regex.lastIndex - RegExp.lastMatch.length}:${regex.lastIndex - RegExp.$1.length}): "${RegExp.$1}"`);
            regex.lastIndex -= RegExp.lastMatch.length - RegExp.$1.length + 1;
        }
    } else {
        console.log(err);
    }
});