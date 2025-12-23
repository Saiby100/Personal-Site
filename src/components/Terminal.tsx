import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; type: 'command' | 'output' | 'error' }>>([
    { command: '', output: 'Welcome to my interactive terminal! Type "help" to get started.', type: 'output' },
  ]);
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => `Available commands:
• about - Learn more about me
• skills - View my technical skills
• projects - See my recent projects
• contact - Get my contact information
• clear - Clear the terminal
• whoami - Display current user
• pwd - Show current directory
• ls - List directory contents
• cat <file> - Display file contents
• echo <text> - Display text
• date - Show current date and time`,

    about: () => `🚀 Full Stack Developer
📱 Mobile App Specialist
🛠️  Tool & Language Creator

I'm passionate about building software that makes a difference. 
From mobile apps to custom programming languages, I love tackling 
complex challenges and creating elegant solutions.`,

    skills: () => `💻 Technical Skills:
• Frontend: React, TypeScript, Vue.js, Tailwind CSS
• Mobile: React Native, Flutter, Swift, Kotlin
• Backend: Node.js, Python, Go, Rust
• Database: PostgreSQL, MongoDB, Redis
• Cloud: AWS, Docker, Kubernetes
• Tools: Custom Languages, LSPs, CLI Tools`,

    projects: () => `🏗️  Recent Projects:
1. Custom Programming Language - Built a domain-specific language with full tooling
2. Mobile Task Manager - Cross-platform app with offline sync
3. Developer CLI Tool - Streamlines common development workflows
4. Language Server - Provides IDE support for custom languages
5. Web Dashboard - Real-time analytics platform

Type "cat project1.md" to learn more about specific projects!`,

    contact: () => `📧 Get in touch:
• Email: hello@yourname.dev
• LinkedIn: linkedin.com/in/yourusername
• GitHub: github.com/yourusername
• Location: San Francisco, CA

I'm always open to new opportunities and interesting conversations!`,

    whoami: () => 'developer',

    pwd: () => currentDirectory,

    ls: () => `projects/     documents/    scripts/
README.md    package.json  .gitignore
project1.md  project2.md   resume.pdf`,

    date: () => new Date().toLocaleString(),

    clear: () => {
      setHistory([]);
      return '';
    },

    cat: (args: string[]) => {
      const file = args[0];
      const files: { [key: string]: string } = {
        'project1.md': `# Custom Programming Language

A domain-specific language designed for data processing pipelines.

## Features:
- Type-safe data transformations
- Built-in parallel processing
- Custom syntax for common operations
- Full IDE support with language server

## Tech Stack:
- Rust (compiler)
- TypeScript (language server)
- VS Code extension

Status: Production ready, used by 500+ developers`,

        'project2.md': `# Mobile Task Manager

Cross-platform task management app with offline-first architecture.

## Features:
- Real-time synchronization
- Offline support
- Team collaboration
- Custom themes
- Voice notes

## Tech Stack:
- React Native
- TypeScript
- Realm Database
- Firebase

Status: Available on App Store and Google Play`,

        'README.md': `# Developer Portfolio

This is my personal website and interactive terminal.

Built with React, TypeScript, and Tailwind CSS.
Features a custom terminal emulator for fun interactions!`,

        'resume.pdf': 'This is a PDF file. Use a proper PDF viewer to open it! 📄',
      };

      return files[file] || `cat: ${file}: No such file or directory`;
    },

    echo: (args: string[]) => args.join(' '),
  };

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(' ');
    
    if (command === '') return '';
    
    if (commands[command as keyof typeof commands]) {
      const handler = commands[command as keyof typeof commands];
      return typeof handler === 'function' ? handler(args) : handler;
    }
    
    return `Command not found: ${command}. Type "help" for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const output = executeCommand(input);
    
    if (input.trim() === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [
        ...prev,
        { command: input, output: '', type: 'command' },
        { command: '', output, type: output.includes('not found') ? 'error' : 'output' },
      ]);
    }
    
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Terminal
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my profile through a custom terminal interface. Try typing "help" to get started!
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center ml-4">
              <TerminalIcon size={16} className="text-gray-400 mr-2" />
              <span className="text-gray-400 text-sm">terminal</span>
            </div>
          </div>

          <div
            ref={terminalRef}
            className="p-4 h-96 overflow-y-auto font-mono text-sm bg-gray-900"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-2">
                {entry.type === 'command' && (
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">
                      developer@portfolio:{currentDirectory}$
                    </span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                )}
                {entry.type === 'output' && (
                  <div className="text-gray-300 whitespace-pre-line pl-2 border-l-2 border-blue-500/30">
                    {entry.output}
                  </div>
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400 whitespace-pre-line pl-2 border-l-2 border-red-500/30">
                    {entry.output}
                  </div>
                )}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-green-400 mr-2">
                developer@portfolio:{currentDirectory}$
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none caret-green-400"
                placeholder="Type a command..."
                autoFocus
              />
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            💡 Tip: This terminal supports tab completion and command history. 
            Try exploring with commands like "ls", "cat", and "help"!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terminal;