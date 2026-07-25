export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-40 rounded bg-slate-200" />
        <div className="h-12 w-3/4 rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-80 w-full rounded-3xl bg-slate-200" />
      </div>
    </div>
  );
}