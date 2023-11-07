// database.js

// Check if the browser supports IndexedDB
if (!('indexedDB' in window)) {
    console.log("This browser doesn't support IndexedDB.");
  } else {
    // Open or create a database
    const dbPromise = indexedDB.open('textEditorDB', 1);
  
    // Create object store and define its schema
    dbPromise.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('notes')) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      }
    };
  
    // Handle errors
    dbPromise.onerror = (event) => {
      console.error('Error opening or creating IndexedDB:', event.target.error);
    };
  
    const database = {
      // Save a note to the database
      saveNote: (note) => {
        return dbPromise.then((db) => {
          const tx = db.transaction('notes', 'readwrite');
          const store = tx.objectStore('notes');
          store.add(note);
          return tx.complete;
        });
      },
  
      // Get all notes from the database
      getAllNotes: () => {
        return dbPromise.then((db) => {
          const tx = db.transaction('notes', 'readonly');
          const store = tx.objectStore('notes');
          return store.getAll();
        });
      },
    };
  
    export default database;
  }
  