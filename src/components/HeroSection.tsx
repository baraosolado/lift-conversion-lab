import { Shield, Star, Truck } from "lucide-react";
import productHero from "@/assets/product-hero.png";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Copy side */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block bg-secondary px-4 py-1.5 rounded-full text-sm font-semibold text-primary border border-primary/30">
              ⚡ Fórmula Exclusiva Patenteada
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              O <span className="text-gradient-gold">"EFEITO IMÃ"</span>: A Descoberta Científica que Força seu Corpo a{" "}
              <span className="text-gradient-gold">Expulsar a Gordura Profunda</span> Antes que Ela se Torne Pneuzinhos.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Não é apenas mais um detox. É um <strong className="text-foreground">bloqueador molecular</strong> que isola a gordura dos alimentos.{" "}
              <strong className="text-primary">Sem dietas malucas, sem efeito sanfona.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Garantia 30 dias</span>
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-accent" /> Frete Grátis</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary" /> 4.9/5 (2.847 avaliações)</span>
            </div>

            <CTAButton />
          </div>

          {/* Product image */}
          <div className="flex-1 flex justify-center">
            <img

              alt="Lift Detox Black - Suplemento Premium"
              className="w-72 md:w-96 drop-shadow-2xl animate-float" src="/lovable-uploads/9cfa01db-4dea-4551-8b17-8412a9eef4d1.png" />

          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;