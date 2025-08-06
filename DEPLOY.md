# 🚀 نشر Trailing.bot على GitHub Pages

## الطريقة السريعة (5 دقائق)

### 1. إنشاء Repository على GitHub
- اذهب إلى [GitHub](https://github.com)
- اضغط "New repository"
- سمِّه `trailing-bot`
- اتركه public
- اضغط "Create repository"

### 2. رفع الكود
```bash
# تهيئة Git
git init
git add .
git commit -m "Initial commit - Trailing.bot website"

# إضافة remote (استبدل [YOUR-USERNAME] باسم المستخدم الحقيقي)
git remote add origin https://github.com/[YOUR-USERNAME]/trailing-bot.git
git push -u origin main
```

### 3. تثبيت التبعيات والنشر
```bash
# تثبيت التبعيات
npm install

# النشر على GitHub Pages
npm run deploy
```

### 4. تفعيل GitHub Pages
- اذهب إلى repository على GitHub
- اضغط "Settings"
- ابحث عن "Pages" في القائمة الجانبية
- اختر "Deploy from a branch"
- اختر branch: `gh-pages`
- اضغط "Save"

### 5. الموقع جاهز! 🎉
```
https://[YOUR-USERNAME].github.io/trailing-bot
```

## النشر على Vercel (أسهل)

### الطريقة الأولى: عبر Vercel Dashboard
1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط "New Project"
3. اربط حساب GitHub
4. اختر repository `trailing-bot`
5. اضغط "Deploy"

### الطريقة الثانية: عبر Vercel CLI
```bash
npm i -g vercel
vercel
```

## استبدال [YOUR-USERNAME]

في ملف `package.json`:
```json
{
  "homepage": "https://[YOUR-USERNAME].github.io/trailing-bot"
}
```

استبدل `[YOUR-USERNAME]` باسم المستخدم الحقيقي على GitHub.

## مثال:
إذا كان اسم المستخدم `ahmed123`:
```json
{
  "homepage": "https://ahmed123.github.io/trailing-bot"
}
```

## 🔧 حل المشاكل الشائعة

### إذا لم يظهر الموقع:
1. تأكد من أن repository public
2. انتظر 5-10 دقائق بعد النشر
3. تحقق من إعدادات GitHub Pages

### إذا ظهرت أخطاء في البناء:
```bash
npm run build
```
ثم تحقق من الأخطاء في Terminal.

## 📞 الدعم
- 📧 support@trailing.bot
- 📱 +966 50 123 4567