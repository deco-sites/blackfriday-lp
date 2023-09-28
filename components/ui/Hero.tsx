import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  backgroundImage: ImageWidget;
  lcp?: boolean;
}

export default function Hero({ backgroundImage, lcp }: Props) {
  return (
    <div class="w-full h-screen">
      <div
        class="hero place-items-start min-h-[95%] overflow-hidden"
        width="100%"
        height="100%"
        sizes="100vw, 100vh"
        style={`background-image: url(${backgroundImage});`}
        preload="true"
        loading={lcp ? "eager" : "lazy"}
      >
        <div class="hero-overlay bg-gradient-to-b w-screen mix-blend-multiply" />
      </div>
    </div>
  );
}
