// send.js
//--|🠊 Export important send functions. Test it first though. 🠈|--//
import cors from 'cors';
import axios from 'axios';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import express from 'express';
import { ObjectId } from 'mongodb';
import nodemailer from 'nodemailer';
import { createTransport } from 'nodemailer';
import { connectDatabase, getDatabase } from '../server/data'; // Fixed import to match the function names in data.js

//--|🠋 Action Functions 🠋|--//
//--|🠋 Action Functions 🠋|--//
export async function sendMail(email, activationCode, page) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: 'api' || process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions;
  switch (page) {
    case 'register':
      mailOptions = {
        from: `"Verify Account - Trinity {A]pps" <${process.env.MAIL_FROM}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'Activate your Account',
        text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Activate Your Account</div>
                <div class="content">
                  <p>Your activation code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Geitjie Techno. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
      };
      break;
    case 'password':
      mailOptions = {
        from: `"Reset Password - Trinity {A]pps" <${process.env.MAIL_FROM}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'You or someone else requested to reset the password linked to this email.',
        text: `Reset your Password with: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Recover your Password</div>
                <div class="content">
                  <p>Your Reset Code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
      };
      break;
  }

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Error:', error);
    } else {
      console.log('SMTP Server is ready to send emails.');
    }
  });

  try {
    transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error('Error sending activation email:', error);
    throw error;
  }
}
/*
async function sendEmail(email, activationCode, page) {
  let transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: 'api' || process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let mailOptions;
  switch (page) {
    case 'register':
      mailOptions = {
        from: `"Verify Account - Trinity {A]pps" <${process.env.MAIL_FROM}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'Activate your Account',
        text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Activate Your Account</div>
                <div class="content">
                  <p>Your activation code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Geitjie Techno. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
      };
      break;
    case 'password':
      mailOptions = {
        from: `"Reset Password - Trinity {A]pps" <${process.env.MAIL_FROM}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'You or someone else requested to reset the password linked to this email.',
        text: `Reset your Password with: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f9;
                }
                .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: #2c3e50;
                  color: white;
                  text-align: center;
                  padding: 20px 10px;
                  font-size: 24px;
                }
                .content {
                  padding: 20px;
                  text-align: center;
                }
                .activation-code {
                  display: inline-block;
                  background: #2c3e50;
                  color: white;
                  font-size: 24px;
                  padding: 10px 20px;
                  margin-top: 10px;
                  border-radius: 8px;
                }
                .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Recover your Password</div>
                <div class="content">
                  <p>Your Reset Code is:</p>
                  <div class="activation-code">${activationCode}</div>
                  <p>This code will expire in 24 hours.</p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
                </div>
              </div>
            </body>
          </html>
          `,
      };
      break;
  }

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Error:', error);
    } else {
      console.log('SMTP Server is ready to send emails.');
    }
  });

  try {
    transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error('Error sending activation email:', error);
    throw error;
  }
}
*/
