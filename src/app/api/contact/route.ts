import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function getEmailList(value?: string) {
  if (!value) return [];

  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const details = String(body.details || "").trim();

    if (!firstName || !lastName || !email || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_EMAIL_FROM;
    const to = getEmailList(process.env.CONTACT_EMAIL_TO);
    const cc = getEmailList(process.env.CONTACT_EMAIL_CC);

    if (!apiKey || !from || to.length === 0) {
      console.error("Missing email environment variables:", {
        hasApiKey: Boolean(apiKey),
        from,
        to,
        cc,
      });

      return NextResponse.json(
        { error: "Email environment variables are not configured." },
        { status: 500 }
      );
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeDetails = details
      ? escapeHtml(details).replaceAll("\n", "<br />")
      : "No details provided.";

    const emailPayload = {
      from,
      to,
      subject: `New Estimate Request - ${service} - RJPaiting Website`,
      replyTo: email,
      html: `
        <div style="margin:0; padding:0; background:#F8F5F0; font-family: Arial, Helvetica, sans-serif; color:#152536;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F5F0; padding:40px 16px;">
            <tr>
                <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 12px 35px rgba(21,37,54,0.12);">
                    
                    <!-- Header -->
                    <tr>
                    <td style="background:#152536; padding:32px 36px;">
                        <div style="font-size:14px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#D35B66;">
                        RJ Painting
                        </div>
                        <h1 style="margin:10px 0 0; font-size:28px; line-height:1.25; color:#ffffff;">
                        New Estimate Request
                        </h1>
                        <p style="margin:10px 0 0; font-size:15px; line-height:1.6; color:rgba(255,255,255,0.75);">
                        A new lead submitted the contact form from the website.
                        </p>
                    </td>
                    </tr>

                    <!-- Lead Summary -->
                    <tr>
                    <td style="padding:32px 36px 8px;">
                        <h2 style="margin:0 0 18px; font-size:18px; color:#152536;">
                        Lead Information
                        </h2>

                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="padding:14px 0; border-bottom:1px solid #E8E2DA;">
                            <div style="font-size:13px; font-weight:700; color:#8B2E35; text-transform:uppercase; letter-spacing:0.6px;">
                                Name
                            </div>
                            <div style="margin-top:5px; font-size:16px; color:#152536;">
                                ${safeFirstName} ${safeLastName}
                            </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:14px 0; border-bottom:1px solid #E8E2DA;">
                            <div style="font-size:13px; font-weight:700; color:#8B2E35; text-transform:uppercase; letter-spacing:0.6px;">
                                Email
                            </div>
                            <div style="margin-top:5px; font-size:16px;">
                                <a href="mailto:${safeEmail}" style="color:#152536; text-decoration:none;">
                                ${safeEmail}
                                </a>
                            </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:14px 0; border-bottom:1px solid #E8E2DA;">
                            <div style="font-size:13px; font-weight:700; color:#8B2E35; text-transform:uppercase; letter-spacing:0.6px;">
                                Phone
                            </div>
                            <div style="margin-top:5px; font-size:16px;">
                                <a href="tel:${safePhone}" style="color:#152536; text-decoration:none;">
                                ${safePhone}
                                </a>
                            </div>
                            </td>
                        </tr>

                        <tr>
                            <td style="padding:14px 0;">
                            <div style="font-size:13px; font-weight:700; color:#8B2E35; text-transform:uppercase; letter-spacing:0.6px;">
                                Service Needed
                            </div>
                            <div style="margin-top:5px; display:inline-block; background:#F8F5F0; color:#152536; font-size:15px; font-weight:700; padding:9px 14px; border-radius:999px;">
                                ${safeService}
                            </div>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>

                    <!-- Project Details -->
                    <tr>
                    <td style="padding:24px 36px 32px;">
                        <div style="background:#F8F5F0; border:1px solid #E8E2DA; border-radius:18px; padding:24px;">
                        <h2 style="margin:0 0 12px; font-size:18px; color:#152536;">
                            Project Details
                        </h2>
                        <p style="margin:0; font-size:15px; line-height:1.8; color:rgba(21,37,54,0.82);">
                            ${safeDetails}
                        </p>
                        </div>
                    </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                    <td style="padding:0 36px 36px;">
                        <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="background:#8B2E35; border-radius:12px;">
                            <a href="mailto:${safeEmail}" style="display:inline-block; padding:14px 22px; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">
                                Reply To Customer
                            </a>
                            </td>
                            <td style="width:12px;"></td>
                            <td style="background:#152536; border-radius:12px;">
                            <a href="tel:${safePhone}" style="display:inline-block; padding:14px 22px; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">
                                Call Customer
                            </a>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td style="background:#F8F5F0; padding:22px 36px; border-top:1px solid #E8E2DA;">
                        <p style="margin:0; font-size:13px; line-height:1.6; color:rgba(21,37,54,0.6);">
                        This message was automatically generated from the RJ Painting website contact form.
                        </p>
                    </td>
                    </tr>

                </table>
                </td>
            </tr>
            </table>
        </div>
        `,
      ...(cc.length > 0 && { cc }),
    };

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Resend failed to send the email.", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while sending the email." },
      { status: 500 }
    );
  }
}