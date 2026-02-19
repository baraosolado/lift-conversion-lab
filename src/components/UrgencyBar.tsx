import { Timer } from "lucide-react";

const UrgencyBar = () => {
  return (
    <div className="bg-urgency py-2.5 px-4 text-center sticky top-0 z-50">
      <div className="container flex items-center justify-center gap-2 text-sm md:text-base font-semibold text-primary-foreground">
        <Timer className="w-4 h-4 animate-pulse-slow" />
        <span>🔥 Oferta Especial de Lançamento: Lote com Laranja Moro Original <strong className="underline">LIMITADO</strong></span>
      </div>
    </div>
  );
};

export default UrgencyBar;
