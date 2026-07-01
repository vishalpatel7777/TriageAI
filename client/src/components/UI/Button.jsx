export default function Button({
  children,
  loading = false,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
    >
      <div className="flex items-center justify-center gap-2">
  {loading && (
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
  )}

  {loading ? "Analyzing..." : children}
</div>
    </button>
  );
}