# Vercel DNS Records Troubleshooting

## 🔧 If Vercel Doesn't Show DNS Records

### Step 1: Check Domain Status in Vercel

1. **Go to your Vercel project dashboard**
2. **Click on Settings → Domains**
3. **Look for your domain status**

**Possible Statuses:**
- ✅ **Valid Configuration** - Shows DNS records
- ⏳ **Pending** - Still processing
- ❌ **Invalid Configuration** - Needs troubleshooting
- 🔄 **Propagating** - DNS is updating

### Step 2: Manual DNS Configuration

If Vercel doesn't show records, use these standard Vercel DNS records:

#### For Apex Domain (rockurbody.com):
```
Type: A
Name: @
Value: 76.76.19.61
TTL: 3600 (or default)
```

#### For WWW Subdomain (www.rockurbody.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or default)
```

#### Alternative Apex Configuration:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (or default)
```

### Step 3: Force Domain Configuration

1. **Remove the domain** from Vercel (if added)
2. **Wait 5 minutes**
3. **Re-add the domain**
4. **Check if DNS records appear**

### Step 4: Check Domain Registrar

Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these records:

#### GoDaddy Instructions:
1. Log into GoDaddy
2. Go to **My Products → DNS**
3. Find `rockurbody.com`
4. Click **Manage DNS**
5. Add these records:

```
Type: A
Name: @
Value: 76.76.19.61
TTL: 1 Hour

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 1 Hour
```

#### Namecheap Instructions:
1. Log into Namecheap
2. Go to **Domain List**
3. Click **Manage** next to `rockurbody.com`
4. Go to **Advanced DNS** tab
5. Add these records:

```
Type: A Record
Host: @
Value: 76.76.19.61
TTL: 5 min

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: 5 min
```

#### Cloudflare Instructions:
1. Log into Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Add these records:

```
Type: A
Name: @
Value: 76.76.19.61
Proxy: OFF (gray cloud)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
Proxy: OFF (gray cloud)
```

### Step 5: Verify DNS Propagation

After adding DNS records, check propagation:

1. **Visit**: [whatsmydns.net](https://whatsmydns.net)
2. **Enter**: `rockurbody.com`
3. **Check**: A record should show `76.76.19.61`

### Step 6: Alternative Method - Use Vercel CLI

If dashboard doesn't work, try CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Add domain via CLI
vercel domains add rockurbody.com

# Check domain status
vercel domains ls
```

### Step 7: Contact Vercel Support

If nothing works:

1. **Go to**: [vercel.com/help](https://vercel.com/help)
2. **Create support ticket**
3. **Include**:
   - Your project name
   - Domain name
   - Screenshot of domain settings
   - Error messages (if any)

### Step 8: Alternative - Use Different DNS Provider

If Vercel continues to have issues:

1. **Use Cloudflare DNS** (free)
2. **Point your domain** to Cloudflare nameservers
3. **Add Vercel records** in Cloudflare
4. **This often works better** than registrar DNS

## 🔍 Common Issues & Solutions

### Issue 1: "Domain not verified"
**Solution**: Wait for DNS propagation (up to 24 hours)

### Issue 2: "Invalid configuration"
**Solution**: 
- Check DNS records are exactly as shown above
- Make sure TTL is not too high (use 3600 or lower)
- Ensure no conflicting records exist

### Issue 3: "SSL certificate pending"
**Solution**: Wait 5-10 minutes after DNS resolves

### Issue 4: Domain shows "Pending" forever
**Solution**:
- Remove and re-add domain
- Check if domain has existing DNS records
- Contact domain registrar for help

## 🎯 Quick Test Commands

After adding DNS records, test with these commands:

```bash
# Check DNS resolution
nslookup rockurbody.com
dig rockurbody.com

# Should show:
# rockurbody.com.    3600    IN    A    76.76.19.61
```

## 📞 Need Help?

If you're still having issues:

1. **Check Vercel Status**: [vercel-status.com](https://vercel-status.com)
2. **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
3. **Domain Registrar Support**: Contact your registrar's support

## 🚀 Alternative: Temporary Solution

If you need to go live immediately:

1. **Use Vercel's default domain** for now
2. **Your site is live** at: `rockurbody.vercel.app`
3. **Configure custom domain** later when DNS issues are resolved

---

**Your site is ready to go live regardless!** The domain connection is just the final step. 🚀
