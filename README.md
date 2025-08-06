# Trailing.bot - موقع بوت التداول الذكي

موقع احترافي لبيع بوت التداول الخاص بك مع واجهة عربية حديثة وجذابة.

## 🌐 عرض الموقع مباشرة

**الموقع متاح على**: [https://[YOUR-USERNAME].github.io/trailing-bot](https://[YOUR-USERNAME].github.io/trailing-bot)

## المميزات

- 🎨 تصميم حديث ومتجاوب
- 🌐 دعم كامل للغة العربية
- 📱 متوافق مع جميع الأجهزة
- ⚡ سريع ومحسن للأداء
- 🔒 آمن ومحمي
- 📊 إحصائيات وتقارير مفصلة
- 🎯 تقنية التريلينج ستوب المتطورة

## التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لكتابة كود آمن ومنظم
- **Tailwind CSS** - لتنسيق سريع وجميل
- **Lucide React** - أيقونات حديثة
- **Framer Motion** - حركات وتأثيرات

## النشر على GitHub Pages

### الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على "New repository"
3. سمِّه `trailing-bot`
4. اتركه public
5. اضغط "Create repository"

### الخطوة 2: رفع الكود إلى GitHub

```bash
# تهيئة Git
git init

# إضافة الملفات
git add .

# عمل commit
git commit -m "Initial commit - Trailing.bot website"

# إضافة remote
git remote add origin https://github.com/[YOUR-USERNAME]/trailing-bot.git

# رفع الكود
git push -u origin main
```

### الخطوة 3: تثبيت التبعيات والنشر

```bash
# تثبيت التبعيات
npm install

# النشر على GitHub Pages
npm run deploy
```

### الخطوة 4: تفعيل GitHub Pages

1. اذهب إلى repository على GitHub
2. اضغط على "Settings"
3. ابحث عن "Pages" في القائمة الجانبية
4. في "Source" اختر "Deploy from a branch"
5. اختر branch: `gh-pages`
6. اضغط "Save"

## النشر على Vercel (أسهل وأسرع)

### الطريقة الأولى: عبر Vercel Dashboard

1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط "New Project"
3. اربط حساب GitHub
4. اختر repository `trailing-bot`
5. اضغط "Deploy"

### الطريقة الثانية: عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

## التثبيت والتشغيل المحلي

### المتطلبات الأساسية

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
   ```bash
   git clone https://github.com/[YOUR-USERNAME]/trailing-bot.git
   cd trailing-bot
   ```

2. **تثبيت التبعيات**
   ```bash
   npm install
   ```

3. **تشغيل المشروع في وضع التطوير**
   ```bash
   npm start
   ```

4. **فتح المتصفح**
   انتقل إلى `http://localhost:3000`

### بناء المشروع للإنتاج

```bash
npm run build
```

## هيكل المشروع

```
src/
├── components/          # مكونات React
│   ├── Header.tsx     # رأس الصفحة
│   ├── Hero.tsx       # القسم الرئيسي
│   ├── Features.tsx   # المميزات
│   ├── Pricing.tsx    # الأسعار
│   ├── Testimonials.tsx # آراء العملاء
│   ├── Contact.tsx    # صفحة الاتصال
│   └── Footer.tsx     # تذييل الصفحة
├── App.tsx            # المكون الرئيسي
├── index.tsx          # نقطة البداية
└── index.css          # الأنماط الرئيسية
```

## التخصيص

### تغيير اسم المستخدم في GitHub Pages

عدّل ملف `package.json`:
```json
{
  "homepage": "https://[YOUR-USERNAME].github.io/trailing-bot"
}
```

### تغيير الألوان

يمكنك تخصيص الألوان من خلال تعديل ملف `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... المزيد من الألوان
  }
}
```

### تغيير المحتوى

يمكنك تعديل النصوص والمحتوى من خلال تعديل الملفات في مجلد `components/`.

## الدعم

إذا واجهت أي مشاكل أو لديك أسئلة:

- 📧 البريد الإلكتروني: support@trailing.bot
- 📱 الهاتف: +966 50 123 4567
- 💬 الدردشة المباشرة: متاحة على الموقع

## الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف `LICENSE` للتفاصيل.

## المساهمة

نرحب بمساهماتكم! يرجى:

1. عمل Fork للمشروع
2. إنشاء فرع جديد للميزة
3. إجراء التغييرات
4. إرسال Pull Request

## التحديثات القادمة

- [ ] إضافة نظام تسجيل دخول
- [ ] لوحة تحكم للمستخدمين
- [ ] نظام دفع إلكتروني
- [ ] تطبيق موبايل
- [ ] API للبوت

---

**ملاحظة**: هذا الموقع مصمم للعرض والتسويق. البوت الفعلي يتطلب تطوير منفصل.