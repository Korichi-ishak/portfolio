import "react";

// Allow CSS custom properties (e.g. "--r") in inline styles.
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
}
