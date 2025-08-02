import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [markdownContent, setMarkdownContent] = useState('# Welcome to Markdown Editor\n\nStart writing your Markdown content here...\n\n## Example\n\n- **Bold text**\n- *Italic text*\n- [Link](https://example.com)\n\n```javascript\nconsole.log("Hello, World!");\n```');
  const [activeTab, setActiveTab] = useState('edit'); // 'edit' or 'preview'

  // Word count
  const wordCount = markdownContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  const charCount = markdownContent.length;

  // Quick insert function
  const insertMarkdown = (syntax) => {
    const textarea = document.getElementById('markdown-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdownContent.substring(start, end);
    
    let newText = '';
    
    switch (syntax) {
      case 'h1':
        newText = '# ';
        break;
      case 'h2':
        newText = '## ';
        break;
      case 'h3':
        newText = '### ';
        break;
      case 'bold':
        newText = `**${selectedText || 'Bold text'}**`;
        break;
      case 'italic':
        newText = `*${selectedText || 'Italic text'}*`;
        break;
      case 'link':
        newText = `[${selectedText || 'Link text'}](URL)`;
        break;
      case 'code':
        newText = selectedText ? `\`${selectedText}\`` : '`Code`';
        break;
      case 'list':
        newText = '- ';
        break;
      case 'quote':
        newText = '> ';
        break;
      default:
        newText = syntax;
    }
    
    const newMarkdown = markdownContent.substring(0, start) + newText + markdownContent.substring(end);
    setMarkdownContent(newMarkdown);
    
    // 重新聚焦並設置游標位置
    setTimeout(() => {
      textarea.focus();
      const cursorPos = start + newText.length;
      textarea.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  };

  // Export function
  const exportMarkdown = () => {
    const filename = prompt('Enter filename:', 'my-document');
    if (filename !== null) {
      const element = document.createElement('a');
      const file = new Blob([markdownContent], { type: 'text/markdown' });
      element.href = URL.createObjectURL(file);
      element.download = filename.endsWith('.md') ? filename : `${filename}.md`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  return (
    <div className="d-flex flex-column vh-100">
      {/* Header */}
      <nav className="navbar navbar-light bg-light border-bottom flex-shrink-0">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">📝 Markdown Editor</span>
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={exportMarkdown}
          >
            💾 Export File
          </button>
        </div>
      </nav>

      {/* Tabs */}
      <ul className="nav nav-tabs bg-light justify-content-center flex-shrink-0">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'edit' ? 'active' : ''}`}
            onClick={() => setActiveTab('edit')}
          >
            ✏️ Edit
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'preview' ? 'active' : ''}`}
            onClick={() => setActiveTab('preview')}
          >
            👁️ Preview
          </button>
        </li>
      </ul>

      {/* Toolbar */}
      {activeTab === 'edit' && (
        <div className="bg-light border-bottom p-2 flex-shrink-0">
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group btn-group-sm me-2" role="group">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('h1')} 
                title="Heading 1"
              >
                H1
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('h2')} 
                title="Heading 2"
              >
                H2
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('h3')} 
                title="Heading 3"
              >
                H3
              </button>
            </div>
            <div className="btn-group btn-group-sm me-2" role="group">
              <button 
                type="button" 
                className="btn btn-outline-secondary fw-bold" 
                onClick={() => insertMarkdown('bold')} 
                title="Bold"
              >
                B
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary fst-italic" 
                onClick={() => insertMarkdown('italic')} 
                title="Italic"
              >
                I
              </button>
            </div>
            <div className="btn-group btn-group-sm me-2" role="group">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('link')} 
                title="Link"
              >
                🔗
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('code')} 
                title="Code"
              >
                &lt;/&gt;
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('list')} 
                title="List"
              >
                📋
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => insertMarkdown('quote')} 
                title="Quote"
              >
                ❝
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow-1 overflow-hidden">
        {activeTab === 'edit' ? (
          <textarea
            id="markdown-editor"
            className="form-control border-0 rounded-0 h-100 w-100"
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            placeholder="Start writing your Markdown content here..."
            style={{
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              fontSize: '14px',
              lineHeight: '1.5',
              resize: 'none',
              outline: 'none'
            }}
          />
        ) : (
          <div className="h-100 overflow-auto p-4 bg-white">
            <div className="markdown-preview">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="bg-light border-top p-2 flex-shrink-0">
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">
            Words: {wordCount} | Characters: {charCount}
          </small>
          <small className="text-muted">
            Mode: {activeTab === 'edit' ? 'Edit' : 'Preview'}
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
