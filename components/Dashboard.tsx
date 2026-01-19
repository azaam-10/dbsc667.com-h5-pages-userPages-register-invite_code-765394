
import React from 'react';
import { Bell, Plus, Home, LayoutGrid, ShoppingBag, Headphones, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen custom-gradient flex flex-col pb-24">
      {/* Top Header */}
      <header className="px-6 pt-6 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-[#1C1C1C] tracking-tight">192144.35 ل.س</h1>
          <span className="text-[#7A7A7A] opacity-60 text-base mt-1">أموال الحساب</span>
        </div>
        <div className="flex flex-col items-end gap-6">
          <button className="text-[#1C1C1C] active:opacity-60 transition-opacity">
            <Bell size={24} strokeWidth={2} />
          </button>
          <button className="w-11 h-11 bg-[#2F80ED] rounded-full flex items-center justify-center text-white shadow-md active:scale-95 transition-transform">
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
      </header>

      {/* Blue Stats Card */}
      <section className="mx-4 mt-8 bg-[#2F80ED] rounded-[2rem] p-6 text-white shadow-lg">
        <div className="text-base font-medium opacity-90 mb-10 border-b border-white/20 pb-2">
          العمولة 30.00% | 12 الطلبات
        </div>
        <div className="flex justify-between items-center text-center">
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">1</div>
            <div className="text-sm opacity-80">غير مكتمل</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">12</div>
            <div className="text-sm opacity-80">الكل</div>
          </div>
          <div className="flex-1">
            <div className="text-4xl font-bold mb-1">10</div>
            <div className="text-sm opacity-80">تم الاكتمال</div>
          </div>
        </div>
      </section>

      {/* White Info Card */}
      <section className="mx-4 mt-6 bg-white rounded-[2rem] p-8 shadow-sm flex flex-col gap-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col text-right">
            <span className="text-2xl font-bold text-[#1C1C1C]">174684.07 ل.س</span>
            <span className="text-sm text-[#7A7A7A] mt-1 font-medium">العمولة المكتسبة</span>
          </div>
          <div className="flex flex-col text-left items-end">
            <span className="text-2xl font-bold text-[#1C1C1C]">0.00 ل.س</span>
            <span className="text-sm text-[#7A7A7A] mt-1 font-medium text-left">المبلغ المجمد</span>
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex flex-col text-right">
            <span className="text-2xl font-bold text-[#1C1C1C]">10</span>
            <span className="text-sm text-[#7A7A7A] mt-1 font-medium">عدد الطلبات المكتملة</span>
          </div>
          <div className="flex flex-col text-left items-end">
            <span className="text-2xl font-bold text-[#1C1C1C]">192144.35 ل.س</span>
            <span className="text-sm text-[#7A7A7A] mt-1 font-medium text-left">المبلغ المتاح</span>
          </div>
        </div>

        <button className="mt-2 w-full bg-[#2F80ED] text-white py-5 rounded-xl font-bold text-lg active:bg-[#256ac7] transition-colors shadow-blue-200 shadow-lg">
          ابدأ في استلام الطلبات
        </button>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-8 py-5 flex justify-between items-center z-50">
        <button className="text-gray-400 active:text-[#2F80ED]">
          <Home size={32} />
        </button>
        <button className="text-gray-400 active:text-[#2F80ED]">
          <LayoutGrid size={32} />
        </button>
        <button className="text-[#2F80ED] relative">
          <ShoppingBag size={32} fill="currentColor" />
        </button>
        <button className="text-gray-400 active:text-[#2F80ED]">
          <Headphones size={32} />
        </button>
        <button className="text-gray-400 active:text-[#2F80ED]">
          <User size={32} />
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
