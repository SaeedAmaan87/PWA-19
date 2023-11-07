// editor.js

// Add your event listeners and functionality here

document.addEventListener('DOMContentLoaded', () => {
    // Your code to initialize the text editor and any necessary elements
  
    // Event listener for saving content to IndexedDB
    document.getElementById('save-button').addEventListener('click', () => {
      const content = document.getElementById('editor-content').value;
  
      // Save the content to IndexedDB using the database.js methods
      database.saveNote({ content: content })
        .then(() => {
          console.log('Content saved to IndexedDB');
        })
        .catch((error) => {
          console.error('Error saving content to IndexedDB:', error);
        });
    });
  
    // Event listener for loading content from IndexedDB
    document.getElementById('load-button').addEventListener('click', () => {
      // Get all notes from IndexedDB and display them in the editor
      database.getAllNotes()
        .then((notes) => {
          const content = notes.map((note) => note.content).join('\n\n');
          document.getElementById('editor-content').value = content;
          console.log('Content loaded from IndexedDB');
        })
        .catch((error) => {
          console.error('Error loading content from IndexedDB:', error);
        });
    });
  
    // Add other event listeners and functionality as needed
  });
  