import React, { useState } from 'react';
import { marked } from 'marked';
import '../App.css';

const MarkdownPreviewer = () => {
  // Default Markdown for initial load (meets User Story #5)
  const defaultMarkdown = `
# Heading 1
## Sub-heading
\`Inline code\`

\`\`\`
Code block example
console.log("Hello, world!");
\`\`\`

- List item
> Blockquote

![Image](https://via.placeholder.com/100)
**Bold text**
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
