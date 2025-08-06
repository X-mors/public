import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "الخطة الأساسية",
      price: "299",
      period: "شهرياً",
      description: "مناسبة للمبتدئين في التداول",
      features: [
        "بوت تداول أساسي",
        "دعم فني محدود",
        "تقارير أسبوعية",
        "إعدادات أساسية",
        "عمل 12 ساعة يومياً"
      ],
      popular: false
    },
    {
      name: "الخطة المتقدمة",
      price: "599",
      period: "شهرياً",
      description: "الأكثر شعبية للمتداولين المحترفين",
      features: [
        "بوت تداول متقدم",
        "دعم فني 24/7",
        "تقارير يومية مفصلة",
        "تخصيص كامل للإعدادات",
        "عمل 24/7",
        "تحليل فني متقدم",
        "إدارة المخاطر"
      ],
      popular: true
    },
    {
      name: "الخطة الاحترافية",
      price: "999",
      period: "شهرياً",
      description: "للشركات والمتداولين المحترفين",
      features: [
        "بوت تداول احترافي",
        "دعم فني مخصص",
        "تقارير فورية",
        "تخصيص كامل",
        "عمل 24/7",
        "تحليل فني متقدم",
        "إدارة المخاطر المتقدمة",
        "تطبيق موبايل",
        "API مخصص"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            اختر الخطة المناسبة لك
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خطط مرنة تناسب جميع المستويات من المبتدئين إلى المحترفين
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 ml-1" />
                    الأكثر شعبية
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 mr-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-success-500 ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}>
                ابدأ الآن
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ضمان استرداد الأموال
            </h3>
            <p className="text-gray-600 mb-6">
              إذا لم تكن راضياً عن النتائج خلال أول 30 يوم، سنعيد لك كامل المبلغ المدفوع
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-success-500 ml-2" />
                <span className="text-gray-700">ضمان 30 يوم</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-success-500 ml-2" />
                <span className="text-gray-700">دعم فني مجاني</span>
              </div>
              <div className="flex items-center justify-center">
                <Check className="h-5 w-5 text-success-500 ml-2" />
                <span className="text-gray-700">تحديثات مجانية</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;