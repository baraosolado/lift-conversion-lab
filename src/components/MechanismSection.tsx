import { Atom, Leaf, Shell, Citrus, Pill } from "lucide-react";

const ingredients = [
  {
    icon: Pill,
    name: "Quitosana",
    description: "Captura as moléculas de gordura no trato digestivo, impedindo sua absorção pelo organismo.",
  },
  {
    icon: Shell,
    name: "Psyllium",
    description: "Cria uma 'malha inteligente' que retém gorduras e toxinas, eliminando-as naturalmente.",
  },
  {
    icon: Atom,
    name: "Cromo",
    description: "Regula os níveis de insulina e reduz a compulsão por doces e carboidratos refinados.",
  },
  {
    icon: Leaf,
    name: "Spirulina",
    description: "Superalimento com 65% de proteína pura, acelera o metabolismo e nutre sem calorias extras.",
  },
  {
    icon: Citrus,
    name: "Laranja Moro",
    description: "Exclusiva da Sicília, ativa a termogênese e combate a gordura visceral mais resistente.",
  },
];

const MechanismSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">
            O Segredo Não São os Ingredientes Isolados...
          </h2>
          <p className="text-lg text-muted-foreground">
            É a <span className="text-gradient-gold font-bold">"Malha de Absorção Inteligente"</span> criada pela combinação exclusiva de Quitosana + Psyllium. Juntas, essas fibras criam uma rede molecular que{" "}
            <strong className="text-foreground">captura e expulsa a gordura</strong> antes que ela seja absorvida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="bg-card border border-border rounded-xl p-6 text-center space-y-3 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary">{item.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
