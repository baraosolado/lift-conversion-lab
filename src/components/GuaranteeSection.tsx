import { ShieldCheck } from "lucide-react";
import CTAButton from "./CTAButton";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-gold">
          <ShieldCheck className="w-16 h-16 text-primary mx-auto" />

          <h2 className="text-2xl md:text-3xl font-bold">
            O Risco é <span className="text-gradient-gold">ZERO</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Ou você emagrece, ou eu <strong className="text-foreground">compro os potes de volta de você</strong>. Simples assim. Você tem{" "}
            <strong className="text-primary">30 dias completos</strong> para testar o Lift Detox Black. Se não gostar dos resultados, devolvemos{" "}
            <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
          </p>

          <div className="inline-block bg-primary/10 border border-primary/30 rounded-xl px-6 py-3">
            <p className="font-display text-lg font-bold text-primary">GARANTIA INCONDICIONAL DE 30 DIAS</p>
          </div>

          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
