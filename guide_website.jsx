import React, { useState } from 'react';
import { MessageCircle, MapPin, Calendar, Users, Phone, Mail } from 'lucide-react';

export default function TouristGuideSite() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const whatsappNumber = '966555756546';
  const whatsappMessage = 'مرحباً، أنا مهتم بحجز باقة سياحية. هل يمكنك تزويدي بالمزيد من المعلومات؟';

  const packages = [
    {
      id: 1,
      name: 'برنامج عسير الأسبوعي',
      duration: '7 أيام - 6 ليالٍ',
      description: 'برنامج سياحي شامل يغطي أجمل مناطق عسير',
      destinations: ['أبها', 'رجال ألمع', 'تنومة', 'النماص'],
      highlights: [
        'زيارة معالم أبها التاريخية',
        'مزارع الفراولة والعنب',
        'منتزهات وطبيعة خلابة',
        'قرى تراثية وحصون تاريخية',
        'أنشطة ترفيهية متنوعة'
      ],
      price: 'يرجى التواصل للاستفسار'
    },
    {
      id: 2,
      name: 'جولة ثنائية الأيام',
      duration: '2 يوم - ليلة واحدة',
      description: 'جولة سريعة لاستكشاف أهم المعالم',
      destinations: ['أبها', 'الغابات'],
      highlights: [
        'جولة مدينة أبها',
        'المنتزهات والحدائق',
        'الطعام التقليدي',
        'التسوق والترفيه'
      ],
      price: 'يرجى التواصل للاستفسار'
    },
    {
      id: 3,
      name: 'جولة القرى التراثية',
      duration: '3 أيام - يومين ليلة',
      description: 'استكشاف القرى التراثية والحصون',
      destinations: ['رجال ألمع', 'تنومة', 'النماص'],
      highlights: [
        'القرى التراثية',
        'الحصون التاريخية',
        'الفنون والحرف اليدوية',
        'الطبيعة الجبلية'
      ],
      price: 'يرجى التواصل للاستفسار'
    }
  ];

  const handleWhatsappClick = (packageName) => {
    const message = `مرحباً، أنا مهتم بحجز: ${packageName}. هل يمكنك تزويدي بالمزيد من المعلومات والأسعار؟`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleWhatsappCall = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Ctext x='100' y='100' text-anchor='middle' dominant-baseline='middle' font-size='48' font-weight='bold' fill='%23000'%3ERAZI%3C/text%3E%3C/svg%3E" 
                alt="Logo"
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">راشد زهيان</h1>
                <p className="text-sm text-green-600 font-semibold">مرشد سياحي معتمد</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.5 4.5A.5.5 0 014 4h12a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5v-11z"/>
                </svg>
                <span className="text-sm font-semibold text-gray-700">رخصة السياحة: 40005052</span>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-gray-700 text-center font-semibold">
              برنامج سياحي متكامل في منطقة عسير 🏔️
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section with WhatsApp CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">استكشف جمال عسير معنا</h2>
          <p className="text-lg mb-8 opacity-90">برامج سياحية متنوعة وفريق متخصص لتجربة لا تُنسى</p>
          <button
            onClick={handleWhatsappCall}
            className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            <MessageCircle size={28} />
            اتصل بنا عبر WhatsApp الآن
          </button>
          <p className="text-sm mt-3 opacity-75">☎️ 0555756546</p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">الباقات السياحية</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              {/* Header with color */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Calendar size={18} />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                {/* Destinations */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-green-600" />
                    المناطق المشمولة
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.destinations.map((dest, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">المميزات:</h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="border-t pt-4 mb-4">
                  <p className="text-gray-600 text-sm font-semibold">{pkg.price}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleWhatsappClick(pkg.name)}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  احجز الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Itinerary Preview */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">نموذج من البرنامج اليومي</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-green-600 mb-4">اليوم الأول - الأحد</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-gray-700">الوصول واستقبال الضيوف</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-gray-700">زيارة معالم مدينة أبها</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-gray-700">قلعة شمسان والمدينة العالية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-gray-700">عشاء في أحد المطاعم التقليدية</span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">اليوم الثاني - الاثنين</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">→</span>
                  <span className="text-gray-700">زيارة مزارع الفراولة والعنب</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">→</span>
                  <span className="text-gray-700">منتزه السحاب للغداء</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">→</span>
                  <span className="text-gray-700">تلفريك أبها وممشى الضباب</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold">→</span>
                  <span className="text-gray-700">أنشطة ترفيهية مسائية</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">تواصل معنا</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MessageCircle size={32} className="text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">واتس آب</h3>
                  <a href={`https://wa.me/966555756546`} className="text-green-400 hover:text-green-300 text-lg font-semibold">
                    0555756546
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={32} className="text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">الهاتف</h3>
                  <p className="text-gray-300 text-lg">0555756546</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={32} className="text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">الموقع</h3>
                  <p className="text-gray-300">منطقة عسير، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold mb-6">لماذا تختارنا؟</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">مرشد سياحي معتمد بخبرة طويلة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">برامج مرنة قابلة للتخصيص</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">أسعار منافسة وعروض خاصة</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">رعاية فائقة واهتمام بالتفاصيل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">معرفة عميقة بمنطقة عسير</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Large CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleWhatsappCall}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-2xl"
            >
              <MessageCircle size={32} />
              احجز برنامجك السياحي الآن
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p className="mb-2">© 2024 راشد زهيان - مرشد سياحي معتمد</p>
        <p className="text-sm">رخصة السياحة: 40005052</p>
      </footer>
    </div>
  );
}
