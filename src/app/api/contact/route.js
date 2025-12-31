import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const mailConfig = {
  host: process.env.MAIL_HOST || 'smtp.zoho.in',
  port: parseInt(process.env.MAIL_PORT || '465'),
  secure: true, // SSL
  auth: {
    user: process.env.MAIL_USERNAME || 'donot.reply@babacarwash.com',
    pass: process.env.MAIL_PASSWORD || 'LuK2fxMWqKS6',
  },
};

const recipientEmail =
  process.env.RECIPIENT_EMAIL || 'customerregistration@babagroup.ae';

export async function POST(request) {
  try {
    const body = await request.json();

    // Extract and trim input fields
    const { name = '', email = '', message = '' } = body;

    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    // Validate required fields
    if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
      return NextResponse.json(
        { status: 'error', message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(mailConfig);

    // Escape HTML in message
    const escapedMessage = trimmedData.message
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/\n/g, '<br/>');

    // Compose email
    const mailOptions = {
      from: `"Baba Car Wash - Contact Form" <${mailConfig.auth.user}>`,
      to: recipientEmail,
      replyTo: `"${trimmedData.name}" <${trimmedData.email}>`,
      subject: `New Contact Form Message from ${trimmedData.name}`,
      html: `
  <html>
    <body style='font-family: Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 0;'>
      <div style='max-width:600px; margin:20px auto; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);'>
        <div style='background: linear-gradient(135deg, #312782 0%, #5342a5 100%); color:#fff; padding:30px; text-align:center;'>
          <h2 style='margin:0; font-size:26px;'>💬 New Contact Message</h2>
          <p style='margin:8px 0 0; font-size:14px; opacity:0.95;'>Baba Car Wash & Cleaning Services</p>
        </div>
        <div style='padding:30px; color:#333;'>
          <h3 style='color:#312782; margin:0 0 20px; font-size:18px; border-bottom:2px solid #d4af37; padding-bottom:10px;'>📋 Contact Details</h3>
          <p style='margin:0 0 12px;'><strong style='color:#555;'>👤 Name:</strong> ${
            trimmedData.name
          }</p>
          <p style='margin:0 0 12px;'><strong style='color:#555;'>📧 Email:</strong> ${
            trimmedData.email
          }</p>
          <p style='margin:0 0 20px;'><strong style='color:#555;'>📝 Message:</strong></p>
          <div style='background:#f9f9f9; border-left:4px solid #d4af37; padding:16px; border-radius:6px; color:#333; line-height:1.6;'>
            ${escapedMessage}
          </div>
        </div>
        <div style='text-align:center; font-size:12px; color:#888; padding:20px; border-top:1px solid #eee; background:#fafafa;'>
          This message was sent from the contact form on babacarwash.ae<br/>
          &copy; ${new Date().getFullYear()} Baba Car Wash & Cleaning Services. All rights reserved.
        </div>
      </div>
    </body>
  </html>
      `,
      text: `Name: ${trimmedData.name}
Email: ${trimmedData.email}

Message:
${trimmedData.message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      status: 'success',
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message:
          'Failed to send message. Please try again or contact us directly.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
