import Image from "next/image"
import Link from "next/link"

type BrandLogoProps = {
  /** When true, shows the product line after the ClickMasters wordmark. */
  productSuffix?: boolean
  className?: string
}

export function BrandLogo({ productSuffix = true, className = "" }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group shrink-0 w-fit ${className}`}
    >
      <span className="inline-flex items-center bg-black rounded-lg px-2 py-1 shrink-0 ring-1 ring-white/10 transition-transform group-hover:scale-[1.02]">
        <Image
          src="/clickmasters-logo.png"
          alt="ClickMasters"
          width={2048}
          height={251}
          className="h-7 sm:h-8 w-auto"
          priority
          sizes="(max-width: 768px) 200px, 260px"
        />
      </span>
      {productSuffix ? (
        <span className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
          POS
        </span>
      ) : null}
    </Link>
  )
}
