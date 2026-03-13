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
        <button className="group w-full text-left p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-900 hover:shadow-lg transition-all duration-200 cursor-pointer">
          <div className="flex items-start justify-between gap-2 mb-1">
            <span className="font-semibold text-zinc-950 text-sm  pt-5">
              {item.title}
            </span>
            <ExternalLink size={13} className="shrink-0 mt-0.5 text-zinc-300 group-hover:text-zinc-700 transition-colors" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-2">
            <span>{item.subtitle}</span>
            <span>·</span>
            <Calendar size={11} />
            <span>{item.period}</span>
          </div>
          <p className="text-xs text-zinc-500 mb-3 line-clamp-2">{item.brief}</p>
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