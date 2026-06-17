# studio-zero
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Mario World Map Engine</title>
    <!-- Tailwind CSS Engine -->
    <script src="https://tailwindcss.com"></script>
    <style>
        @import url('https://googleapis.com');
        .retro-font { font-family: 'Press+Start+2P', monospace; }
        .pixel-corners { image-rendering: pixelated; }
    </style>
</head>
<body class="bg-slate-900 text-white min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">

    <!-- Navbar Container -->
    <header class="bg-slate-950 border-b-4 border-slate-800 p-4 sticky top-0 z-50 shadow-2xl">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
                <div class="w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                <h1 class="retro-font text-sm md:text-lg text-amber-400 tracking-wide">MARIO_MAP_OS_v1.0</h1>
            </div>
            <div class="flex gap-2">
                <button onclick="alert('Map Reset Successfully!')" class="retro-font text-[10px] bg-rose-600 hover:bg-rose-500 border-b-4 border-rose-800 active:border-b-0 active:mt-1 text-white px-3 py-2 rounded transition-all">RESET</button>
                <button onclick="alert('Configuration Updated!')" class="retro-font text-[10px] bg-emerald-500 hover:bg-emerald-400 border-b-4 border-emerald-700 active:border-b-0 active:mt-1 text-slate-950 px-3 py-2 rounded font-bold transition-all">UPDATE</button>
            </div>
        </div>
    </header>

    <!-- App Dashboard Context Grid -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Live Workspace Display Viewport -->
        <section class="lg:col-span-2 flex flex-col bg-slate-950/80 border-4 border-slate-800 rounded-xl p-4 lg:p-6 backdrop-blur shadow-inner justify-between min-h-[450px]">
            <div>
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h2 class="text-xl font-black text-slate-100 tracking-tight">Workspace Map Console</h2>
                        <p class="text-xs text-slate-400 mt-1">Simulated 2D layout grid environment loop.</p>
                    </div>
                    <span class="retro-font text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-1 rounded">STATUS: RUNNING</span>
                </div>
                
                <!-- Interactive Blueprint Wrapper Box -->
                <div class="relative w-full aspect-video border-4 border-dashed border-slate-700 rounded-lg bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                    <div class="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                    
                    <!-- Placeholder Visual Anchor Graphics -->
                    <div class="relative z-10 space-y-3 animate-fade-in">
                        <div class="text-5xl group-hover:scale-110 transition-transform duration-300 select-none">🗺️</div>
                        <h3 class="retro-font text-xs text-amber-300">CANVAS INTERFACE CONTAINER</h3>
                        <p class="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">Your custom layout scripts render directly inside this viewport array structure.</p>
                    </div>
                </div>
            </div>

            <!-- Footer Action Triggers -->
            <div class="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <div class="flex-1 bg-slate-900/90 border-2 border-slate-800 p-3 rounded-lg flex items-center justify-between">
                    <span class="text-xs text-slate-400">Current Tool:</span>
                    <span class="retro-font text-[10px] text-sky-400">LANDMARK_PLACEMENT</span>
                </div>
                <div class="flex-1 bg-slate-900/90 border-2 border-slate-800 p-3 rounded-lg flex items-center justify-between">
                    <span class="text-xs text-slate-400">Active Node:</span>
                    <span class="retro-font text-[10px] text-purple-400">EIFFEL_TOWER_01</span>
                </div>
            </div>
        </section>

        <!-- Sidebar Options and Environment Telemetry -->
        <aside class="space-y-6 flex flex-col justify-start">
            
            <!-- Diagnostics Telemetry Box -->
            <div class="bg-slate-950/80 border-4 border-slate-800 rounded-xl p-5 backdrop-blur shadow-2xl">
                <h3 class="retro-font text-[10px] text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">System Metrics</h3>
                <div class="space-y-3">
                    <div class="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-slate-400">Active Asset Layer</span>
                        <span class="retro-font text-[9px] text-emerald-400">CONTINENTS_v2</span>
                    </div>
                    <div class="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-slate-400">Render Pipeline</span>
                        <span class="retro-font text-[9px] text-emerald-400">WEBGL_STABLE</span>
                    </div>
                    <div class="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800/60">
                        <span class="text-xs text-slate-400">Runtime Thread</span>
                        <span class="retro-font text-[9px] text-sky-400">VITE_DOM_HMR</span>
                    </div>
                </div>
            </div>

            <!-- Context Info Flag Block -->
            <div class="bg-gradient-to-br from-amber-500/10 to-transparent border-4 border-amber-500/20 rounded-xl p-5 shadow-xl relative overflow-hidden">
                <div class="absolute -right-4 -bottom-4 text-7xl opacity-10 select-none">🕹️</div>
                <h3 class="retro-font text-[10px] text-amber-400 mb-2">Vibe Coding Node</h3>
                <p class="text-xs text-slate-300 leading-relaxed">This production-ready build is fully isolated and decoupled for instant global CDN delivery deployment.</p>
                <div class="w-full bg-slate-900 rounded-full h-2 mt-4 border border-slate-800 overflow-hidden">
                    <div class="bg-gradient-to-r from-amber-500 to-yellow-300 h-full w-5/6 rounded-full animate-pulse"></div>
                </div>
            </div>

        </aside>
    </main>

    <!-- App System Status Footer Bar -->
    <footer class="bg-slate-950 border-t-4 border-slate-800 px-6 py-3 text-center text-[10px] text-slate-500 tracking-tight font-mono">
        &copy; 2026 CORE_ENGINE ENVIRONMENT RUNTIME CLIENT
    </footer>

</body>
</html>
