import CTAButton from "./CTAButton";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container text-center space-y-8 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">
          Está Pronta Para <span className="text-gradient-gold">Destravar Seu Metabolismo?</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Junte-se a mais de <strong className="text-foreground">2.847 mulheres</strong> que já transformaram seus corpos com o Lift Detox Black. Sua versão mais confiante está a um clique de distância.
        </p>
        <CTAButton />
        <p className="text-xs text-muted-foreground">
          🔒 Compra 100% segura · Seus dados estão protegidos · Garantia de 30 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
