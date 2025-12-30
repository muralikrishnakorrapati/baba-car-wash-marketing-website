<?php
error_reporting(0); // Suppress all PHP warnings/notices to ensure clean JSON output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Handle preflight request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

$mailHost     = "smtp.zoho.in";
$mailUsername = "donot.reply@babacarwash.com";
$mailPassword = "LuK2fxMWqKS6"; // Use Zoho App Password here
$mailPort     = 465;
$mailSecure   = "ssl";

// Recipient email addresses
$recipientEmail1 = "customerregistration@babagroup.ae";

// ---- COLLECT & VALIDATE INPUT ----
$input = json_decode(file_get_contents("php://input"), true);

$date                = trim($input['date'] ?? '');
$name                = trim($input['name'] ?? '');
$email               = trim($input['email'] ?? '');
$mobile              = trim($input['mobile'] ?? '');
$alternativeMobile   = trim($input['alternativeMobile'] ?? '');
$address             = trim($input['address'] ?? '');
$parkingCarNumber    = trim($input['parkingCarNumber'] ?? '');
$service             = trim($input['service'] ?? '');

// Validate required fields
if (empty($date) || empty($name) || empty($email) || empty($mobile) || empty($address) || empty($parkingCarNumber) || empty($service)) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "All required fields must be filled."]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "Invalid email address."]);
  exit;
}

// Service labels mapping
$serviceLabels = [
  'sedan-onetime' => 'Sedan Car (Internal & External - One Time) - AED 35',
  '4x4-onetime' => '4x4 Car (Internal & External - One Time) - AED 45',
  'onetime-wash' => 'One Time Wash - AED 20',
  'sedan-weekly' => 'Sedan: Once A Week Wash - AED 60',
  'sedan-twice' => 'Sedan: Twice A Week Wash - AED 80',
  'sedan-thrice' => 'Sedan: Thrice A Week Wash - AED 100',
  'sedan-daily' => 'Sedan: Daily Wash - AED 150',
  '4x4-weekly' => '4x4: Once A Week Wash - AED 80',
  '4x4-twice' => '4x4: Twice A Week Wash - AED 100',
  '4x4-thrice' => '4x4: Thrice A Week Wash - AED 120',
  '4x4-daily' => '4x4: Daily Wash - AED 170',
];

$serviceLabel = $serviceLabels[$service] ?? $service;

try {
  $mail = new PHPMailer(true);

  // ---- SERVER SETTINGS ----
  $mail->isSMTP();
  $mail->Host       = $mailHost;
  $mail->SMTPAuth   = true;
  $mail->Username   = $mailUsername;
  $mail->Password   = $mailPassword;
  $mail->SMTPSecure = $mailSecure;
  $mail->Port       = $mailPort;

  // ---- RECIPIENTS ----
  $mail->setFrom($mailUsername, "Baba Car Wash - Booking System");
  $mail->addAddress($recipientEmail1);
  $mail->addReplyTo($email, $name);

  // ---- EMAIL CONTENT ----
  $mail->isHTML(true);
  $mail->Subject = "New Booking Appointment - $name ($date)";
  $mail->Body = "
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
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$date}</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>👤 Customer Name:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$name}</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📧 Email:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$email}</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📱 Mobile Number:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$mobile}</td>
            </tr>";

  if (!empty($alternativeMobile)) {
    $mail->Body .= "
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>☎️ Alternative Mobile:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$alternativeMobile}</td>
            </tr>";
  }

  $mail->Body .= "
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>📍 Address:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$address}</td>
            </tr>
            <tr>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:600; color:#555;'>🚙 Parking & Car Number:</td>
              <td style='padding:12px 0; border-bottom:1px solid #f0f0f0; color:#333;'>{$parkingCarNumber}</td>
            </tr>
            <tr>
              <td style='padding:12px 0; font-weight:600; color:#555;'>🧼 Service Selected:</td>
              <td style='padding:12px 0; color:#333;'><strong style='color:#d4af37;'>{$serviceLabel}</strong></td>
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
          &copy; " . date('Y') . " Baba Car Wash & Cleaning Services. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  ";

  $mail->AltBody = "New Booking Appointment\n\n"
    . "Date: $date\n"
    . "Name: $name\n"
    . "Email: $email\n"
    . "Mobile: $mobile\n"
    . ($alternativeMobile ? "Alternative Mobile: $alternativeMobile\n" : "")
    . "Address: $address\n"
    . "Parking & Car Number: $parkingCarNumber\n"
    . "Service: $serviceLabel\n";

  // ---- SEND EMAIL ----
  $mail->send();

  http_response_code(200);
  echo json_encode([
    "status" => "success",
    "message" => "Booking submitted successfully! We will contact you shortly to confirm your appointment."
  ]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    "status" => "error",
    "message" => "Failed to submit booking. Please try again or contact us directly.",
    "error" => $mail->ErrorInfo
  ]);
}
