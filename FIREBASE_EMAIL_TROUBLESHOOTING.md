# Firebase Password Reset Email Troubleshooting

## Common Issues & Solutions

### 1. Email Not Arriving

**Most Common Causes:**

#### A. Firebase Email Templates Not Configured
Firebase requires you to configure email templates in the Firebase Console.

**Solution:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Authentication** → **Templates** (or **Email Templates**)
4. Click on **Password reset**
5. Customize the email template:
   - **From name**: Rock Your Body
   - **From email**: noreply@rockurbody.com (or your verified domain)
   - **Subject**: Reset your Rock Your Body password
   - **Body**: Customize the message
6. Click **Save**

#### B. Email Domain Not Verified
Firebase may not send emails if your domain isn't verified.

**Solution:**
1. In Firebase Console → **Authentication** → **Settings**
2. Under **Authorized domains**, add:
   - `rockurbody.com`
   - `www.rockurbody.com`
   - Your Vercel deployment URL (e.g., `rockurbody.vercel.app`)
3. Click **Add domain**

#### C. Spam Folder
Password reset emails often end up in spam.

**Solution:**
- Check spam/junk folder
- Mark as "Not Spam" to whitelist future emails
- Add `noreply@rockurbody.firebaseapp.com` to contacts

#### D. Email Delay
Firebase emails can take 1-5 minutes to arrive.

**Solution:**
- Wait at least 5 minutes before trying again
- Don't click "Send Reset Link" multiple times rapidly

#### E. Email Doesn't Exist
Firebase won't send an email if the account doesn't exist (for security).

**Solution:**
- Verify the email address is correct
- Try signing up if you haven't created an account yet
- Check if you used a different email to register

---

### 2. Firebase Configuration Issues

#### Check Environment Variables
Ensure all Firebase environment variables are set in Vercel:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**To verify on Vercel:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Ensure all `VITE_FIREBASE_*` variables are set
5. Redeploy if you added/changed variables

---

### 3. Firebase Console Email Settings

#### Enable Email/Password Authentication
1. Firebase Console → **Authentication** → **Sign-in method**
2. Ensure **Email/Password** is **Enabled**
3. Check **Email link (passwordless sign-in)** is configured if needed

#### Check Email Sending Limits
Firebase has daily email limits on the free plan:
- **Spark (Free)**: ~100 emails/day
- **Blaze (Pay-as-you-go)**: Higher limits

**Solution:**
- Check Firebase Console → **Usage** tab
- Upgrade to Blaze plan if needed

---

### 4. Testing Password Reset Locally

#### Test with Console Logging
The code now includes logging. Check browser console:

```javascript
// Should see:
"Password reset email sent successfully to: user@example.com"

// Or if error:
"Password reset error: [error details]"
```

#### Test with Different Email Providers
Some email providers are stricter than others:
- ✅ Gmail: Usually works well
- ✅ Outlook/Hotmail: Works well
- ⚠️ Yahoo: Sometimes delayed
- ⚠️ Custom domains: May need SPF/DKIM setup

---

### 5. Advanced Configuration

#### Custom Email Domain (Optional)
To send emails from your own domain instead of Firebase:

1. **Set up SendGrid, Mailgun, or similar**
2. **Configure Firebase Cloud Functions** to intercept auth emails
3. **Send via your email service**

This requires Firebase Blaze plan and Cloud Functions setup.

#### Action Code Settings
The code now includes `actionCodeSettings`:

```javascript
const actionCodeSettings = {
  url: `${window.location.origin}/auth/login`,
  handleCodeInApp: false,
};
```

This ensures users are redirected to your login page after resetting.

---

### 6. Debugging Steps

#### Step 1: Check Browser Console
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Try password reset
4. Look for:
   - "Password reset email sent successfully"
   - Any error messages

#### Step 2: Check Network Tab
1. Open DevTools → **Network** tab
2. Try password reset
3. Look for Firebase API calls
4. Check response status (should be 200)

#### Step 3: Check Firebase Console Logs
1. Firebase Console → **Authentication** → **Users**
2. Verify the user exists
3. Check **Usage** tab for email sending stats

#### Step 4: Test with Firebase Auth Emulator (Local Development)
```bash
# Install Firebase tools
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize emulator
firebase init emulators

# Start emulator
firebase emulators:start --only auth
```

Update `.env.local`:
```bash
VITE_FIREBASE_AUTH_DOMAIN=localhost:9099
```

---

### 7. Common Error Codes

| Error Code | Meaning | Solution |
|------------|---------|----------|
| `auth/user-not-found` | Email not registered | User needs to sign up first |
| `auth/invalid-email` | Email format invalid | Check email format |
| `auth/too-many-requests` | Rate limit exceeded | Wait 15 minutes, try again |
| `auth/network-request-failed` | Network issue | Check internet connection |
| `auth/invalid-api-key` | Firebase config wrong | Check environment variables |

---

### 8. Production Checklist

Before going live, ensure:

- [ ] Firebase project is in production mode
- [ ] Email templates are customized
- [ ] Authorized domains include production URL
- [ ] Environment variables are set in Vercel
- [ ] Email/Password auth is enabled
- [ ] Tested with multiple email providers
- [ ] Spam folder checked
- [ ] Email sending limits are sufficient
- [ ] Error handling is in place
- [ ] User-friendly error messages displayed

---

### 9. Alternative: Manual Password Reset

If Firebase emails continue to fail, you can manually reset passwords:

#### Option A: Firebase Console
1. Firebase Console → **Authentication** → **Users**
2. Find the user
3. Click three dots → **Reset password**
4. Firebase will send email directly

#### Option B: Temporary Workaround
Create a backend endpoint to send emails via your own service:

```javascript
// server.cjs
app.post('/api/send-reset-email', async (req, res) => {
  const { email } = req.body;
  
  // Generate custom reset token
  // Send via SendGrid/Mailgun/etc.
  // Store token in database
  
  res.json({ success: true });
});
```

---

### 10. Contact Support

If none of these solutions work:

**Firebase Support:**
- [Firebase Support](https://firebase.google.com/support)
- [Stack Overflow - Firebase](https://stackoverflow.com/questions/tagged/firebase)

**Rock Your Body Support:**
- Email: rock@rockurbody.com
- Include:
  - Email address you're trying to reset
  - Error messages from browser console
  - Screenshots of the issue

---

## Quick Fix Checklist

Try these in order:

1. ✅ Check spam folder
2. ✅ Wait 5 minutes for email to arrive
3. ✅ Verify email address is correct and registered
4. ✅ Check Firebase Console → Templates → Password reset is configured
5. ✅ Check Firebase Console → Authentication → Email/Password is enabled
6. ✅ Check Vercel environment variables are set
7. ✅ Try with a different email provider (Gmail)
8. ✅ Check browser console for errors
9. ✅ Try manual reset from Firebase Console
10. ✅ Contact rock@rockurbody.com if still not working

---

## Implementation Notes

### Current Code Features:
- ✅ Action code settings configured
- ✅ Console logging for debugging
- ✅ Error handling with user-friendly messages
- ✅ Comprehensive troubleshooting UI
- ✅ Spam folder reminder
- ✅ Email delay notice
- ✅ Contact information for support

### Future Enhancements:
- [ ] Custom email service integration
- [ ] Email verification before password reset
- [ ] SMS-based password reset option
- [ ] Magic link authentication
- [ ] Two-factor authentication
