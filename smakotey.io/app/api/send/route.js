// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
	const { body } = await req.json();
	const { email, subject, message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["smakotey@gmail.com"],
      subject: "Hello world",
      react: (
				<>
					<h1>{subject}</h1>
					<p>Thank you for getting in touch!</p>
					<p>I will get back to you as soon as possible.</p>
					<p>New message submitted!:</p>
					<p>{message}</p>
		  	</>
			),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
