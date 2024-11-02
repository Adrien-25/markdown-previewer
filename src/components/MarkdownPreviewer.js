import React, { useState } from "react";
import { marked } from "marked";
import "../App.css";

const MarkdownPreviewer = () => {
  const defaultMarkdown = `
  # Aperçu de Markdown ! 🚀
  
  ## Un tour d'horizon complet de toutes les fonctionnalités :
  
  Markdown est **incroyablement** pratique pour formater du texte de manière simple et rapide. Avec quelques symboles, vous pouvez :
  
  - Structurer vos documents,
  - Créer des liens [comme celui-ci](https://fr.wikipedia.org/wiki/Markdown),
  - Ajouter des images,
  - Et même écrire du code !
  
  ### C'est parti pour un tour de magie Markdown !
  
  ---
  
  ## Styles de texte basiques
  
  Voici quelques options pour styliser le texte :
  
  - **Texte en gras** avec deux astérisques \`**\` : **C'est du texte en gras !**
  - _Texte en italique_ avec un seul astérisque \`_\` : _C'est en italique, très classe._
  - ~~Texte barré~~ avec deux tildes \`~~\` : ~~Quand on veut barrer du texte !~~
  
  Vous pouvez même **combiner les styles** : du texte à la fois **_gras et italique_** !
  
  
  ---
  
  ## Citations
  
  Les citations en Markdown sont également super simples. Il suffit de commencer par \`>\` pour créer un bloc de citation :
  
  > "La simplicité est la sophistication suprême."  
  > — Léonard de Vinci (ou peut-être quelqu’un d’autre…)
  
  ---
  
  ## Code Inline et Blocs de Code
  
  Vous pouvez insérer du \`code inline\` comme ceci, avec un accent grave.
  
  Et pour des blocs de code multi-lignes :
  
  \`\`\`javascript
  // Un exemple de code JavaScript :
  function direBonjour(nom) {
    return \`Bonjour, \${nom} !\`;
  }
  
  console.log(direBonjour("le monde"));
  \`\`\`
  
  Le Markdown permet de spécifier le langage du code pour la coloration syntaxique.
  
  ---
  
  ## Listes
  
  Les listes non ordonnées sont simples :
  - Voici un élément
  - Un autre élément
     - Et un sous-élément pour varier
  
  Les listes ordonnées :
  1. Premier élément
  2. Deuxième élément
     1. Sous-élément pour le deuxième
  
  ---
  
  ## Tableaux
  
  Les tableaux sont parfaits pour structurer des informations :
  
  | Nom       | Âge | Ville          |
  |-----------|-----|----------------|
  | Alice     | 25  | Paris          |
  | Bob       | 30  | Lyon           |
  | Charly    | 35  | Marseille      |
  
  ---
  
  Fin de la démonstration. Maintenant, à vous de jouer ! 😄
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  const MarkdownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      height="30px"
      width="30px"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 16 16"
    >
      <path
        d="M14.25,3H1.75A.74027.74027,0,0,0,1,3.73016v8.53968A.74029.74029,0,0,0,1.75,13h12.5a.74029.74029,0,0,0,.75-.73016V3.73016A.74027.74027,0,0,0,14.25,3ZM7.965,10.059H6.97374V7.77311L5.9825,9.34956,4.99125,7.77311V10.059H4V5.934h.91L5.9825,7.51038,7.055,5.934h.91Zm2.45884.0071L8.84766,7.94479H9.94749V5.934h.99124V7.94479H12Z"
      />
    </svg>
  );

  return (
    <div className="markdown-previewer">
      <div className="editor-container">
        <div className="toolbar">
          <MarkdownIcon />
          Aperçu
        </div>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          placeholder="Entrez le Markdown ici..."
        />
      </div>
      <div className="preview-container">
        <div className="toolbar">
          <MarkdownIcon />
          Éditeur
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
