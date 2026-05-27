import { cn } from "@/lib/utils";

const getBankLogoSrc = () => {
  if (typeof window === "undefined") {
    return "/assets/generated/bcb-logo.png";
  }

  const path = window.location.pathname;

  if (path.startsWith("/connected-sites/agm-pro")) {
    return "./assets/generated/bcb-logo.png";
  }

  if (
    path === "/agm.html" ||
    [
      "/dashboard",
      "/shareholders",
      "/registration",
      "/reports",
      "/import",
      "/admin",
      "/board",
      "/checkin",
    ].includes(path)
  ) {
    return "/assets/agm-pro/generated/bcb-logo.png";
  }

  return "/assets/generated/bcb-logo.png";
};

export function AnimatedAgmMark({
  className,
  size = 64,
  animate = true,
  label = "AGM app mark",
}: {
  className?: string;
  size?: number;
  animate?: boolean;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden border border-[#5abf95]/40 bg-white shadow-[0_14px_34px_rgba(5,18,13,0.38)]",
        animate ? "agm-mark-shell agm-mark-pulse" : "",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={label}
      role="img"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          animate ? "agm-mark-sheen" : "",
        )}
      />
      <img
        src={getBankLogoSrc()}
        alt=""
        className={cn(
          "h-full w-full object-contain",
          animate ? "agm-mark-core" : "",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
