import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <TrendingUp className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">بوت التداول الذكي</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              المميزات
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              الأسعار
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
              آراء العملاء
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              اتصل بنا
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                المميزات
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                الأسعار
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                آراء العملاء
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                اتصل بنا
              </a>
              <button className="w-full mt-4 btn-primary">
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;