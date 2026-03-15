import { Link } from 'react-router';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
        <span className="text-primary-foreground font-bold text-lg">M</span>
      </div>
      {showText && (
        <span className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
          MailFlow
        </span>
      )}
    </Link>
  );
}
