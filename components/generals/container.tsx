import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export default Container;
