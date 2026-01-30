# Setup Guide

## Environment Variables Setup

This project uses environment variables to securely store sensitive credentials like EmailJS API keys.

### First Time Setup

1. **Copy the example environment file**:
   ```bash
   cp .env.example .env
   ```
   (On Windows: `copy .env.example .env`)

2. **Get your EmailJS credentials**:
   - Visit [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Sign in to your account
   - Find your Service ID, Template ID, and User ID (Public Key)

3. **Update the .env file** with your actual credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
   REACT_APP_EMAILJS_USER_ID=your_actual_user_id
   ```

4. **Restart the development server** if it's running:
   ```bash
   npm start
   ```

### Important Security Notes

- **NEVER commit the .env file** to version control - it's already in .gitignore
- The .env file contains sensitive credentials that should remain private
- Only commit .env.example (the template without real credentials)
- If you accidentally commit .env, rotate your EmailJS keys immediately

### Verifying Setup

To verify your environment variables are loaded correctly:

1. Start the dev server: `npm start`
2. Open browser console (F12)
3. Try submitting the contact form
4. Check for successful email delivery

If you see errors like "service_id is undefined", your environment variables aren't loading. Make sure:
- The .env file is in the project root (same level as package.json)
- Variable names start with `REACT_APP_`
- You restarted the dev server after creating/modifying .env

### Production Deployment

When deploying to production (Netlify, Vercel, etc.), add these environment variables in your hosting platform's dashboard:

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_USER_ID`

Do NOT rely on the .env file for production - it won't be deployed.

### Troubleshooting

**Contact form not working?**
- Check that .env exists in project root
- Verify all three environment variables are set
- Ensure dev server was restarted after creating .env
- Check browser console for specific error messages

**"Cannot find module" error?**
- Run `npm install` to ensure all dependencies are installed

**Environment variables showing as undefined?**
- Variable names MUST start with `REACT_APP_` (Create React App requirement)
- File must be named exactly `.env` (with the dot)
- Restart dev server after any .env changes
