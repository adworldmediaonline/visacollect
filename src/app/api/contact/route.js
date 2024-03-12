import { transporter, mailOptions } from '@/config/nodemailer';

export async function POST(req) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return Response.json({ message: 'bad request!' }, { status: 400 });
  }

  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      subject: data.message,
      text: 'test string',
      html: `
    <html>
      <head>
        <style>
          /* Add your CSS styles here */
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <table>
          <tr>
            <th>Full Name</th>
            <td>${data?.fullName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${data?.email}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>${data?.message}</td>
          </tr>
        </table>
      </body>
    </html>
  `,
    });
    console.log('Email sent:', info.response);
    return Response.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ message: 'error' }, { status: 400 });
  }
}
