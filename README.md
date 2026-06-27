# عرض تأسيس شركة تسويق ونمو رقمي وحلول تقنية

مشروع Next.js جاهز للنشر على Vercel، يعرض تصورًا إداريًا عربيًا بنمط وثيقة تنفيذية تفاعلية حول تأسيس شركة متخصصة في التسويق الرقمي وبرمجة المواقع والأنظمة وتطبيقات الجوال في الرياض.

## التقنيات

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- RTL Arabic layout
- خط عربي Tajawal

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

يمكن أيضًا استخدام pnpm:

```bash
pnpm install
pnpm dev
```

## أوامر مفيدة

```bash
npm run build
npm run start
npm run typecheck
```

## النشر على Vercel

1. ارفع المشروع إلى GitHub.
2. من Vercel اختر `New Project`.
3. اربط مستودع GitHub.
4. اترك الإعدادات الافتراضية:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output: Next.js default
5. اضغط Deploy.

## ملاحظات RTL

- كل الواجهة مضبوطة على `dir="rtl"` و`lang="ar"`.
- الواجهة مبنية كنظام وثيقة تنفيذية طويلة مع غلاف، ملخص، وفهرس جانبي ثابت.
