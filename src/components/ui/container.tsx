import { cn } from "@/lib/utils";

function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn(`mx-auto px-4 sm:px-6 lg:px-8 ${className}`)} {...props}>
      {children}
    </div>
  );
}

export { Container };
