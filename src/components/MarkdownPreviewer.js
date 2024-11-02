import React, { useState } from "react";
import { marked } from "marked";
import "../App.css";

const MarkdownPreviewer = () => {
  // Default Markdown for initial load (meets User Story #5)
  const defaultMarkdown = `
  # Bienvenue dans ce Guide Complet de Markdown ! 🚀
  
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
  - On peut aussi ajouter autant d'éléments qu'on veut
  
  Les listes ordonnées :
  1. Premier élément
  2. Deuxième élément
  3. Troisième élément
     1. Sous-élément pour le troisième
  
  ---
  
  ## Tableaux
  
  Les tableaux sont parfaits pour structurer des informations :
  
  | Nom       | Âge | Ville          |
  |-----------|-----|----------------|
  | Alice     | 25  | Paris          |
  | Bob       | 30  | Lyon           |
  | Charly    | 35  | Marseille      |
  
  Et on peut aussi aligner le texte dans les colonnes avec des \`:\` :
  | Aligné à gauche | Centré       | Aligné à droite |
  |:--------------- |:------------:| ---------------:|
  | Texte à gauche  | Texte centré | Texte à droite  |
  
  ---
  
  ## Images
  
  Pour intégrer une image, c'est aussi facile que les liens :
  
  ![Chat mignon](https://placekitten.com/200/200)
  
  ---
  
  ## Séparateurs de section
  
  On peut ajouter des séparateurs de section avec trois tirets (ou astérisques) :
  
  ---
  
  ou
  
  ***
  
  ---
  
  ### Exemple Complet
  
  Enfin, voici un exemple qui utilise un peu de tout :
  
  - Un **lien** vers une [ressource utile](https://developer.mozilla.org/fr/).
  - Du _texte en italique_ et même ~~barré~~.
  - Une citation inspirante :
  
  > "Markdown rend la vie facile et élégante."
  
  1. Des listes ordonnées
  2. Avec des sous-listes
     - Et même des sous-sous-listes !
  
  Et voilà ! Vous êtes maintenant **expert en Markdown** ! 🎉 
  
  ---
  
  Fin de la démonstration. Maintenant, à vous de jouer ! 😄
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Update preview as markdown changes (meets User Story #3 and #4)
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Set options for Marked (optional: interpret line breaks as <br> elements)
  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="markdown-previewer">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;
