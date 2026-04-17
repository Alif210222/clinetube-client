export default function SectionLoader() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 animate-pulse"
        >

          <div className="h-[360px] bg-slate-200 dark:bg-slate-800"></div>

          <div className="p-5 space-y-3">
            <div className="h-5 rounded bg-slate-200 dark:bg-slate-800"></div>
            <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>
            <div className="h-8 w-24 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          </div>

        </div>
      ))}

    </div>
  );
}