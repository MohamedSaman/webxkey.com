import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequestBody {
  name: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  referralSource: string;
  projectDescription: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, country, projectType, referralSource, projectDescription }: EmailRequestBody = body;

    // Validate inputs
    if (!name || !email || !country || !projectType || !referralSource || !projectDescription) {
      return NextResponse.json({ 
        success: false,
        message: 'All fields are required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false,
        message: 'Invalid email format' 
      }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
    });

    // Email content with phone and country
    const mailOptions = {
      from: `"WebxKey Contact" <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to: process.env.HOSTINGER_TO_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry: ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Project Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #e2e8f0;">
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc; width: 30%;">Name</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Email</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Phone</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Country</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Project Type</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Referral Source</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${referralSource}</td>
            </tr>
          </table>
          
          <h3 style="color: #2563eb; margin-top: 20px; margin-bottom: 10px;">Project Description</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0; white-space: pre-line;">
            ${projectDescription}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #64748b;">
            <p>This inquiry was submitted through the WebxKey contact form.</p>
            <p style="font-size: 0.8em; color: #94a3b8;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      text: `
NEW PROJECT INQUIRY

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Country: ${country}
Project Type: ${projectType}
Referral Source: ${referralSource}

PROJECT DESCRIPTION:
${projectDescription}

---
Submitted on: ${new Date().toLocaleString()}
This inquiry was submitted through the WebxKey contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Your inquiry has been submitted successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Failed to submit your inquiry. Please try again later.'
    }, { status: 500 });
  }
}