export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h2 className="text-xs font-semibold tracking-widest uppercase whitespace-nowrap" style={{ color: '#4f46e5' }}>
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #818cf8, #c084fc, transparent)' }} />
    </div>
  );
}