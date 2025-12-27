<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure path is correct

// Handle preflight request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

// ---- CONFIGURE YOUR GMAIL SMTP SETTINGS ----
$mailHost     = "smtp.gmail.com";
$mailUsername = "your-email@gmail.com"; // Update with your Gmail address
$mailPassword = "YOUR_APP_PASSWORD_HERE"; // ⚠️ Use Gmail App Password here
$mailPort     = 587;
$mailSecure   = "tls";

// Recipient email addresses
$recipientEmail1 = "customerregistration@babagroup.ae";
$recipientEmail2 = "info@babacarwash.ae"; // Add secondary email if needed

// ---- COLLECT & VALIDATE INPUT ----
$input = json_decode(file_get_contents("php://input"), true);

$name    = trim($input['name'] ?? '');
$email   = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');
$subject = "New Contact Form Message from $name";

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "All fields are required."]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["status" => "error", "message" => "Invalid email address."]);
  exit;
}

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
  $mail->setFrom($mailUsername, "Baba Car Wash - Contact Form");
  $mail->addAddress($recipientEmail1);
  if (!empty($recipientEmail2)) {
    $mail->addAddress($recipientEmail2);
  }
  $mail->addReplyTo($email, $name);

  // ---- EMAIL CONTENT ----
  $mail->isHTML(true);
  $mail->Subject = $subject;
  $mail->Body = "
  <html>
    <body style='font-family: Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 0;'>
      <div style='max-width:600px; margin:20px auto; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.08);'>
        <div style='background: linear-gradient(135deg, #312782 0%, #5342a5 100%); color:#fff; padding:30px; text-align:center;'>
          <h2 style='margin:0; font-size:26px;'>💬 New Contact Message</h2>
          <p style='margin:8px 0 0; font-size:14px; opacity:0.95;'>Baba Car Wash & Cleaning Services</p>
        </div>
        <div style='padding:30px; color:#333;'>
          <h3 style='color:#312782; margin:0 0 20px; font-size:18px; border-bottom:2px solid #d4af37; padding-bottom:10px;'>📋 Contact Details</h3>
          <p style='margin:0 0 12px;'><strong style='color:#555;'>👤 Name:</strong> {$name}</p>
          <p style='margin:0 0 12px;'><strong style='color:#555;'>📧 Email:</strong> {$email}</p>
          <p style='margin:0 0 20px;'><strong style='color:#555;'>📝 Message:</strong></p>
          <div style='background:#f9f9f9; border-left:4px solid #d4af37; padding:16px; border-radius:6px; color:#333; line-height:1.6;'>
            " . nl2br(htmlspecialchars($message)) . "
          </div>
        </div>
        <div style='text-align:center; font-size:12px; color:#888; padding:20px; border-top:1px solid #eee; background:#fafafa;'>
          This message was sent from the contact form on babacarwash.ae<br/>
          &copy; " . date('Y') . " Baba Car Wash & Cleaning Services. All rights reserved.
        </div>
      </div>
    </body>
  </html>
  ";

  $mail->AltBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  // ---- SEND EMAIL ----
  $mail->send();

  http_response_code(200);
  echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Mailer Error: " . $mail->ErrorInfo]);
}
