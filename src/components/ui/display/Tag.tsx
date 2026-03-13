export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-transparent text-zinc-700 border border-zinc-400">
      {label}
    </span>
  );
}