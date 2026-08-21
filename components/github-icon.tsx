export function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-.4 6.5-1.6 6.5-7a5.3 5.3 0 0 0-1.5-3.7 4.9 4.9 0 0 0-.1-3.6s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C4.8 1.4 3.6 1.8 3.6 1.8a4.9 4.9 0 0 0-.1 3.6A5.3 5.3 0 0 0 2 11.1c0 5.4 3.3 6.6 6.5 7a4.8 4.8 0 0 0-1 3.2v4" />
      <path d="M9 18c-4.5 1.5-4.5-2.2-6.4-2.5" />
    </svg>
  );
}
