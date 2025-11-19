import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface MeetingEmailRequestBody {
  to: string;
  clientName: string;
  meetingDate: string;
  meetingTime: string;
  timezone: string;
  notes: string;
  businessEmail: string;
}

export async function POST(request: Request) {
  try {
    const { to, clientName, meetingDate, meetingTime, timezone, notes, businessEmail }: MeetingEmailRequestBody = await request.json();

    // Validate inputs
    if (!to || !clientName || !meetingDate || !meetingTime) {
      return NextResponse.json({ 
        success: false,
        message: 'Missing required fields' 
      }, { status: 400 });
    }

    // Create transporter (using your existing email configuration)
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: Number(process.env.HOSTINGER_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
    });

    // Format the date nicely
    const formattedDate = new Date(meetingDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Your permanent Google Meet link
    const googleMeetLink = "https://meet.google.com/qsq-uymi-bnp";

    // Email to CLIENT
    const clientMailOptions = {
      from: `"WebxKey Meetings " <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to:`${to} ${process.env.HOSTINGER_TO_EMAIL}`, 
      subject: `Meeting Confirmation - ${formattedDate} at ${meetingTime}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Meeting Confirmed! 🎉</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Meeting Details:</h3>
            <p><strong>Client Name:</strong> ${clientName}</p>
            <p><strong>Email:</strong> ${to}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${meetingTime} (${timezone})</p>
            <p><strong>Duration:</strong> 30 minutes</p>
            <p><strong>Meeting Type:</strong> Google Meet</p>
          </div>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #1e40af; margin-top: 0;">Join Your Meeting</h3>
            <p style="margin-bottom: 15px; color: #374151;">Click the button below to join the Google Meet:</p>
            <a href="${googleMeetLink}" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
               Join Google Meet
            </a>
            <p style="margin-top: 10px; font-size: 0.9em; color: #6b7280;">
              Or copy this link: <br>
              <span style="word-break: break-all;">${googleMeetLink}</span>
            </p>
          </div>

          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #065f46; margin-top: 0;">Meeting Instructions:</h4>
            <ul>
              <li><strong>Join 5 minutes early</strong> to test your audio and video</li>
              <li>Use a <strong>quiet environment</strong> with good lighting</li>
              <li>Have a <strong>stable internet connection</strong></li>
              <li>Use <strong>headphones</strong> for better audio quality</li>
            </ul>
          </div>

          ${notes ? `
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #92400e; margin-top: 0;">Your Notes:</h4>
            <p>${notes}</p>
          </div>
          ` : ''}

          <div style="background-color: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #dc2626; margin-top: 0;">Need to Reschedule?</h4>
            <p>If you need to reschedule or cancel, please reply to this email at least 2 hours before the meeting time.</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 0.9em; color: #6b7280;">
              Best regards,<br>
              <strong>WebxKey Team</strong><br>
              <a href="mailto:official@webxkey.com" style="color: #2563eb;">official@webxkey.com</a> | 
              <a href="https://webxkey.com" style="color: #2563eb;">webxkey.com</a>
            </p>
          </div>
        </div>
      `,
      text: `
MEETING CONFIRMED!

Meeting Details:
- Client Name: ${clientName}
- Email: ${to}
- Date: ${formattedDate}
- Time: ${meetingTime} (${timezone})
- Duration: 30 minutes
- Meeting Type: Google Meet

JOIN YOUR MEETING:
Join Link: ${googleMeetLink}
Click the link above or copy and paste it into your browser to join the meeting.

MEETING INSTRUCTIONS:
• Join 5 minutes early to test your audio and video
• Use a quiet environment with good lighting
• Have a stable internet connection
• Use headphones for better audio quality

${notes ? `YOUR NOTES: ${notes}` : ''}

NEED TO RESCHEDULE?
If you need to reschedule or cancel, please reply to this email at least 2 hours before the meeting time.

Best regards,
WebxKey Team
official@webxkey.com
https://webxkey.com
      `
    };

    // Email to BUSINESS (you)
    const businessMailOptions = {
      from: `"WebxKey Meeting System" <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to: businessEmail,
      subject: `New Meeting Scheduled: ${clientName} - ${formattedDate}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Meeting Scheduled </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Client Information:</h3>
            <p><strong>Name:</strong> ${clientName}</p>
            <p><strong>Email:</strong> <a href="mailto:${to}">${to}</a></p>
            <p><strong>Meeting Date:</strong> ${formattedDate}</p>
            <p><strong>Meeting Time:</strong> ${meetingTime} (${timezone})</p>
            <p><strong>Duration:</strong> 30 minutes</p>
          </div>

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #1e40af; margin-top: 0;">Google Meet Link:</h4>
            
            <a href="${googleMeetLink}" style="color: #2563eb; word-break: break-all;">
              ${googleMeetLink}
            </a>
          </div>

          ${notes ? `
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #92400e; margin-top: 0;">Client Notes:</h4>
            <p>${notes}</p>
          </div>
          ` : ''}

          <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #065f46; margin-top: 0;">Action Required:</h4>
            <ul>
              <li><strong>Join the meeting 5 minutes early</strong> using the permanent Google Meet link</li>
              <li>Prepare for discussion about: ${notes || "General consultation"}</li>
              <li>Have your presentation/demo ready</li>
              <li>Test your audio and video equipment beforehand</li>
            </ul>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 0.9em; color: #6b7280;">
              This meeting was scheduled through your website booking system.<br>
              <strong>Permanent Google Meet:</strong> ${googleMeetLink}
            </p>
          </div>
        </div>
      `,
      text: `
NEW MEETING SCHEDULED

Client Information:
- Name: ${clientName}
- Email: ${to}
- Meeting Date: ${formattedDate}
- Meeting Time: ${meetingTime} (${timezone})
- Duration: 30 minutes

GOOGLE MEET LINK:
${googleMeetLink}

${notes ? `CLIENT NOTES: ${notes}` : ''}

ACTION REQUIRED:
• Join the meeting 5 minutes early using the permanent Google Meet link
• Prepare for discussion about: ${notes || "General consultation"}
• Have your presentation/demo ready
• Test your audio and video equipment beforehand

This meeting was scheduled through your website booking system.
Permanent Google Meet: ${googleMeetLink}
      `
    };

    // Send both emails
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(businessMailOptions);

    return NextResponse.json({ 
      success: true,
      message: 'Meeting scheduled and confirmation emails sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending meeting emails:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Failed to send confirmation emails. Please try again later.'
    }, { status: 500 });
  }
}