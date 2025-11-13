import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  projectType: string;
  referralSource: string;
  projectDescription: string;
}

interface MailOptions {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  priority: 'high' | 'normal' | 'low';
  headers?: Record<string, string | string[]>;
  text: string;
  html: string;
}

export async function POST(request: Request) {
  // Basic bot/spam protection
  const userAgent = request.headers.get('user-agent');
  if (!userAgent || userAgent.includes('bot') || userAgent.includes('spam')) {
    return NextResponse.json({ message: 'Access denied' }, { status: 403 });
  }

  const { name, email, projectType, referralSource, projectDescription }: EmailRequestBody = await request.json();

  // Validate inputs
  if (!name || !email || !projectType || !referralSource || !projectDescription) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  // Validate name length
  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ message: 'Name must be between 2-100 characters' }, { status: 400 });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: 'Invalid email format' }, { status: 400 });
  }

  // Validate project description length
  if (projectDescription.length < 10 || projectDescription.length > 2000) {
    return NextResponse.json({ message: 'Project description must be between 10-2000 characters' }, { status: 400 });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Ensure required environment variables are set
    const fromEmail = process.env.HOSTINGER_FROM_EMAIL || 'no-reply@yourdomain.com';
    const toEmail = process.env.HOSTINGER_TO_EMAIL || 'contact@yourdomain.com';

    // Email content with improved deliverability
    const mailOptions: MailOptions = {
      from: `"WebxKey Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Project Inquiry: ${projectType}`,
      priority: 'high',
      headers: {
        'X-Priority': '1',
        'X-Mailer': 'WebxKey Contact Form',
        'List-Unsubscribe': `<mailto:${fromEmail}?subject=Unsubscribe>`,
        'Precedence': 'bulk',
        'MIME-Version': '1.0',
        ...(fromEmail && { 'Return-Path': fromEmail })
      },
      text: `New Project Inquiry Received:

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Referral Source: ${referralSource}

Project Description:
${projectDescription}

--
This email was sent from your website contact form.
To stop receiving these emails, please contact ${fromEmail}
`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Project Type</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Referral Source</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${referralSource}</td>
            </tr>
          </table>
          
          <h3 style="color: #2563eb; margin-top: 20px;">Project Description</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0; white-space: pre-line;">
            ${projectDescription}
          </div>
          
          <p style="margin-top: 30px; font-size: 0.9em; color: #64748b;">
            This inquiry was submitted through the WebxKey contact form.
          </p>
          <p style="font-size: 0.8em; color: #94a3b8;">
            If you believe you received this email in error, please contact 
            <a href="mailto:${fromEmail}" style="color: #2563eb;">${fromEmail}</a>
          </p>
          <p style="font-size: 0.8em; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px; margin-top: 20px;">
            WebxKey Company<br>
            123 Business Street, City, Country
          </p>
        </div>
      `,
    };

    // Verify connection
    await transporter.verify();

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ 
      message: 'Your inquiry has been submitted successfully!',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      message: 'Failed to submit your inquiry. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}