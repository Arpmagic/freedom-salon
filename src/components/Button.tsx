import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "ghost";
type Size = "md" | "sm";

type Common = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "gold",
    size = "md",
    className = "",
    ...rest
  } = props;
  const classes = ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : "", className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...anchorRest}>
        <span className="btn__label">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className="btn__label">{children}</span>
    </button>
  );
}
