import React from 'react';
import { ArrowLeft, Play, Shield, Zap, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Trailing.bot
                <span className="block text-primary-200">بوت التداول الذكي</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                بوت تداول متقدم مع تقنية التريلينج ستوب المتطورة لتحقيق أعلى الأرباح في الأسواق المالية. 
                يحمي أرباحك تلقائياً ويعمل على مدار الساعة لمراقبة الفرص.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-200">+85%</div>
                <div className="text-sm text-primary-100">معدل الربح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-200">24/7</div>
                <div className="text-sm text-primary-100">عمل مستمر</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-200">+500</div>
                <div className="text-sm text-primary-100">عميل راضي</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                <ArrowLeft className="ml-2 h-5 w-5" />
                ابدأ التداول الآن
              </button>
              <button className="btn-secondary bg-transparent text-white border-white hover:bg-white hover:text-primary-600">
                <Play className="ml-2 h-5 w-5" />
                شاهد العرض التوضيحي
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-3 h-3 bg-success-400 rounded-full"></div>
                  <span className="text-sm">متصل - يعمل بشكل طبيعي</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-200">BTC/USDT</span>
                    <span className="text-success-400 font-semibold">+2.45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-200">ETH/USDT</span>
                    <span className="text-red-400 font-semibold">-1.23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-200">ADA/USDT</span>
                    <span className="text-success-400 font-semibold">+5.67%</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary-200">إجمالي الأرباح اليوم</span>
                    <span className="text-success-400 font-bold">$1,247.89</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;