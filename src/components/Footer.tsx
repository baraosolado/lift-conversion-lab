const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lift Detox Black. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Este produto não substitui o acompanhamento médico. Resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
