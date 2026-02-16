import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
}

export function GlowButton({ className, variant = "primary", ...props }: GlowButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-blue border border-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-glow-purple border border-secondary/20",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]",
  };

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 active:scale-95 font-bold tracking-tight",
        variantClasses[variant as keyof typeof variantClasses],
        className
      )}
      {...props}
    />
  );
}
