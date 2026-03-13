export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-xs font-semibold tracking-widest uppercase  whitespace-nowrap ">
        {children}
      </h2>
      <div className="flex-1 h-px bg-zinc-900" />
    </div>
  );
}