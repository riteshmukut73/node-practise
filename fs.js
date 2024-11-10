const fs = require('fs')
const http = require("http")

http.createserver((req, res) => {
    console.log('server created');
    //file read
    // fs.readfile('index.html', (err, data) => {
    //req.writehead(200, { 'content-type': 'text/html' })
    //res.write(data)
    //return res.end()
    //})

    //append file -add
    //fs.appendfile('index.html', '<h1>this is append file data </h1>', (err, data) => {
    //if (err) throw err
    //console.log("file updated");
    //return res.end()

    //})

    //delete file
    // fs.unlink('index.html', (err) => {
    //if (err) throw
    //console.log("file deleted");
    //return res.end()
    //})

    // fs.writefile('mynewfile.txt', "Good morning......", (err) => {
    //if (err) throw err
    //console.log("File saved");
    //})

    //rename file
    // fs.rename('mynewfile.txt', 'mynewfile.txt'), (err) => {
    //if (err) throw err
    //console.log("File saved");
    //})

    //file read and write
    // console.log("writing into file");


    //    fs.writefile('input.txt', 'hello good morning this is write file', (err) => {
    //if (err) {
    //return console.error(err);
    //}
    //console.log("file written sucessfully");
    //console.log("lets read file");
    //fs.readfile('input.txt', (err, data) => {
    //if (err) {
    //return console.error / (err);
    //}
    //console.log(data.tostring());
    //})
    //})
    //   let filexist = fs.existSync('input.txt')
    // console.log("file is available:", fileexist);

    //fileexist = fs.existSync('input.txt')
    //console.log("file is available:", fileexist)


    //  function getcurrentfilename() {
    //  console.log("current filename are:");
    //fs.readdirsync(__dirname).forEach(file => {
    //console.log(file);
    //})
    //console.log("\n")
    //}
    //getcurrentfilenames()


    //fs.open('server.js', "r", (err) => {
    //if (err) throw err
    //console.log("file open successfully");
    //return res.end()

    //})
    //  fs.open('example.txt', 'a++', (err, file) => {
    //if (err) {
    //console.log("error while opening file", err);
    //return;
    //}
    //console.log("file is open for append mode");
    //fs.appendfile(file, "hello", (err) => {
    //console.log("append in file");

    //}) fs.close(file, (err) => {

    //})
    //})


    fs.mkdir(targetpath, { recursive: true }, (err) => {
        if (err) {
            return console.error(err);

        }
        console.log("directory created")
    })
}).listen(4000)