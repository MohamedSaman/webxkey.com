import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface PartnershipRequestBody {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function POST(request: Request) {
  console.log('Partnership API route called');
  
  try {
    const body = await request.json();
    console.log('Request body:', body);
    
    const { name, email, company, message }: PartnershipRequestBody = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed: Required fields missing');
      return NextResponse.json({ 
        success: false,
        message: 'All fields are required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json({ 
        success: false,
        message: 'Invalid email format' 
      }, { status: 400 });
    }

    // Check environment variables
    if (!process.env.HOSTINGER_SMTP_HOST || !process.env.HOSTINGER_SMTP_USER || !process.env.HOSTINGER_SMTP_PASSWORD) {
      console.error('Missing SMTP environment variables');
      return NextResponse.json({ 
        success: false,
        message: 'Server configuration error' 
      }, { status: 500 });
    }

    console.log('Creating transporter...');
    
    // Create transporter with debug info
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
      debug: true,
      logger: true,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json({ 
        success: false,
        message: 'Email service temporarily unavailable' 
      }, { status: 500 });
    }

    console.log('Preparing email...');

    // Email content
    const mailOptions = {
      from: `"WebxKey Partnerships" <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to: process.env.HOSTINGER_TO_EMAIL,
      replyTo: email,
      subject: `New Partnership Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Partnership Inquiry
          </h2>
          
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
              <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; background-color: #f8fafc;">Company</td>
              <td style="padding: 12px; border: 1px solid #e2e8f0;">${company || 'Not provided'}</td>
            </tr>
          </table>
          
          <h3 style="color: #2563eb; margin-top: 20px; margin-bottom: 10px;">
            Partnership Details
          </h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0; white-space: pre-line;">
            ${message}
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #64748b;">
            <p>This inquiry was submitted through the WebxKey partnership form.</p>
            <p style="font-size: 0.8em; color: #94a3b8;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    console.log('Sending email...');
    
    // Send email
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailResult.messageId);

    return NextResponse.json({ 
      success: true,
      message: 'Your partnership inquiry has been submitted successfully! Our team will review your request and get back to you soon.'
    });

  } catch (error) {
    console.error('Error in partnership API:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Failed to submit your request. Please try again later.'
    }, { status: 500 });
  }
}