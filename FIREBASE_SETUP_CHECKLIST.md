# Firebase Setup Checklist

## Critical Steps to Enable Password Reset Emails

### 1. Enable Email/Password Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **rockurbody**
3. Click **Authentication** in left sidebar
4. Click **Sign-in method** tab
5. Find **Email/Password** provider
6. Click **Enable** toggle
7. Click **Save**

### 2. Configure Email Templates
1. In Firebase Console → **Authentication**
2. Click **Templates** tab (or **Email Templates**)
3. Click **Password reset**
4. Customize the template:
   ```
   From name: Rock Your Body
   Reply-to email: rock@rockurbody.com
   Subject: Reset your Rock Your Body password
   ```
5. Click **Save**

### 3. Verify Authorized Domains
1. In Firebase Console → **Authentication** → **Settings**
2. Scroll to **Authorized domains**
3. Ensure these domains are added:
   - `localhost` (for development)
   - `rockurbody.com`
   - `www.rockurbody.com`
   - Your Vercel URL (e.g., `rockurbody.vercel.app`)
4. Click **Add domain** if any are missing

### 4. Check Environment Variables

**Local (.env):**
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Vercel:**
1. Go to Vercel Dashboard
2. Select **rockurbody** project
3. Go to **Settings** → **Environment Variables**
4. Add all `VITE_FIREBASE_*` variables
5. **Redeploy** after adding variables

### 5. Test Password Reset

**Testing Steps:**
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Navigate to `/auth/forgot-password`
4. Enter a registered email address
5. Click **Send Reset Link**
6. Look for console messages:
   - ✅ Success: `Password reset email sent successfully to: [email]`
   - ❌ Error: Check error code and message

**Common Error Codes:**
- `auth/user-not-found` → Email not registered
- `auth/invalid-email` → Email format invalid
- `auth/invalid-api-key` → Check environment variables
- `auth/network-request-failed` → Check internet connection

### 6. Check Spam Folder
Firebase emails often go to spam on first send:
- Check **Spam/Junk** folder
- Look for sender: `noreply@[your-project].firebaseapp.com`
- Mark as **Not Spam** to whitelist

### 7. Verify Email Sending Limits

**Firebase Spark (Free) Plan:**
- ~100 emails per day
- Check usage: Firebase Console → **Usage** tab

**If you need more:**
- Upgrade to **Blaze (Pay-as-you-go)** plan
- Or implement custom email service (SendGrid, Mailgun)

---

## Troubleshooting

### Email Not Arriving?

**Check these in order:**
1. ✅ Email/Password auth is enabled
2. ✅ Email template is configured
3. ✅ Authorized domains include your URL
4. ✅ Environment variables are set correctly
5. ✅ User account exists with that email
6. ✅ Check spam folder
7. ✅ Wait 5 minutes (emails can be delayed)
8. ✅ Check browser console for errors

### Still Not Working?

**Debug with Console Logs:**
The code now includes detailed logging:
```javascript
// Success:
✅ Password reset email sent successfully to: user@example.com

// Error:
❌ Password reset error: [error object]
Error code: auth/user-not-found
Error message: There is no user record...
```

**Manual Reset (Temporary Workaround):**
1. Firebase Console → **Authentication** → **Users**
2. Find the user
3. Click **⋮** (three dots)
4. Click **Reset password**
5. Firebase will send email directly

---

## Production Checklist

Before going live:
- [ ] Email/Password authentication enabled
- [ ] Email templates customized
- [ ] All authorized domains added
- [ ] Environment variables set in Vercel
- [ ] Tested with multiple email providers
- [ ] Checked spam folder behavior
- [ ] Verified email sending limits
- [ ] Error handling tested
- [ ] Console logging working
- [ ] User-facing error messages clear

---

## Custom Email Service (Optional)

If Firebase emails continue to fail, you can use a custom service:

### Option 1: SendGrid
```javascript
// server.cjs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-reset-email', async (req, res) => {
  const { email } = req.body;
  
  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  
  // Store in database with expiration
  
  // Send email
  await sgMail.send({
    to: email,
    from: 'rock@rockurbody.com',
    subject: 'Reset Your Password',
    html: `Click here to reset: ${process.env.SITE_URL}/reset-password?token=${resetToken}`
  });
  
  res.json({ success: true });
});
```

### Option 2: Mailgun
Similar setup with Mailgun API

---

## Support

**Firebase Documentation:**
- [Email/Password Auth](https://firebase.google.com/docs/auth/web/password-auth)
- [Email Templates](https://firebase.google.com/docs/auth/custom-email-handler)

**Need Help?**
- Email: rock@rockurbody.com
- Include: error messages from browser console, email address used, screenshots
