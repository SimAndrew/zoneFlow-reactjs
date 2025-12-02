function App() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-950">
			<div className="mx-4 w-full max-w-xl rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur p-8 shadow-xl ring-1 ring-black/5 dark:ring-white/5">
				<h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
					Zone Flow
				</h1>
				<p className="mt-2 text-zinc-600 dark:text-zinc-400">
					Tailwind CSS is connected and working. Try changing the utility
					classes in this block.
				</p>
				<div className="mt-6 flex gap-3">
					<button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-900 transition-colors">
						Primary
					</button>
					<button className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 transition-colors">
						Secondary
					</button>
				</div>
				<div className="mt-6 grid grid-cols-2 gap-4 text-sm">
					<div className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 p-4 text-center">
						grid
					</div>
					<div className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 p-4 text-center">
						utilities
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
