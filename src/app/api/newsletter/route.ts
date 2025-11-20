import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTINGER_SMTP_HOST,
      port: parseInt(process.env.HOSTINGER_SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.HOSTINGER_SMTP_USER,
        pass: process.env.HOSTINGER_SMTP_PASSWORD,
      },
    });

    // Get company emails from environment variable
    const companyEmails = process.env.HOSTINGER_TO_EMAIL?.split(',').map(email => email.trim()) || [];

    // 1. Send notification to company team
    const companyNotification = {
      from: `Webxkey Newsletter <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to: companyEmails,
      subject: '🎉 New Newsletter Subscription!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px;">
            <h2 style="color: #333; text-align: center; margin-bottom: 30px;">New Newsletter Subscription! 🎉</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #0ea0c4; margin-bottom: 10px;">Subscription Details:</h3>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>📅 Date:</strong> ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
              <p style="margin: 5px 0;"><strong>🌐 Source:</strong> Webxkey Website</p>
            </div>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4CAF50;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Total subscribers growing!</strong> This user has been automatically added to our newsletter list.
              </p>
            </div>

            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; text-align: center;">
                This is an automated notification from Webxkey Newsletter System.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // 2. Send welcome email to subscriber
    const welcomeEmail = {
      from: `Webxkey Team <${process.env.HOSTINGER_FROM_EMAIL}>`,
      to: email,
      subject: 'Welcome to Webxkey Newsletter! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px;">
          <div style="background: white; padding: 40px 30px; border-radius: 8px; text-align: center;">
            <!-- Logo -->
            <div style="margin-bottom: 30px;">
              <h1 style="color: #0ea0c4; margin: 0; font-size: 32px; font-weight: bold;">Webxkey</h1>
              <p style="color: #666; margin: 5px 0 0 0;">Digital Innovation & Web Solutions</p>
            </div>

            <!-- Welcome Message -->
            <h2 style="color: #333; margin-bottom: 20px;">Welcome to Our Newsletter! 🎉</h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">
              Thank you for subscribing to the Webxkey newsletter. We're thrilled to have you join our community of innovators and tech enthusiasts!
            </p>

            <!-- What to Expect -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: left;">
              <h3 style="color: #0ea0c4; margin-bottom: 15px;">What you'll receive:</h3>
              <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
                <li>🚀 Latest web development trends and technologies</li>
                <li>💡 Expert insights and industry best practices</li>
                <li>🎯 Project updates and success stories</li>
                <li>🔥 Exclusive tips and tutorials</li>
                <li>💰 Special offers and promotions</li>
                <li>📈 Digital transformation insights</li>
              </ul>
            </div>

            <!-- Next Steps -->
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #1565c0; margin: 0;">
                <strong>Stay tuned!</strong> Your first newsletter will arrive soon.
              </p>
            </div>

            <!-- Social Links -->
            <div style="margin: 30px 0;">
              <p style="color: #666; margin-bottom: 15px;">Follow us for more updates:</p>
              <div style="display: flex; justify-content: center; gap: 15px;">
                <a href="https://web.facebook.com/webxkey" style="color: #1877F2; text-decoration: none;">Facebook</a>
                <a href="https://x.com/webxkey" style="color: #000; text-decoration: none;">Twitter</a>
                <a href="https://www.instagram.com/webxkey" style="color: #E4405F; text-decoration: none;">Instagram</a>
                <a href="https://www.linkedin.com/company/webxkey" style="color: #0A66C2; text-decoration: none;">LinkedIn</a>
              </div>
            </div>

            <!-- Contact Info -->
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
              <p style="color: #666; font-size: 14px; margin-bottom: 5px;">
                Need help? Contact us: 
                <a href="mailto:contact@webxkey.com" style="color: #0ea0c4; text-decoration: none;">
                  contact@webxkey.com
                </a>
              </p>
              <p style="color: #999; font-size: 12px; margin: 5px 0;">
                Webxkey (Pvt) Ltd - Transforming Ideas into Digital Reality
              </p>
            </div>

            <!-- Unsubscribe -->
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #888; font-size: 12px;">
                If you didn't subscribe to our newsletter or wish to unsubscribe, 
                please <a href="#" style="color: #666;">click here</a>.
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyNotification),
      transporter.sendMail(welcomeEmail)
    ]);

    console.log(`✅ New newsletter subscription: ${email}`);
    console.log(`📧 Notification sent to: ${companyEmails.join(', ')}`);
    console.log(`👋 Welcome email sent to: ${email}`);

    return NextResponse.json(
      { 
        message: 'Successfully subscribed to newsletter! Welcome email sent.',
        email: email
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to subscribe to newsletter. Please try again later.' 
      },
      { status: 500 }
    );
  }
}