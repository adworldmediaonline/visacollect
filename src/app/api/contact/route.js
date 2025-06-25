import { transporter, mailOptions } from '@/config/nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Validation
    if (!data.name || !data.email || !data.message) {
      return Response.json({ 
        message: 'Missing required fields. Please fill in all fields.',
        error: 'Validation failed' 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return Response.json({ 
        message: 'Please enter a valid email address.',
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Send email
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      html: `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1998c7; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; text-align: left; padding: 12px; }
              th { background-color: #f2f2f2; font-weight: bold; }
              .message-box { background: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <table>
                  <tr>
                    <th>Full Name</th>
                    <td>${data.name}</td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td>${data.email}</td>
                  </tr>
                </table>
                <div class="message-box">
                  <h4>Message:</h4>
                  <p>${data.message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log('Email sent successfully:', info.response);
    return Response.json({ 
      message: 'Message sent successfully! We will get back to you soon.',
      success: true 
    }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More specific error handling
    let errorMessage = 'Unable to send message at this time. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email service authentication failed. Please contact support.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection to email service failed. Please try again.';
    } else if (error.message) {
      errorMessage = `Email service error: ${error.message}`;
    }

    return Response.json({
      message: errorMessage,
      error: error.code || 'EMAIL_SEND_FAILED'
    }, { status: 500 });
  }
}
