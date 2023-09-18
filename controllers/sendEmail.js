const nodemailer = require("nodemailer");


const sendEmail = async (req,res)=>{
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: process.env.ETHEREAL_HOST,
        port: process.env.ETHEREAL_PORT,
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASS,
        }
    });


    res.send('send email func')
}


module.exports = sendEmail