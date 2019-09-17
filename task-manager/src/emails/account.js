const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);
const sendWelcomeEmail =(email,name) =>{
    sgMail.send({
        to:email,
        from:'goldkeeper35@gmail.com',
        subject:'Thanks for joining my application!',
        text:`Welcome to the app ${name}, let me know get along with the app`
    });

};
const sendDeleteEmail =(email,name) =>{
    sgMail.send({
        to:email,
        from:'goldkeeper35@gmail.com',
        subject:'Thanks for using my app!',
        text:`Hi ${name}, thanks you for using my app, please let me know why you deleting your profile`,
        html:'   <p><b>Why you deleting?</b></p>\n' +
            '    <p><input name="dzen" type="radio" value="nedzen">Lesha</p>\n' +
            '    <p><input name="dzen" type="radio" value="dzen"> Ira</p>\n' +
            '    <p><input name="dzen" type="radio" value="pdzen" checked> Lыgan </p>\n'

    });

};


module.exports  ={
    sendWelcomeEmail,
    sendDeleteEmail
};
