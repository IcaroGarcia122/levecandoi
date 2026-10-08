import { useState } from 'react';
import {
  Check,
  Clock,
  ExternalLink,
  Info,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShoppingBag,
  Star,
  ChevronRight,
  X,
} from 'lucide-react';

import bgImage from './assets/fachada.png';
import logoImage from './assets/logo-candoi.png';

function Logo({ className = 'w-44' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={logoImage}
        alt="Lojas Leve Candói"
        className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
      />
    </div>
  );
}

function StoreInfoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md max-h-[92dvh] flex flex-col rounded-t-[28px] sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#13223B] to-[#0A1322] shadow-2xl text-white overflow-hidden pb-[env(safe-area-inset-bottom,0px)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-white/10 shrink-0">
          <div>
            <h3 className="font-display text-xl tracking-wide text-white">Informações da Loja</h3>
            <p className="text-xs text-[#FF9E42]">Lojas Leve Candói · Confecções & Calçados</p>
          </div>
          <button
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 active:scale-95 hover:text-white transition-all shrink-0 ml-2 cursor-pointer"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 overflow-y-auto overscroll-contain flex-1">
          {/* Phone */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <Phone className="size-4" />
              <span>Telefone para Contato</span>
            </div>
            <div className="space-y-2">
              <a
                href="tel:42999648272"
                className="flex items-center justify-between p-3 rounded-xl bg-black/20 hover:bg-black/40 border border-white/5 active:scale-[0.99] transition-all group touch-manipulation"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#FF7A00]">
                    (42) 99964-8272
                  </div>
                  <div className="text-xs text-white/60">Atendimento Lojas Leve Candói</div>
                </div>
                <span className="text-xs font-medium text-[#FF7A00] bg-[#FF7A00]/15 px-3 py-1.5 rounded-full">
                  Ligar
                </span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <MapPin className="size-4" />
              <span>Endereço & Localização</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Centro de Candói, Paraná — Próximo aos principais comércios do centro da cidade.
            </p>
            <a
              href="https://www.google.com/search?kgmid=/g/11zky07qf6&hl=pt-BR&q=Lojas+Leve+-+Cand%C3%B3i&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/3&kgs=83d5e32318229df1&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF7A00] hover:underline touch-manipulation py-1"
            >
              <span>Abrir no Google</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A00]">
              <Clock className="size-4" />
              <span>Horário de Atendimento</span>
            </div>
            <div className="text-xs text-white/80 space-y-1.5">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium text-white">08:30 às 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span className="font-medium text-white">08:30 às 13:00</span>
              </div>
              <div className="flex justify-between text-white/50">
                <span>Domingos e Feriados:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/20 text-center shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-xs font-semibold text-white transition-all touch-manipulation cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

function Toast({ message, show }: { message: string; show: boolean }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-[#FF7A00] px-4 py-2.5 text-xs font-semibold text-[#0B1320] shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200 pointer-events-none select-none">
      <Check className="size-4 stroke-[3]" />
      <span>{message}</span>
    </div>
  );
}

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  href: string;
}

export default function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastShow, setToastShow] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastShow(true);
    setTimeout(() => setToastShow(false), 2400);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copiado com sucesso!');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Lojas Leve Candói',
          text: 'Confira os contatos, WhatsApp e novidades das Lojas Leve Candói!',
          url: window.location.href,
        });
      } catch {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const navItems: NavItem[] = [
    {
      id: 'instagram',
      icon: Instagram,
      label: '@lojasleve.candoi',
      sub: 'Siga no Instagram oficial',
      href: 'https://www.instagram.com/lojasleve.candoi/',
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp Lojas Leve',
      sub: '(42) 99964-8272 · Atendimento',
      href: 'https://wa.me/5542999648272?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento%20nas%20Lojas%20Leve%20Cand%C3%B3i',
    },
    {
      id: 'avaliar',
      icon: Star,
      label: 'Avaliar no Google',
      sub: 'Sua opinião é muito importante',
      href: 'https://search.google.com/local/writereview?placeid=ChIJS_1b9cqh75QR4YUHQ7TQqBM',
    },
    {
      id: 'como-chegar',
      icon: MapPin,
      label: 'Como Chegar à Loja',
      sub: 'Centro de Candói - PR',
      href: 'https://www.google.com/search?kgmid=/g/11zky07qf6&hl=pt-BR&q=Lojas+Leve+-+Cand%C3%B3i&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m5/3&kgs=83d5e32318229df1&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m5/3',
    },
  ];

  return (
    <main className="font-body relative min-h-[100dvh] overflow-x-hidden bg-[#0A1220] text-[#F8F9FA] selection:bg-[#FF7A00] selection:text-white">
      {/* Background with facade & dark gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src={bgImage}
          alt="Fachada Lojas Leve"
          className="h-full w-full object-cover object-[65%_25%] sm:object-center scale-105 filter brightness-[0.80] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#060B14]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14]/35 via-[#081224]/65 to-[#060B14]/92" />
      </div>

      {/* Top right quick action buttons */}
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2 pt-[env(safe-area-inset-top,0px)] pr-[env(safe-area-inset-right,0px)]">
        <button
          onClick={() => setIsInfoOpen(true)}
          className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#0E1A2E]/75 text-white/90 backdrop-blur-md hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/90 active:scale-90 hover:text-white transition-all shadow-lg touch-manipulation cursor-pointer"
          title="Horários e Telefones"
          aria-label="Informações da Loja"
        >
          <Info className="size-4.5" />
        </button>

        <button
          onClick={handleShare}
          className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-[#0E1A2E]/75 text-white/90 backdrop-blur-md hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/90 active:scale-90 hover:text-white transition-all shadow-lg touch-manipulation cursor-pointer"
          title="Compartilhar Link"
          aria-label="Compartilhar"
        >
          <Share2 className="size-4.5" />
        </button>
      </div>

      {/* Central Content */}
      <div className="animate-in fade-in duration-700 relative z-10 mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center gap-5 sm:gap-7 px-4 sm:px-6 py-10 sm:py-14 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))]">
        {/* Main Logo */}
        <Logo className="w-44 sm:w-52 drop-shadow-[0_10px_28px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-transform duration-300" />

        {/* Decorative divider ribbons and shopping bag icon */}
        <div className="flex w-full items-center gap-2.5 sm:gap-3 text-[#FF7A00]">
          <span className="leve-ribbon" aria-hidden="true" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />
          <ShoppingBag className="size-4 sm:size-4.5 shrink-0 text-[#FF8533]" aria-hidden="true" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF7A00]/60 to-transparent" />
          <span className="leve-ribbon" aria-hidden="true" />
        </div>

        {/* Subtitles & Slogan */}
        <div className="flex flex-col items-center gap-1 text-center -mt-1 px-2">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#FFE8D6]/90 text-balance leading-snug">
            Roupas · Calçados · Cama, Mesa &amp; Banho
          </p>
          <p className="text-[11px] sm:text-xs text-[#FFA94D] font-medium italic text-balance">
            &ldquo;Só a Leve tem, só a Leve faz pra você 🧡&rdquo;
          </p>
        </div>

        {/* Links Navigation */}
        <nav className="flex w-full flex-col gap-2.5 sm:gap-3" aria-label="Nossos contatos">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-white/15 bg-[#0E1A2E]/60 px-4 py-3.5 sm:px-5 sm:py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.01] hover:border-[#FF7A00]/60 hover:bg-[#0E1A2E]/85 active:scale-[0.98] active:bg-[#0E1A2E]/95 shadow-lg shadow-black/20 text-left cursor-pointer touch-manipulation min-h-[58px]"
              >
                <span className="bg-white/10 text-[#FF8533] group-hover:bg-[#FF7A00] group-hover:text-[#0B1320] flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full transition-colors">
                  <Icon className="size-4.5 sm:size-5" />
                </span>
                <span className="flex flex-col text-left flex-1 min-w-0 pr-1">
                  <span className="font-display text-[17px] sm:text-lg tracking-wide text-[#F8F9FA] group-hover:text-white truncate">
                    {item.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#F8F9FA]/75 truncate">
                    {item.sub}
                  </span>
                </span>
                <ChevronRight className="size-4 text-white/30 group-hover:text-[#FF7A00] group-hover:translate-x-0.5 shrink-0 transition-all ml-auto" />
              </a>
            );
          })}
        </nav>

        {/* Footer label */}
        <footer className="mt-1 sm:mt-2 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#F8F9FA]/65">
          Lojas Leve Candói
        </footer>
      </div>

      {/* Store Info Modal */}
      <StoreInfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* Copied Toast */}
      <Toast message={toastMessage} show={toastShow} />
    </main>
  );
}
