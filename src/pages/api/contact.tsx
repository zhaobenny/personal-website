import type { NextApiResponse } from 'next'
import xss from 'xss'

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function contact(req: any, res: NextApiResponse) {
    const data: any = JSON.parse(req.body.data)
    const name: String = data.name;
    const message: String = data.message;
    const messageEmail: String = data.email;
    const captcha: String = data.captchaCode;


    if (!captcha || !name || name === "" || !message || message === "" || !messageEmail || messageEmail === "") {
        return res.status(422).send("Error in request content.");
    }

    try {
        const response = await fetch(
            `https://hcaptcha.com/siteverify`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                },
                body: `response=${captcha}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
                method: "POST",
            }
        );
        const captchaValidation = await response.json();

        if (captchaValidation.success) {
            let emailhtml: string = (`
                    <h1>Incoming message from ${name}!</h1><br/>
                    Message: ${message}<br/><br/>
                    From ${messageEmail}<br/>
            `);

            const email = {
                to: 'benny_zhao@sfu.ca',
                from: 'contactform@bubbletea.party',
                subject: `${name} contacted you from your personal website!`,
                html: xss(emailhtml),
            };
            try {
                await mail.send(email);
                return res.status(200).send("Success!");
            } catch (error) {
                console.error(error);
                return res.status(500).send("Error senting email.");
            }
        } else {
            return res.status(422).send("Error validing captcha.");
        }
    } catch (error) {
        console.error(error);
        return res.status(422).send("Error unspecified.");
    }
}