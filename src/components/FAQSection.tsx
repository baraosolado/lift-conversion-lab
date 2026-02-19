import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Lift Detox Black realmente funciona?",
    answer:
      "Sim! O Lift Detox Black é formulado com 5 ativos cientificamente comprovados. A combinação de Quitosana e Psyllium cria uma 'malha de absorção inteligente' que captura a gordura dos alimentos antes que ela seja absorvida. Milhares de clientes já comprovaram seus resultados.",
  },
  {
    question: "Tem efeitos colaterais?",
    answer:
      "O Lift Detox Black é 100% natural e seguro. Seus ingredientes são aprovados pela ANVISA e não causam efeitos colaterais quando consumidos conforme recomendado. Em caso de dúvida, consulte seu médico antes de iniciar o uso.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "A maioria das nossas clientes reporta os primeiros resultados visíveis entre 15 e 30 dias de uso contínuo. Para resultados máximos e duradouros, recomendamos o tratamento completo de 3 a 5 meses.",
  },
  {
    question: "Preciso fazer dieta junto?",
    answer:
      "Não é necessário seguir dietas restritivas. O Lift Detox Black age bloqueando a absorção de gordura dos alimentos que você já consome. Claro, uma alimentação equilibrada potencializa os resultados, mas não é obrigatória.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Se por qualquer motivo você não ficar satisfeita com os resultados em 30 dias, basta entrar em contato com nosso suporte e devolvemos 100% do valor pago. Sem perguntas, sem burocracia. O risco é todo nosso.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
