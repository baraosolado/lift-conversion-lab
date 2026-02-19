import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria C.",
    age: 34,
    text: "Perdi 8kg em 45 dias sem mudar minha rotina alimentar drasticamente. O Lift Detox Black mudou minha relação com a balança!",
    stars: 5,
  },
  {
    name: "Juliana R.",
    age: 28,
    text: "Já tinha tentado de tudo. Em 3 semanas com o Lift Detox Black, minha barriga desinchou e minha disposição voltou. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Ana Paula S.",
    age: 41,
    text: "O que mais me surpreendeu foi a redução da compulsão por doces. Em 2 meses eliminei 12kg e me sinto 10 anos mais jovem.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    age: 37,
    text: "Meu marido não acreditou quando viu a diferença! 6kg em 30 dias. E o melhor: sem efeito sanfona. Já estou no terceiro pote.",
    stars: 5,
  },
  {
    name: "Carla M.",
    age: 45,
    text: "Depois da menopausa achei que nunca mais ia emagrecer. O Lift Detox me provou o contrário. 10kg a menos e contando!",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-24">
      <div className="container space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold">
            O Que Nossas Clientes <span className="text-gradient-gold">Estão Dizendo</span>
          </h2>
          <p className="text-muted-foreground">Resultados reais de mulheres reais.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center space-y-4 min-h-[250px] flex flex-col justify-center">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-foreground leading-relaxed italic">"{t.text}"</p>
            <p className="text-sm text-muted-foreground font-semibold">
              — {t.name}, {t.age} anos
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary/40 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-primary/40 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
