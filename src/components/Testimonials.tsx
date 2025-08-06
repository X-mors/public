import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "متداول محترف",
      rating: 5,
      text: "بعد استخدام البوت لمدة 6 أشهر، حققت أرباحاً تفوق توقعاتي. البوت يعمل بشكل ممتاز ويدير المخاطر بشكل احترافي.",
      avatar: "AM"
    },
    {
      name: "سارة أحمد",
      role: "مستثمرة مبتدئة",
      rating: 5,
      text: "كنت خائفة من التداول، لكن البوت ساعدني في فهم السوق وتحقيق أرباح جيدة. الدعم الفني ممتاز أيضاً.",
      avatar: "سأ"
    },
    {
      name: "محمد علي",
      role: "مدير صندوق استثماري",
      rating: 5,
      text: "نستخدم البوت في شركتنا منذ عام، والنتائج مذهلة. معدل الربح السنوي وصل إلى 180%.",
      avatar: "مع"
    },
    {
      name: "فاطمة حسن",
      role: "متداولة يومية",
      rating: 5,
      text: "البوت ساعدني في تحقيق استقلال مالي. الآن أعمل من المنزل وأربح أكثر من وظيفتي السابقة.",
      avatar: "فح"
    },
    {
      name: "علي محمود",
      role: "مهندس برمجيات",
      rating: 5,
      text: "كخبير في البرمجة، أعتبر هذا البوت من أفضل الحلول التقنية في مجال التداول الآلي.",
      avatar: "عم"
    },
    {
      name: "نور الدين",
      role: "متداول خبير",
      rating: 5,
      text: "جربت العديد من البوتات، لكن هذا البوت متفوق من حيث الدقة والسرعة والأمان.",
      avatar: "ند"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            انضم إلى آلاف العملاء الراضين الذين حققوا أرباحاً مذهلة باستخدام بوت التداول الذكي
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-end">
                  <Quote className="h-8 w-8 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 space-x-reverse">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">+5000</div>
              <div className="text-primary-200">عميل نشط</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-200">تقييم متوسط</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+$2M</div>
              <div className="text-primary-200">أرباح إجمالية</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-primary-200">عملاء راضون</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;