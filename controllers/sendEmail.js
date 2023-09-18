const nodemailer = require("nodemailer");


const sendEmail = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: process.env.ETHEREAL_HOST,
        port: process.env.ETHEREAL_PORT,
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASS,
        }
    });

    let info = await transporter.sendMail({
        from:'"Addicted to coding addict"<addictedtocodingaddict@gmail.com>',
        to:"bar@example.com, musatir@yahoo.com",
        subject:"Hello dear me!",
        // text:"Sending emails with node.js", we can send either text or html
        html:"<h2>Sending emails with node.js</h2>"

    })
    res.json(info)
}


module.exports = sendEmail