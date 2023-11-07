// install.js

// Function to handle the installation of the PWA
function installPWA() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
  
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        const deferredPrompt = e;
        
        // Show your custom "Install" button or prompt the user to install the PWA
        // For example, you can create an install button and show it when this event is fired.
        const installButton = document.getElementById('install-button');
        installButton.style.display = 'block';
  
        installButton.addEventListener('click', () => {
          deferredPrompt.prompt();
          
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the PWA installation');
            } else {
              console.log('User declined the PWA installation');
            }
  
            // Reset the deferredPrompt variable
            deferredPrompt = null;
            installButton.style.display = 'none';
          });
        });
      });
    }
  }
  
  // Initialize the PWA installation
  installPWA();
  