const fs=require('fs')
console.log('hello world')
const http=require('http')
const server=http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/html" });
response.write("<h1>hello world !!!! </h1>");
response.end();
})

server.listen(3000,()=>console.log('server running on port 3000'))

fs.writeFile('welcome.txt','Hello node',(err)=>{
if(err){
    console.log('error')
}
console.log('file created')
})



fs.readFile('welcome.txt',"utf-8",(err,data)=>{
    if(err){
        console.log('error')
    }
    console.log(data.toString())
})


fs.writeFile('password-generator','',(err)=>{
    if(err){
        console.log('error')
    }
    console.log('file password-generator created')
    })

    var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});


console.log(password);
console.log('password created');



fs.writeFile("email-sender","" ,err => {
  if (err) {
   console.log("error");
 }
console.log("file email-sender   created");
});


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
  user: '',
  pass: ''
}
});

var mailOptions = {
from: '',
to: '',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
  console.log(error);
} else {
  console.log('Email sent: ' + info.response);
}
});