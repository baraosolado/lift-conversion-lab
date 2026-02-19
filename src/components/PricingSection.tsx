import { Check, Crown, Gift } from "lucide-react";
import productBundle from "@/assets/product-bundle.png";
import product1Pot from "@/assets/product-1pot.png";
import product3Pots from "@/assets/product-3pots.png";
import product5Pots from "@/assets/product-5pots.png";
import CTAButton from "./CTAButton";

const bonuses = [
{ name: "Guia Detox 48h", value: "R$ 97" },
{ name: "Protocolo Anti-Inflamatório", value: "R$ 127" },
{ name: "Comunidade VIP de Suporte", value: "R$ 197" }];


const plans = [
{
  bottles: 1,
  title: "Iniciante",
  price: "197",
  originalPrice: "297",
  perBottle: "197",
  popular: false,
  savings: null,
  image: product1Pot
},
{
  bottles: 3,
  title: "Tratamento Completo",
  price: "441",
  originalPrice: "891",
  perBottle: "147",
  popular: false,
  savings: "Economize R$ 450",
  image: product3Pots
},
{
  bottles: 5,
  title: "Best Seller",
  price: "585",
  originalPrice: "1.485",
  perBottle: "117",
  popular: true,
  savings: "Economize R$ 900",
  image: product5Pots
}];


const PricingSection = () => {
  return (
    <section className="py-16 md:py-24" id="oferta">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">
            Escolha Seu <span className="text-gradient-gold">Kit de Transformação</span>
          </h2>
          <p className="text-muted-foreground text-lg">Quanto maior o kit, maior a economia e mais resultados duradouros.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) =>
          <div
            key={plan.bottles}
            className={`relative bg-card border rounded-2xl p-6 md:p-8 space-y-5 transition-all duration-300 hover:shadow-card-hover ${
            plan.popular ?
            "border-primary shadow-gold scale-105 md:scale-110" :
            "border-border"}`
            }>

              {plan.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-5 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                  <Crown className="w-4 h-4" /> MAIS VENDIDO
                </div>
            }

              <div className="flex justify-center">
                <img src={plan.image} alt={`${plan.bottles} ${plan.bottles === 1 ? "pote" : "potes"} Lift Detox Black`} className="h-36 md:h-44 object-contain" />
              </div>

              <div className="text-center space-y-2">
                <h3 className="font-display text-xl font-bold">{plan.title}</h3>
                <p className="text-muted-foreground">{plan.bottles} {plan.bottles === 1 ? "pote" : "potes"}</p>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground line-through">De R$ {plan.originalPrice}</p>
                <p className="text-4xl font-display font-bold text-primary">
                  R$ {plan.price}
                </p>
                <p className="text-sm text-muted-foreground">ou R$ {plan.perBottle}/pote</p>
                {plan.savings &&
              <span className="inline-block mt-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold">
                    {plan.savings}
                  </span>
              }
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Frete Grátis</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Garantia 30 dias</li>
                {plan.bottles >= 3 &&
              <li className="flex items-center gap-2"><Gift className="w-4 h-4 text-primary" /> 3 Bônus Digitais</li>
              }
              </ul>

              <CTAButton className="text-base py-3" />
            </div>
          )}
        </div>

        {/* Bonuses */}
        <div className="max-w-3xl mx-auto bg-card border border-primary/20 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">
              <Gift className="w-6 h-6 text-primary inline mr-2" />
              VALOR ACUMULADO EM BÔNUS: <span className="text-gradient-gold">R$ 421</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Grátis nos kits de 3 e 5 potes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {bonuses.map((b, i) =>
            <div key={i} className="bg-secondary rounded-xl p-4 text-center space-y-1">
                <p className="text-sm font-semibold text-foreground">{b.name}</p>
                <p className="text-xs text-muted-foreground">Valor: <span className="line-through">{b.value}</span> → <span className="text-accent font-bold">GRÁTIS</span></p>
              </div>
            )}
          </div>
        </div>

        {/* Bundle image */}
        <div className="flex justify-center">
          <img alt="Kit Lift Detox Black" className="max-w-md w-full rounded-xl" src="/lovable-uploads/076296e9-bca4-4443-bf29-a063554c25cf.png" />
        </div>
      </div>
    </section>);

};

export default PricingSection;