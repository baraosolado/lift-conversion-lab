interface CTAButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const CTAButton = ({ className = "", children, onClick }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-cta text-cta-foreground font-display text-lg md:text-xl font-bold uppercase tracking-wider px-8 py-4 md:py-5 rounded-lg shadow-cta hover:scale-105 hover:shadow-lg transition-all duration-300 w-full md:w-auto cursor-pointer ${className}`}
    >
      {children || "SIM! QUERO DESTRAVAR MEU METABOLISMO AGORA"}
    </button>
  );
};

export default CTAButton;
