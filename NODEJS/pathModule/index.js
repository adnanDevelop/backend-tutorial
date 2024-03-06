const path = require('path');
console.log(path.dirname('D:/PersonalProject/NODEJS/pathModule/index.js'));   // dirname method returns in which folder we are currently
console.log(path.basename('D:/PersonalProject/NODEJS/pathModule/index.js'));  // basename return the file in which we are working
console.log(path.extname('D:/PersonalProject/NODEJS/pathModule/index.js'));   // extname return that what's the type of file. like (.js , .jsx , .html , .tsx)
console.log(path.parse('D:/PersonalProject/NODEJS/pathModule/index.js'));     // parse return an object which contains root , dir , base , ext , and file name keysf