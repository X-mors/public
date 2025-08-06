import React from 'react';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  BarChart3, 
  Settings, 
  Smartphone 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "ذكاء اصطناعي متقدم",
      description: "يستخدم خوارزميات ذكية لتحليل السوق واتخاذ قرارات التداول الأفضل"
    },
    {
      icon: Shield,
      title: "التريلينج ستوب المتطور",
      description: "تقنية التريلينج ستوب المتطورة لحماية الأرباح وتقليل المخاطر"
    },
    {
      icon: Zap,
      title: "سرعة فائقة",
      description: "تنفيذ فوري للصفقات مع استجابة سريعة لتغيرات السوق"
    },
    {
      icon: TrendingUp,
      title: "تحليل فني متقدم",
      description: "تحليل شامل للرسوم البيانية مع تقنية التريلينج ستوب الذكية"
    },
    {
      icon: Clock,
      title: "عمل 24/7",
      description: "يعمل على مدار الساعة لمراقبة الفرص في جميع الأوقات"
    },
    {
      icon: BarChart3,
      title: "تقارير مفصلة",
      description: "تقارير شاملة عن الأداء والأرباح مع تحليل التريلينج ستوب"
    },
    {
      icon: Settings,
      title: "تخصيص كامل",
      description: "إمكانية تخصيص إعدادات التريلينج ستوب حسب استراتيجيتك"
    },
    {
      icon: Smartphone,
      title: "تطبيق موبايل",
      description: "تحكم كامل من خلال تطبيق الهاتف المحمول"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مميزات Trailing.bot المتقدمة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            بوت التداول الذكي مع تقنية التريلينج ستوب مصمم بأحدث التقنيات لضمان أفضل النتائج وأعلى الأرباح
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">معدل دقة الإشارات</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+150%</div>
              <div className="text-primary-200">متوسط العائد السنوي</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0.1 ثانية</div>
              <div className="text-primary-200">سرعة تنفيذ الصفقات</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;