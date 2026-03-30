interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const textColor = "#e11d48";
  const subColor = variant === "light" ? "rgba(255,255,255,0.85)" : "#e11d48";

  const dimensions = {
    sm: { icon: 32, fontSize: 13, subSize: 7.5, gap: 8 },
    md: { icon: 40, fontSize: 16, subSize: 9, gap: 10 },
    lg: { icon: 52, fontSize: 21, subSize: 11.5, gap: 12 },
  }[size];

  return (
    <span className="inline-flex items-center" style={{ gap: dimensions.gap }}>
      {/* Icon mark */}
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background square with rounded corners */}
        <rect width="48" height="48" rx="10" fill="#e11d48" />

        {/* Signal arc — outer */}
        <path
          d="M10 28.5 C10 19.4 16.3 12 24 12 C31.7 12 38 19.4 38 28.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        {/* Signal arc — middle */}
        <path
          d="M15 28.5 C15 22.1 19.1 17 24 17 C28.9 17 33 22.1 33 28.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        {/* Signal arc — inner */}
        <path
          d="M20 28.5 C20 25.5 21.8 23 24 23 C26.2 23 28 25.5 28 28.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Center dot */}
        <circle cx="24" cy="34" r="2.8" fill="white" />
      </svg>

      {/* Wordmark */}
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontWeight: 900,
            fontSize: dimensions.fontSize,
            letterSpacing: "0.04em",
            color: textColor,
            fontFamily: "inherit",
          }}
        >
          CONNECTCORE
        </span>
        <span
          style={{
            fontWeight: 600,
            fontSize: dimensions.subSize,
            letterSpacing: "0.18em",
            color: subColor,
            fontFamily: "inherit",
            marginTop: 2,
          }}
        >
          SOLUTIONS
        </span>
      </span>
    </span>
  );
};

export default Logo;
