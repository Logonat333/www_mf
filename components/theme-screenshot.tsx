type ThemeScreenshotProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  className?: string;
};

export function ThemeScreenshot({ lightSrc, darkSrc, alt, className }: ThemeScreenshotProps) {
  const rootClassName = className ? `theme-screenshot ${className}` : "theme-screenshot";

  return (
    <span className={rootClassName}>
      <img
        className="theme-screenshot-image theme-screenshot-light"
        src={lightSrc}
        alt={alt}
        width={2090}
        height={1580}
        loading="lazy"
        decoding="async"
      />
      <img
        className="theme-screenshot-image theme-screenshot-dark"
        src={darkSrc}
        alt={alt}
        width={2090}
        height={1580}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
