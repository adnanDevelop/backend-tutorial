const os = require('os');
console.log(os.arch());                                   //ARCH() mehthod return that which architecture method we are using means 32 bit , 64 bit or 86 bit.
const ram = os.freemem()
const totalRam = os.totalmem();                          // It's return the total space means ram but it's also return byte we need to convert this in gb.
console.log(`${ram / 1024 / 1024 / 1024}`)              // It's return the free space means ram but it's return byte we need to convert this in gb. 
console.log(`${totalRam / 1024 / 1024 / 1024}`)               
console.log(os.hostname());                             //It return the name of laptop
console.log(os.platform());                             
console.log(os.userInfo());                             // It return the user information and home directory
console.log(os.version());                              // It return which window currently we are using
