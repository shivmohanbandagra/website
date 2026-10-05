const directoryLinks = [
  {
    name: "Google",
    href: "https://share.google/oaPxsPoREQryLkzv7",
  },
  {
    name: "Justdial",
    href: "https://jsdl.in/DT-10WRPEEXA7T",
  },
];

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function JustdialMark() {
  return (
    <span
      aria-hidden="true"
      className="font-sans text-[13px] font-bold leading-none tracking-[-0.06em]"
    >
      <span className="text-[#79bd42]">just</span>
      <span className="text-[#1689ca]">dial</span>
    </span>
  );
}

export default function ReviewDirectoryLinks({ className = "" }) {
  return (
    <nav
      aria-label="Review and business directory profiles"
      className={className}
    >
      {directoryLinks.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Find Shiv Mohan Band on ${name} (opens in a new tab)`}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-ivory/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-ivory/85 transition-colors hover:border-gold/50 hover:bg-white/[0.08] hover:text-ivory"
        >
          {name === "Google" ? <GoogleMark /> : <JustdialMark />}
          <span>{name}</span>
        </a>
      ))}
    </nav>
  );
}
