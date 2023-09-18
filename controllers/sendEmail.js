const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    // const transporter = nodemailer.createTransport({
    //     host: process.env.ETHEREAL_HOST,
    //     port: process.env.ETHEREAL_PORT,
    //     auth: {
    //         user: process.env.ETHEREAL_USER,
    //         pass: process.env.ETHEREAL_PASS,
    //     }
    // });

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure:false,
        tls:{
            rejectUnauthorized:false
          },
        auth: {
            user: 'leta94@ethereal.email',
            pass: 'kVsXRdK869H3vFKnF6'
        }
    });


    let info = await transporter.sendMail({
        from: '"Coding Addicts addict" <musatir@gmail.com>',
        to: 'bar@example.com, musatir@yahoo.com',
        subject: 'Merhaba',
        html: '<h2>Hello World.</h2>',
      });
    
      res.json(info);
}


const sendEmail = async (req,res)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'musatir@yahoo.com', // Change to your recipient
        from: 'musatir@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      
    const info = await sgMail.send(msg)

    res.json(info)
}
module.exports = sendEmail