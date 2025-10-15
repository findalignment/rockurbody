# Firebase Domain Allowlist Fix

## 🚨 Current Issue
**Error**: `Domain not allowlisted by project (auth/unauthorized-continue-uri)`

This happens when your domain isn't added to Firebase's authorized domains list.

## 🔧 Immediate Fix

### Step 1: Add Your Domain to Firebase Console

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project

2. **Navigate to Authentication Settings**
   - Click **Authentication** in the left sidebar
   - Click **Settings** tab
   - Scroll down to **Authorized domains**

3. **Add Required Domains**
   Add these domains to the authorized list:
   ```
   localhost
   rockurbody.com
   www.rockurbody.com
   rockurbody.vercel.app
   ```

4. **Click "Add domain" for each one**

### Step 2: Verify Email Templates

1. **Go to Email Templates**
   - In Authentication → **Templates** (or **Email Templates**)
   - Click **Password reset**

2. **Configure Template**
   ```
   From name: Rock Your Body
   From email: noreply@rockurbody.com
   Subject: Reset your Rock Your Body password
   ```

3. **Customize the email body** with your branding

### Step 3: Test the Fix

1. **Clear browser cache**
2. **Try password reset again**
3. **Check spam folder** if email doesn't arrive

## 🔍 Troubleshooting

### If Still Not Working:

1. **Check Domain Format**
   - Make sure domains are exactly: `rockurbody.vercel.app` (no https://)
   - No trailing slashes

2. **Verify Project ID**
   - Make sure you're in the correct Firebase project
   - Check that `VITE_FIREBASE_PROJECT_ID` matches

3. **Wait for Propagation**
   - Changes can take 5-10 minutes to propagate
   - Try again after waiting

4. **Check Firebase Console Logs**
   - Go to Authentication → **Users**
   - Look for error messages in the logs

## 🛠️ Alternative Solution: Custom Domain

If the issue persists, you can set up a custom domain:

1. **In Firebase Console**
   - Go to **Hosting**
   - Click **Add custom domain**
   - Add `rockurbody.com`

2. **Update DNS**
   - Add the Firebase DNS records to your domain
   - Wait for DNS propagation (up to 24 hours)

## 📧 Email Delivery Issues

### Common Causes:
- **Spam filters**: Check spam/junk folder
- **Email provider blocking**: Some providers block Firebase emails
- **Domain reputation**: New domains may have delivery issues

### Solutions:
1. **Use a verified domain email** (noreply@rockurbody.com)
2. **Set up SPF/DKIM records** for better deliverability
3. **Contact your email provider** if emails are being blocked

## 🔄 Testing Checklist

- [ ] Domain added to authorized domains
- [ ] Email template configured
- [ ] Browser cache cleared
- [ ] Tried password reset
- [ ] Checked spam folder
- [ ] Waited 5+ minutes
- [ ] Verified correct Firebase project

## 📞 If All Else Fails

1. **Manual Password Reset**
   - Go to Firebase Console → Authentication → Users
   - Find the user
   - Click three dots → Reset password

2. **Contact Support**
   - Firebase Support: https://firebase.google.com/support
   - Include your project ID and domain

3. **Alternative Authentication**
   - Consider implementing Google OAuth
   - Or use a different email service (SendGrid, etc.)
