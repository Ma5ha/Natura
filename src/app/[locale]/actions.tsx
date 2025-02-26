"use server";
import EmailTemplate from "./components/email-template";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY as string);
export const sendEmail = async () => {
  console.log("sending", process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from: "delivered@resend.dev",
    to: "blagmash@gmail.com",
    subject: "test",

    react: (
      <EmailTemplate
        subject={"test"}
        sender={"Mladen"}
        message={"test"}
        email="blagmash@gmail.com"
      />
    ),
  });

  console.log(result);
};
