const express = require('express');
const nodemailer = require("nodemailer");
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to the home page')
})

app.get('/sendemail', async (req, res) => {
    const transporter = await nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
            user: 'giovanny.pollich@ethereal.email',
            pass: 'qkd1Jevs1gKEsXzQ3j'
        },
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info)
})

app.listen(4000)
