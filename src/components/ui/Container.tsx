import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={cn("container-luxe", className)}>{children}</Tag>;
}
