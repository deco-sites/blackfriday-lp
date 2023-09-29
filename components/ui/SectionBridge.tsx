export interface Props {
  title?: string;
  subTitle?: string;
  titleButton?: string;
  link?: string;
}

export default function SectionBridge({
  title = "New Release Fashion",
  subTitle =
    "Our Latest Fashion that can add to your dress style for especial day. Discount applies to all products without any expection!",
  titleButton = "See More",
  link,
}: Props) {
  return (
    <section class="flex items-center justify-center w-full h-full bg-black">
      <div class="min-w-[1360px] h-[500px] flex flex-col items-center justify-center">
        <div class="flex flex-col text-center m-20 gap-4">
          <div class="w-full flex flex-col items-center justify-center ">
            <h1 class="lg:max-w-[800px] text-white text-[80px] text-center leading-[80px] font-bold mb-4">
              {title}
            </h1>
            <span class="lg:max-w-[800px] text-white text-[20px] text-center leading-8 font-normal">
              {subTitle}
            </span>
          </div>
          <button class="btn text-black bg-white hover:bg-black/70 hover:text-white hover:border-white">
            <a href={link}>{titleButton}</a>
          </button>
        </div>
      </div>
    </section>
  );
}
