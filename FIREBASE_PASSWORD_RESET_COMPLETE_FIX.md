# Complete Firebase Password Reset Fix

## 🚨 Current Issue
Password reset emails are not being sent due to Firebase domain configuration issues.

## 🔧 Step-by-Step Fix

### Step 1: Firebase Console Configuration

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Select your project: `rockurbody` (or your project name)

2. **Configure Authentication Settings**
   - Click **Authentication** in the left sidebar
   - Click **Settings** tab
   - Scroll down to **Authorized domains**

3. **Add ALL Required Domains**
   ```
   localhost
   rockurbody.com
   www.rockurbody.com
   rockurbody.vercel.app
   ```

4. **Click "Add domain" for each one**

### Step 2: Configure Email Templates

1. **Go to Email Templates**
   - In Authentication → **Templates** (or **Email Templates**)
   - Click **Password reset**

2. **Configure Template Settings**
   ```
   From name: Rock Your Body
   From email: noreply@rockurbody.com
   Subject: Reset your Rock Your Body password
   ```

3. **Customize Email Body** (optional)
   - Add your branding
   - Include contact information
   - Make it professional

### Step 3: Verify Firebase Configuration

1. **Check Project Settings**
   - Go to **Project Settings** (gear icon)
   - Verify **Project ID** matches your environment variable
   - Check **Web API Key** is correct

2. **Verify Environment Variables**
   Your `.env` file should have:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Step 4: Test the Fix

1. **Clear browser cache**
2. **Try password reset**
3. **Check browser console** (F12) for errors
4. **Check spam folder**

## 🔍 Troubleshooting

### Common Error Messages & Solutions

#### "Domain not allowlisted by project"
- **Solution**: Add your domain to Firebase Console → Authentication → Settings → Authorized domains
- **Domains to add**: `rockurbody.com`, `www.rockurbody.com`, `rockurbody.vercel.app`

#### "Invalid API key"
- **Solution**: Check your `VITE_FIREBASE_API_KEY` in environment variables
- **Verify**: Go to Firebase Console → Project Settings → General → Web API Key

#### "Project not found"
- **Solution**: Verify `VITE_FIREBASE_PROJECT_ID` matches your Firebase project
- **Check**: Firebase Console → Project Settings → General → Project ID

#### "Email not arriving"
- **Check spam folder** (most common issue)
- **Wait 5-10 minutes** (Firebase emails can be delayed)
- **Verify email exists** in your Firebase users list
- **Check email template** is configured

### Advanced Debugging

1. **Enable Firebase Debug Mode**
   ```javascript
   // Add to your Firebase config
   if (import.meta.env.DEV) {
     console.log('Firebase config:', firebaseConfig);
   }
   ```

2. **Check Network Tab**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Try password reset
   - Look for failed requests to Firebase

3. **Firebase Console Logs**
   - Go to Firebase Console → Authentication → Users
   - Look for error messages in the logs

## 🛠️ Alternative Solutions

### Option 1: Manual Password Reset
If emails continue to fail, you can manually reset passwords:

1. **Go to Firebase Console**
2. **Authentication → Users**
3. **Find the user**
4. **Click three dots → Reset password**

### Option 2: Custom Email Service
If Firebase emails are unreliable, consider:

1. **SendGrid Integration**
2. **AWS SES**
3. **Mailgun**
4. **Custom SMTP**

### Option 3: Google OAuth
Add Google sign-in as an alternative:

1. **Enable Google Provider** in Firebase Console
2. **Add Google OAuth** to your app
3. **Users can sign in with Google** instead of email/password

## 📧 Email Delivery Best Practices

### Improve Email Deliverability

1. **Set up SPF Record**
   ```
   v=spf1 include:_spf.google.com ~all
   ```

2. **Set up DKIM**
   - Use Firebase's DKIM settings
   - Verify domain ownership

3. **Use Custom Domain**
   - Set up `noreply@rockurbody.com`
   - Configure in Firebase email templates

### Monitor Email Delivery

1. **Check Firebase Console**
   - Authentication → Users
   - Look for delivery status

2. **Set up Monitoring**
   - Firebase Analytics
   - Custom logging
   - Error tracking

## 🧪 Testing Checklist

- [ ] Domain added to authorized domains
- [ ] Email template configured
- [ ] Environment variables correct
- [ ] Browser cache cleared
- [ ] Tried password reset
- [ ] Checked spam folder
- [ ] Waited 5+ minutes
- [ ] Verified correct Firebase project
- [ ] Checked browser console for errors
- [ ] Tested with different email addresses

## 📞 If All Else Fails

1. **Contact Firebase Support**
   - https://firebase.google.com/support
   - Include your project ID and domain

2. **Check Firebase Status**
   - https://status.firebase.google.com/
   - Look for service outages

3. **Alternative Authentication**
   - Implement Google OAuth
   - Use a different email service
   - Consider phone number authentication

## 🔄 Quick Fix Commands

If you need to quickly test the configuration:

```bash
# Check environment variables
echo $VITE_FIREBASE_API_KEY
echo $VITE_FIREBASE_PROJECT_ID

# Test Firebase connection
npm run dev
# Open browser console and check for Firebase errors
```

## 📋 Final Verification

After implementing the fix:

1. **Test password reset** with a real email
2. **Check email arrives** within 5 minutes
3. **Verify reset link works** and redirects properly
4. **Test on different devices/browsers**
5. **Monitor for any error messages**

---

**Last Updated**: [Current Date]
**Status**: Ready for implementation
**Priority**: High - affects user authentication
