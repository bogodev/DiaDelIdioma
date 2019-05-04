console.log(process.argv[2]);

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, process.argv[2]);

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('Total Caracteres: ' + data.length);
        var matches = data.match(/([a-zA-Z0-9_ÑñáÁéÉíÍóÓúÚ]+)/g);
        //console.log(matches);
        console.log('Total Palabras: ' + matches.length);
    } else {
        console.log(err);
    }
});