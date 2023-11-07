// header.js

// Function to create the header/navigation element
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('app-header');
  
    const logo = document.createElement('div');
    logo.classList.add('app-logo');
    logo.innerHTML = '<h1>Text Editor</h1>';
  
    const nav = document.createElement('nav');
    nav.classList.add('app-nav');
  
    // Create navigation links
    const homeLink = createNavLink('Home', '/');
    const editorLink = createNavLink('Editor', '/editor');
    const aboutLink = createNavLink('About', '/about');
  
    nav.appendChild(homeLink);
    nav.appendChild(editorLink);
    nav.appendChild(aboutLink);
  
    header.appendChild(logo);
    header.appendChild(nav);
  
    return header;
  }
  
  // Function to create a navigation link
  function createNavLink(text, href) {
    const link = document.createElement('a');
    link.classList.add('nav-link');
    link.textContent = text;
    link.href = href;
  
    return link;
  }
  
  export { createHeader };
  