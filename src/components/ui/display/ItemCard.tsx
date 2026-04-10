import { Calendar, ExternalLink } from "lucide-react";
import { Dialog } from "radix-ui";
import CardModal from "./CardModal";
import Tag from "./Tag";


interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  brief: string;
  description: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}
export default function ItemCard({ item, type }: { item: CardItem; type: "experience" | "project" }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group w-full text-left p-4 rounded-xl transition-all duration-200 cursor-pointer" style={{ background: '#fafafa', border: '1px solid #e0e7ff', boxShadow: '0 1px 2px rgba(99,102,241,0.06)' }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = '1px solid #818cf8'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(99,102,241,0.18)'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = '1px solid #e0e7ff'; (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 2px rgba(99,102,241,0.06)'; }}>
          <div className="flex items-start justify-between gap-2 mb-1">
            <span className="font-semibold text-sm pt-5" style={{ color: '#1e1b4b' }}>
              {item.title}
            </span>
            <ExternalLink size={13} className="shrink-0 mt-0.5 transition-colors" style={{ color: '#c4b5fd' }} />
          </div>
          <div className="flex items-center gap-1.5 text-xs mb-2" style={{ color: '#8b5cf6' }}>
            <span>{item.subtitle}</span>
            <span>·</span>
            <Calendar size={11} />
            <span>{item.period}</span>
          </div>
          <p className="text-xs mb-3 line-clamp-2" style={{ color: '#6b7280' }}>{item.brief}</p>
          <div className="flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </button>
      </Dialog.Trigger>
      <CardModal item={item} type={type} />
    </Dialog.Root>
  );
}