import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface OutputLine {
  id: number;
  type: 'input' | 'output' | 'system';
  content: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<OutputLine[]>([
    {
      id: 1,
      type: 'system',
      content: 'Consola de Jesús Pérez v2.0 (Astro + React 19). Escribe "help" o haz clic en los comandos.',
    },
    {
      id: 2,
      type: 'output',
      content: (
        <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">
          Sistema listo. Full Stack: React 19, TypeScript, .NET 10, Clean Architecture.
        </span>
      ),
    },
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newLines: OutputLine[] = [
      ...history,
      { id: Date.now(), type: 'input', content: `$ ${rawCmd}` },
    ];

    switch (cmd) {
      case 'help':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          content: (
            <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-zinc-400">
              <div><strong className="text-sky-600 dark:text-sky-400">skills</strong> - Tecnologías y herramientas dominadas</div>
              <div><strong className="text-sky-600 dark:text-sky-400">projects</strong> - Proyectos clave (PeritoYa, Muévelo, CI/CD)</div>
              <div><strong className="text-sky-600 dark:text-sky-400">contact</strong> - Canales de comunicación directa</div>
              <div><strong className="text-sky-600 dark:text-sky-400">clear</strong> - Limpiar la consola</div>
            </div>
          ),
        });
        break;

      case 'skills':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          content: (
            <div className="text-xs font-mono space-y-1 text-slate-600 dark:text-zinc-400">
              <div><span className="text-sky-600 dark:text-sky-400 font-semibold">[Front]</span> React 19, Next.js, TypeScript, Astro, Tailwind, Zustand, PWA</div>
              <div><span className="text-indigo-600 dark:text-indigo-400 font-semibold">[Back]</span> .NET 8/10, C#, Clean Arch, CQRS, EF Core, Dapper, PostgreSQL, Redis</div>
              <div><span className="text-purple-600 dark:text-purple-400 font-semibold">[Ops]</span> Docker, CI/CD, n8n, Cloudflare Tunnel, Linux, Vitest, xUnit</div>
            </div>
          ),
        });
        break;

      case 'projects':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          content: (
            <div className="text-xs font-mono space-y-1 text-slate-600 dark:text-zinc-400">
              <div>• <strong className="text-slate-900 dark:text-white">PeritoYa:</strong> PWA offline con Web Locks + .NET 10 CQRS sobre Postgres y Redis.</div>
              <div>• <strong className="text-slate-900 dark:text-white">Muévelo:</strong> Plataforma de renting con cotizador dinámico + MinIO S3 y Google Sheets.</div>
              <div>• <strong className="text-slate-900 dark:text-white">GitOps CI/CD:</strong> Push a GitHub dispara n8n y redespliega Docker en servidor Linux.</div>
            </div>
          ),
        });
        break;

      case 'contact':
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          content: (
            <div className="text-xs font-mono text-slate-600 dark:text-zinc-400 space-y-1">
              <div>Email: <a href="mailto:jesudpf21@hotmail.com" className="text-sky-600 dark:text-sky-400 underline">jesudpf21@hotmail.com</a></div>
              <div>WhatsApp: <a href="https://wa.me/573002410510" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">+57 300 2410 510</a></div>
              <div>LinkedIn: <a href="https://www.linkedin.com/in/jesus-perez-ferrer/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 underline">linkedin.com/in/jesus-perez-ferrer</a></div>
            </div>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newLines.push({
          id: Date.now() + 1,
          type: 'output',
          content: (
            <span className="text-red-500 dark:text-red-400 text-xs font-mono">
              Comando no reconocido: "{rawCmd}". Escribe "help" para ver opciones.
            </span>
          ),
        });
        break;
    }

    setHistory(newLines);
    setInputVal('');
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#11131a]/95 backdrop-blur-xl shadow-lg dark:shadow-2xl overflow-hidden font-mono text-xs transition-colors">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-200/80 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[11px] text-slate-600 dark:text-zinc-400 ml-2 flex items-center gap-1.5 font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-brand" />
            jesus@portfolio:~
          </span>
        </div>

        {/* Quick Command Chips */}
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="text-[10px] text-slate-500 dark:text-zinc-400">Comandos:</span>
          {['help', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 text-[10px] bg-slate-200/70 hover:bg-brand/20 dark:bg-zinc-700/60 dark:hover:bg-brand/30 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white rounded border border-slate-300/50 dark:border-white/5 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={terminalBodyRef} className="p-4 sm:p-5 max-h-64 overflow-y-auto space-y-2">
        {history.map((line) => (
          <div key={line.id} className="leading-relaxed">
            {line.type === 'input' ? (
              <span className="text-sky-600 dark:text-sky-400 font-semibold">{line.content}</span>
            ) : line.type === 'system' ? (
              <span className="text-slate-500 dark:text-zinc-400 italic">{line.content}</span>
            ) : (
              line.content
            )}
          </div>
        ))}
      </div>

      {/* Terminal Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(inputVal);
        }}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200/80 dark:border-white/10"
      >
        <span className="text-sky-600 dark:text-sky-400 font-bold">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Escribe un comando (ej: help, skills, contact)..."
          className="w-full bg-transparent text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none"
        />
        <button
          type="submit"
          className="text-[10px] px-2 py-1 bg-brand/10 dark:bg-brand/20 text-brand-hover rounded border border-brand/30 hover:bg-brand/30 transition-colors"
        >
          Ejecutar
        </button>
      </form>
    </div>
  );
};

export default InteractiveTerminal;
