const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"StudyNotion" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        return info; // old code expects this to exist
    } catch (error) {
        console.log("MailSender Error:", error);
        return error; // Important! Do NOT remove
    }
};

module.exports = mailSender;
