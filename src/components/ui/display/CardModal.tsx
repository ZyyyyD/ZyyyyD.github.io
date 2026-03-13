import { ExternalLink, X } from "lucide-react";
import { Dialog } from "radix-ui";
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
export default function CardModal({ item, type }: { item: CardItem; type: "experience" | "project" }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-8 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
        <Dialog.Close className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
          <X size={16} />
        </Dialog.Close>

        <div className="mb-1">
          <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">
            {type === "experience" ? "Experience" : "Project"}
          </span>
        </div>

        <Dialog.Title className="text-xl font-bold text-zinc-950 mb-0.5">
          {item.title}
        </Dialog.Title>
        <Dialog.Description className="text-sm text-zinc-500 mb-4">
          {item.subtitle} · {item.period}
        </Dialog.Description>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {item.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <p className="text-sm text-zinc-600 leading-relaxed mb-5">{item.description}</p>

        <ul className="space-y-2 mb-6">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-zinc-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {item.links && item.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-200">
            {item.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-950 text-white hover:bg-zinc-700 transition-colors"
              >
                <ExternalLink size={11} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  );
}