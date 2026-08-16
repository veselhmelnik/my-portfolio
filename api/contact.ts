import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      subject,
      message,
    } = body

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nikitadomitrak@gmail.com"],
      subject: `Portfolio message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New message from portfolio</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return Response.json(
        {
          success: false,
          message: "Failed to send email",
        },
        {
          status: 500,
        }
      )
    }

    console.log("Email sent:", data)

    return Response.json(
      {
        success: true,
        message: "Email sent successfully",
      },
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error("Server error:", error)

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      {
        status: 500,
      }
    )
  }
}