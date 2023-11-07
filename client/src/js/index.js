// index.js

// Import necessary modules and components
import { createHeader } from './header';
import { createEditor } from './editor';
import { createInstallButton } from './install';
import { createServiceWorker } from './service-worker';

// Function to initialize the application
function initApp() {
  // Create and append the header element to the DOM
  const header = createHeader();
  document.body.appendChild(header);

  // Create and append the editor element to the DOM
  const editor = createEditor();
  document.body.appendChild(editor);

  // Create and append the install button element to the DOM
  const installButton = createInstallButton();
  document.body.appendChild(installButton);

  // Initialize the service worker
  createServiceWorker();
}

// Event listener to start the application when the DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
