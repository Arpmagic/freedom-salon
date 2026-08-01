export function Stars({ value = 5, className = "" }: { value?: number; className?: string }) {
  return (
    <span className={`stars ${className}`} aria-label={`${value}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={i < value ? "stars__icon is-on" : "stars__icon"}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 2.4l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.4 6.6 19.2l1-6.1L3.2 8.8l6.1-.9L12 2.4z"
          />
        </svg>
      ))}
    </span>
  );
}
