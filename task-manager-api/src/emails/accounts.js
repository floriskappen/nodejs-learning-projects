const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'floris@justifiedarts.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'floris@justifiedarts.com',
        subject: "I'm sad to see you go!",
        text: `I hope you enjoyed our service, ${name}. Please let me know if there's anything we can improve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}