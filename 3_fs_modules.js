const { log } = require('console');
const fs = require('fs');

fs.mkdirSync('new-Folder/folder_1',{recursive: true});

fs.writeFileSync('./new-Folder/file1.txt',"This is new File");

fs.appendFileSync('./new-Folder/file1.txt',"\n"+Date.now().toLocaleString())
fs.appendFileSync('./new-Folder/file1.txt',"\n"+new Date().getDate().toLocaleString())

const data = fs.readFileSync('./new-Folder/file1.txt','utf8');
console.log(data);

fs.cpSync('./new-Folder/file1.txt','copyfile.txt');
fs.cpSync('./new-Folder/file1.txt','copyfile2.txt');

const stats = fs.statSync('./new-Folder/file1.txt');
// const stats = fs.statSync('./new-Folder/file1.txt').size;
console.log(stats);

fs.unlink('./copyfile2.txt',(err) =>{
    if(err) console.error(err);
    else console.log('file Deleted');  
});

fs.rmSync('./new-Folder/folder_1',{recursive: true})