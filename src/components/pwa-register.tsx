'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function PWARegister() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Check if already running as standalone (PWA)
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true;
      setIsStandalone(isStandaloneMode);
    };

    checkStandalone();

    // 2. Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch((error) => {
            console.error('ServiceWorker registration failed: ', error);
          });
      });
    }

    // 3. Listen for PWA install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Don't show if the user dismissed it during this session
      const isDismissed = sessionStorage.getItem('pwa-prompt-dismissed');
      if (!isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);

    // We've used the prompt, and can't use it again
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // If already running standalone or prompt not available/dismissed, render nothing
  if (isStandalone || !isVisible || !deferredPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] md:w-full p-5 rounded-xl border border-[#B89748]/30 bg-[#040d1c]/90 text-white shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#08244C] to-[#B89748]/20 border border-[#B89748]/20 text-[#B89748]">
            <Download className="h-6 w-6 animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="font-headline font-bold text-base text-[#B89748] flex items-center gap-2">
              Install App
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#B89748]/10 text-[#B89748] border border-[#B89748]/20">
                PWA
              </span>
            </h3>
            <p className="mt-1 text-xs text-slate-300 leading-relaxed">
              Install <strong>Dilip's Digital Domain</strong> for direct access, offline capabilities, and a full-screen app experience.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={handleInstallClick}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#B89748] to-[#d4af37] text-[#040d1c] hover:opacity-90 active:scale-95 transition-all shadow-md shadow-[#B89748]/10"
              >
                <Smartphone className="h-3.5 w-3.5" />
                Install Now
              </button>
              <button
                onClick={handleDismiss}
                className="px-3 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white transition-all"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
