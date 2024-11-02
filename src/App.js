import React, { useEffect } from 'react';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // Importez le style par défaut ou un autre style de votre choix

function App() {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  return (
    <div className="App">
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
