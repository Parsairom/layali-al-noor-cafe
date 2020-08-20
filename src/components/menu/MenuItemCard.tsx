import { Coffee } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export function MenuItemCard({
  id,
  price,
  dict,
}: {
  id: string;
  price: number;
  dict: Dictionary;
}) {
  const item = dict.menuItems[id as keyof Dictionary["menuItems"]];

  return (
    <div className="group flex flex-col gap-4 border border-line bg-noir-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
      <div className="flex items-start justify-between gap-4">
        <Coffee size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-gold/70" />
        <span className="font-display text-lg text-gold whitespace-nowrap">
          {price} <span className="text-xs font-body uppercase tracking-widest text-gold/70">{dict.common.aedShort}</span>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl text-cream">{item.name}</h3>
        <span className="h-px w-10 bg-gold-deep" aria-hidden="true" />
        <p className="font-body text-sm leading-relaxed text-cream-dim">{item.description}</p>
      </div>
    </div>
  );
}
