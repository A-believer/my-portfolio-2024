export default function SectionHeaderComp({ preText, mainText }) {
  return (
    <div className="text-center flex flex-col items-center justify-center capitalize">
      <p className="text-textII font-semibold">{preText}</p>
      <h2 className="text-textI font-bold md:text-5xl md:leading-[72px] text-[32px] leading-[48px]">
        {mainText}
      </h2>
    </div>
  );
}
