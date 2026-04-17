export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">

      <div className="text-center">

        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto">

          <div className="absolute inset-0 rounded-full border-4 border-pink-500/20"></div>

          <div className="absolute inset-0 rounded-full border-t-4 border-pink-500 border-r-4 border-r-purple-500 animate-spin"></div>

        </div>

        {/* Text */}
        <h2 className="mt-6 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-transparent bg-clip-text">
          CineVerse
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Loading awesome content...
        </p>

      </div>
    </div>
  );
}