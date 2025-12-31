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

// Service labels mapping
const serviceLabels = {
  'sedan-onetime': 'Sedan Car (Internal & External - One Time) - AED 35',
  '4x4-onetime': '4x4 Car (Internal & External - One Time) - AED 45',
  'onetime-wash': 'One Time Wash - AED 20',
  'sedan-weekly': 'Sedan: Once A Week Wash - AED 60',
  'sedan-twice': 'Sedan: Twice A Week Wash - AED 80',
  'sedan-thrice': 'Sedan: Thrice A Week Wash - AED 100',
  'sedan-daily': 'Sedan: Daily Wash - AED 150',
  '4x4-weekly': '4x4: Once A Week Wash - AED 80',
  '4x4-twice': '4x4: Twice A Week Wash - AED 100',
  '4x4-thrice': '4x4: Thrice A Week Wash - AED 120',
  '4x4-daily': '4x4: Daily Wash - AED 170',
};

export async function POST(request) {
  try {
    const body = await request.json();

    // Extract and trim input fields
    const {
      date = '',
      name = '',
      email = '',
      mobile = '',
      alternativeMobile = '',
      address = '',
      parkingCarNumber = '',
      service = '',
    } = body;

    const trimmedData = {
      date: date.trim(),
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      alternativeMobile: alternativeMobile.trim(),
      address: address.trim(),
      parkingCarNumber: parkingCarNumber.trim(),
      service: service.trim(),
    };

    // Validate required fields
    if (
      !trimmedData.date ||
      !trimmedData.name ||
      !trimmedData.email ||
      !trimmedData.mobile ||
      !trimmedData.address ||
      !trimmedData.parkingCarNumber ||
      !trimmedData.service
    ) {
      return NextResponse.json(
        { status: 'error', message: 'All required fields must be filled.' },
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

    const serviceLabel =
      serviceLabels[trimmedData.service] || trimmedData.service;

    // Create transporter
    const transporter = nodemailer.createTransport(mailConfig);

    // Build alternative mobile row
    const alternativeMobileRow = trimmedData.alternativeMobile
      ? `
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>☎️ Alternative Mobile:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${trimmedData.alternativeMobile}</td>
            </tr>`
      : '';

    // Compose email
    const mailOptions = {
      from: `"Baba Car Wash - Booking System" <${mailConfig.auth.user}>`,
      to: recipientEmail,
      replyTo: `"${trimmedData.name}" <${trimmedData.email}>`,
      subject: `New Booking Appointment - ${trimmedData.name} (${trimmedData.date})`,
      html: `
  <html>
    <body style='font-family: Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 0;'>
      <div style='max-width:650px; margin:20px auto; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);'>
        <div style='background: linear-gradient(135deg, #312782 0%, #5342a5 100%); color:#fff; padding:30px; text-align:center;'>
          <h2 style='margin:0; font-size:26px;'>🚗 New Booking Appointment</h2>
          <p style='margin:8px 0 0; font-size:14px; opacity:0.95;'>Baba Car Wash & Cleaning Services</p>
        </div>
        <div style='padding:30px; color:#333;'>
          <h3 style='color:#312782; margin:0 0 20px; font-size:18px; border-bottom:2px solid #d4af37; padding-bottom:10px;'>📋 Booking Details</h3>
          
          <table style='width:100%; border-collapse:collapse;'>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555; width:180px;'>📅 Appointment Date:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.date
              }</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>👤 Customer Name:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.name
              }</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📧 Email:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.email
              }</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📱 Mobile Number:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.mobile
              }</td>
            </tr>${alternativeMobileRow}
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📍 Address:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.address
              }</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>🚙 Parking & Car Number:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>${
                trimmedData.parkingCarNumber
              }</td>
            </tr>
            <tr>
              <td style='padding:12px 0; font-weight:600; color:#555;'>🧼 Service Selected:</td>
              <td style='padding:12px 0; color:#333;'><strong style='color:#d4af37;'>${serviceLabel}</strong></td>
            </tr>
          </table>

          <div style='margin-top:30px; padding:20px; background:#f9f9f9; border-left:4px solid #d4af37; border-radius:6px;'>
            <p style='margin:0; color:#666; font-size:14px;'>
              <strong style='color:#312782;'>📌 Action Required:</strong><br/>
              Please contact the customer at the provided mobile number to confirm the appointment details and service schedule.
            </p>
          </div>
        </div>
        <div style='text-align:center; font-size:12px; color:#888; padding:20px; border-top:1px solid #eee; background:#fafafa;'>
          This booking was submitted through babacarwash.ae<br/>
          &copy; ${new Date().getFullYear()} Baba Car Wash & Cleaning Services. All rights reserved.
        </div>
      </div>
    </body>
  </html>
      `,
      text: `New Booking Appointment

Date: ${trimmedData.date}
Name: ${trimmedData.name}
Email: ${trimmedData.email}
Mobile: ${trimmedData.mobile}
${
  trimmedData.alternativeMobile
    ? `Alternative Mobile: ${trimmedData.alternativeMobile}\n`
    : ''
}Address: ${trimmedData.address}
Parking & Car Number: ${trimmedData.parkingCarNumber}
Service: ${serviceLabel}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      status: 'success',
      message:
        'Booking submitted successfully! We will contact you shortly to confirm your appointment.',
    });
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message:
          'Failed to submit booking. Please try again or contact us directly.',
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
