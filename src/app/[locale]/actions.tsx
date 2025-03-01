"use server";

import EmailTemplate from "./components/email-template";
import { Resend } from "resend";
import { ContactForm } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendEmail = async ({
  email,
  name,
  lastName,
  subject,
  message,
}: ContactForm) => {
  await resend.emails.send({
    from: "delivered@resend.dev",
    to: email,
    subject,

    react: (
      <EmailTemplate
        subject={subject}
        sender={name + " " + lastName}
        message={message}
        email={email}
      />
    ),
  });
  return {
    sent: true,
  };
};
