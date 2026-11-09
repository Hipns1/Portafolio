import React, { useState } from 'react';
import { Smartphone, Server, Database, Zap, GitBranch, ShieldCheck, Play, Bell, CheckCircle2 } from 'lucide-react';

type FlowTab = 'peritoya' | 'cicd' | 'security';

export const InteractiveArchitecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FlowTab>('peritoya');
  const [simulating, setSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 800);
    setTimeout(() => setSimStep(3), 1600);
    setTimeout(() => setSimStep(4), 2400);
    setTimeout(() => {
      setSimStep(0);
      setSimulating(false);
    }, 3200);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-[#11131a]/95 backdrop-blur-xl p-5 sm:p-7 shadow-lg dark:shadow-2xl relative overflow-hidden transition-colors">
      {/* Header with Tab switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
              Diagrama Interactivo de Sistemas
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Arquitectura en Tiempo Real
          </h3>
        </div>

        {/* Tab selection buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-zinc-800/80 rounded-xl border border-slate-200/80 dark:border-white/10">
          <button
            onClick={() => { setActiveTab('peritoya'); setSimStep(0); setSimulating(false); }}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === 'peritoya'
                ? 'bg-brand text-white shadow-md'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            PeritoYa (Offline Sync)
          </button>
          <button
            onClick={() => { setActiveTab('cicd'); setSimStep(0); setSimulating(false); }}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === 'cicd'
                ? 'bg-brand text-white shadow-md'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            CI/CD GitOps
          </button>
          <button
            onClick={() => { setActiveTab('security'); setSimStep(0); setSimulating(false); }}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
              activeTab === 'security'
                ? 'bg-brand text-white shadow-md'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Capas de Seguridad
          </button>
        </div>
      </div>

      {/* TAB 1: PERITOYA OFFLINE ARCHITECTURE */}
      {activeTab === 'peritoya' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-zinc-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/5">
            <p className="text-xs text-slate-600 dark:text-zinc-400">
              <strong className="text-slate-900 dark:text-white">Flujo de peritaje en campo:</strong> los datos se capturan en tabletas sin internet y se sincronizan coordinadamente sin pérdidas ni colisiones de sesión.
            </p>
            <button
              onClick={runSimulation}
              disabled={simulating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/30 hover:bg-brand-accent/20 rounded-lg transition-colors shrink-0 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              {simulating ? 'Sincronizando...' : 'Simular Flujo'}
            </button>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
            {/* Node 1: Tablet PWA */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 1
                ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <Smartphone className="w-5 h-5 text-sky-500 dark:text-sky-400" />
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">PWA</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Tablet en Campo</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-tight">
                React 19 + Service Worker para persistencia offline en IndexedDB.
              </p>
            </div>

            {/* Node 2: Web Locks API */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 2
                ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">Web Locks</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Anti-Colisión</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-tight">
                Coordina pestañas abiertas y sincroniza tokens sin duplicar envíos.
              </p>
            </div>

            {/* Node 3: Backend .NET 10 CQRS */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 3
                ? 'bg-indigo-500/20 border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-105'
                : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">.NET 10</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Clean Arch + CQRS</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-tight">
                Commands vía MediatR, validación con FluentValidation y Dapper.
              </p>
            </div>

            {/* Node 4: DB & Redis */}
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 4
                ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-500">Postgres</span>
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">PostgreSQL + Redis</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-tight">
                Persistencia ACID garantizada y caché de alta velocidad.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CI/CD GITOPS PIPELINE */}
      {activeTab === 'cicd' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-zinc-900/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-white/5">
            <p className="text-xs text-slate-600 dark:text-zinc-400">
              <strong className="text-slate-900 dark:text-white">Infraestructura Autohospedada:</strong> pipeline GitOps con automatización n8n, contenedores Docker y Cloudflare Tunnel con Caddy.
            </p>
            <button
              onClick={runSimulation}
              disabled={simulating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 rounded-lg transition-colors shrink-0 disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              {simulating ? 'Desplegando...' : 'Simular Push'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 1 ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105' : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <GitBranch className="w-5 h-5 text-purple-500 dark:text-purple-400 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">1. Git Push</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400">Commit a rama main dispara webhook seguro.</p>
            </div>

            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 2 ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105' : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">2. Orquestador n8n</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400">Valida firma HMAC y ejecuta script de redespliegue.</p>
            </div>

            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 3 ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105' : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <Server className="w-5 h-5 text-sky-500 dark:text-sky-400 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">3. Docker &amp; Caddy</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400">Swap de contenedor sin caída vía Cloudflare Tunnel.</p>
            </div>

            <div className={`p-4 rounded-xl border transition-all duration-300 ${
              simStep === 4 ? 'bg-emerald-500/20 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105' : 'bg-slate-50 dark:bg-zinc-900/60 border-slate-200/80 dark:border-white/10'
            }`}>
              <Bell className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mb-2" />
              <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">4. Notificación Slack</div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400">Alerta instantánea de build exitoso y métricas.</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SECURITY AUDIT */}
      {activeTab === 'security' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
            <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mb-2" />
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Protección de Perímetro</div>
            <p className="text-[11px] text-slate-600 dark:text-zinc-400">
              Rate limiting estricto por IP, protección anti-CSRF tokenizada y encabezados Content Security Policy (CSP).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
            <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mb-2" />
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Validación Binaria</div>
            <p className="text-[11px] text-slate-600 dark:text-zinc-400">
              Inspección de firmas mágicas de archivo antes de persistir en MinIO S3 para prevenir inyecciones.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
            <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mb-2" />
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">Auditoría Aikido</div>
            <p className="text-[11px] text-slate-600 dark:text-zinc-400">
              Resolución de hallazgos de pentesting y análisis estático de vulnerabilidades en backend y dependencias.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveArchitecture;
