import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline";
}

export function GlowButton({ className, variant = "primary", ...props }: GlowButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-blue",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 neon-glow-purple",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary/10",
  };

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300 active:scale-95 font-semibold",
        variantClasses[variant as keyof typeof variantClasses],
        className
      )}
      {...props}
    />
  );
}
