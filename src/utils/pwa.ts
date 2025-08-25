// PWA installation and service worker utilities

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export class PWAManager {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private isInstalled = false;

  constructor() {
    this.init();
  }

  private init() {
    // Check if already installed
    this.isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                       (window.navigator as any).standalone === true;

    // Listen for install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.showInstallButton();
    });

    // Listen for app installed
    window.addEventListener('appinstalled', () => {
      this.isInstalled = true;
      this.hideInstallButton();
      this.trackEvent('pwa_installed');
    });

    // Register service worker
    this.registerServiceWorker();
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        });

        console.log('Service Worker registered:', registration);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                this.showUpdateAvailable();
              }
            });
          }
        });

      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  }

  public async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    try {
      await this.deferredPrompt.prompt();
      const choiceResult = await this.deferredPrompt.userChoice;
      
      this.trackEvent('pwa_install_prompt', {
        outcome: choiceResult.outcome
      });

      if (choiceResult.outcome === 'accepted') {
        this.deferredPrompt = null;
        return true;
      }
    } catch (error) {
      console.error('Install prompt failed:', error);
    }

    return false;
  }

  public canInstall(): boolean {
    return this.deferredPrompt !== null && !this.isInstalled;
  }

  public isAppInstalled(): boolean {
    return this.isInstalled;
  }

  private showInstallButton() {
    // Create install button if not exists
    let installBtn = document.getElementById('pwa-install-btn');
    
    if (!installBtn) {
      installBtn = document.createElement('button');
      installBtn.id = 'pwa-install-btn';
      installBtn.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
          </path>
        </svg>
        Instalar App
      `;
      installBtn.className = `
        fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 
        text-white font-medium py-3 px-4 rounded-lg shadow-lg 
        transition-all duration-300 flex items-center transform 
        translate-y-0 opacity-100 md:hidden
      `;
      
      installBtn.addEventListener('click', () => {
        this.promptInstall();
      });

      document.body.appendChild(installBtn);
    }

    // Animate in
    installBtn.style.transform = 'translateY(0)';
    installBtn.style.opacity = '1';
  }

  private hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.style.transform = 'translateY(100px)';
      installBtn.style.opacity = '0';
      setTimeout(() => {
        installBtn.remove();
      }, 300);
    }
  }

  private showUpdateAvailable() {
    // Show update notification
    const updateNotification = document.createElement('div');
    updateNotification.innerHTML = `
      <div class="fixed top-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
              </path>
            </svg>
            <span>Nueva versión disponible</span>
          </div>
          <button onclick="this.parentElement.parentElement.remove()" class="text-white/70 hover:text-white">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <button onclick="window.location.reload()" class="mt-2 bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">
          Actualizar
        </button>
      </div>
    `;
    
    document.body.appendChild(updateNotification);

    // Auto remove after 10 seconds
    setTimeout(() => {
      if (updateNotification.parentNode) {
        updateNotification.remove();
      }
    }, 10000);
  }

  private trackEvent(event: string, data?: any) {
    // Analytics tracking
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', event, data);
    }
    
    console.log('PWA Event:', event, data);
  }
}

// Initialize PWA Manager
export const pwaManager = new PWAManager();