# Email Configuration Guide for Baba Car Wash

This guide explains how to configure the PHP backend to send emails for form submissions using **Gmail SMTP**.

## 📁 Files Created

1. **`public/api/booking.php`** - Handles booking form submissions
2. **`public/api/contact.php`** - Handles contact form submissions

## 🔧 Configuration Steps

### 1. Update SMTP Credentials

Both PHP files need to be configured with your Gmail credentials. Update the following variables in both files:

```php
$mailHost     = "smtp.gmail.com";
$mailUsername = "your-email@gmail.com";     // Your Gmail address
$mailPassword = "YOUR_APP_PASSWORD_HERE";   // Your Gmail app password
$mailPort     = 587;
$mailSecure   = "tls";

// Recipient emails
$recipientEmail1 = "customerregistration@babagroup.ae";
$recipientEmail2 = "info@babacarwash.ae"; // Optional second recipient
```

### 2. Get Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)** → Enter "Baba Car Wash"
5. Click **Generate**
6. Copy the 16-character password and paste it in the `$mailPassword` field

**Important:** Use the app password, NOT your regular Gmail password!

### 3. Update Frontend Components

#### For Booking Form (`src/components/BookingForm/BookingForm.jsx`):

Replace the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/booking.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.status === 'success') {
      alert(data.message || 'Booking submitted successfully! We will contact you shortly.');
      setFormData({
        date: '',
        name: '',
        email: '',
        mobile: '',
        alternativeMobile: '',
        address: '',
        parkingCarNumber: '',
        service: '',
      });
      setErrors({});
    } else {
      alert(data.message || 'Failed to submit booking. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### For Contact Form (`src/app/(main)/contact/page.jsx`):

Replace the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok && data.status === 'success') {
      alert(data.message || 'Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(data.message || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. Update Next.js Configuration

Add rewrites to your `next.config.mjs` to route API calls correctly:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
```

## 📧 Email Templates

### Booking Form Email
The booking form sends a professional email with:
- Customer appointment date
- Full contact details (name, email, mobile, alternative mobile)
- Service address
- Parking and car number
- Selected service with price
- Styled with Baba Car Wash branding (purple and gold colors)

### Contact Form Email
The contact form sends:
- Customer name and email
- Message content
- Styled with Baba Car Wash branding

## 🧪 Testing

1. **Local Testing**: 
   - Ensure PHP is installed on your system
   - Run a local PHP server: `php -S localhost:8000 -t public`
   - Test the forms and check for email delivery

2. **Production Testing**:
   - Deploy the PHP files to your web server
   - Ensure PHP and Composer are installed
   - Test both forms and verify email receipt

## 📦 Dependencies

The PHP files use PHPMailer, which should already be installed via Composer in `public/api/vendor/`.

If you need to install it:

```bash
cd public/api
composer require phpmailer/phpmailer
```

## 🔒 Security Notes

1. **Never commit** your actual email password to version control
2. Use Gmail's app-specific passwords for better security
3. Add rate limiting to prevent spam submissions
4. Validate and sanitize all input data
5. Consider using environment variables for production deployments

## 🚀 Production Deployment

When deploying to production:

1. Update the Gmail SMTP credentials
2. Update recipient email addresses
3. Test the forms thoroughly
4. Monitor email delivery logs
5. Set up email bounce handling if needed
6. Consider Gmail's sending limits (500 emails/day for free accounts)

## 📝 Service Options

The booking form includes these pre-configured services:

**One-Time Services:**
- Sedan Car (Internal & External) - AED 35
- 4x4 Car (Internal & External) - AED 45
- One Time Wash - AED 20

**Sedan Packages:**
- Once A Week - AED 60
- Twice A Week - AED 80
- Thrice A Week - AED 100
- Daily - AED 150

**4x4 Packages:**
- Once A Week - AED 80
- Twice A Week - AED 100
- Thrice A Week - AED 120
- Daily - AED 170

## 🆘 Troubleshooting

- **Email not sending**: Check SMTP credentials and Gmail app password
- **CORS errors**: Ensure CORS headers are properly set in PHP files
- **Connection timeout**: Verify firewall settings allow SMTP connections on port 587
- **Authentication failed**: Double-check your Gmail app password is correct
- **Gmail blocking sign-in**: Enable "Less secure app access" or use app passwords (recommended)
- **Daily limit reached**: Gmail free accounts have a 500 emails/day limit

## 📞 Support

For issues or questions, contact the development team or refer to:
- [PHPMailer Documentation](https://github.com/PHPMailer/PHPMailer)
- [Gmail SMTP Setup](https://support.google.com/mail/answer/7126229)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
