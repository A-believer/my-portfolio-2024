export default function SectionHeaderComp({
  chapter,
  title,
  preText,
  mainText,
  subtitle,
}) {
  const displayChapter = chapter || preText;
  const displayTitle = title || mainText;

  return (
    <div className="w-full pb-4 sm:pb-6 border-b border-border animate-on-scroll">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4">
        <div className="flex items-baseline gap-2.5 sm:gap-3 flex-wrap">
          {displayChapter && (
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold text-accent tracking-[0.2em] uppercase">
              {displayChapter.includes("//") ? displayChapter : `${displayChapter} //`}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-textI tracking-tight uppercase break-words">
            {displayTitle}
          </h2>
        </div>
        {subtitle && (
          <p className="font-mono text-[10px] sm:text-xs text-textIII tracking-wider uppercase mt-1 md:mt-0">
            {subtitle}
          </p>
        )}
      </div>
      {/* Decorative Gold Accent Hairline Rule */}
      <div className="w-12 sm:w-16 h-[2px] bg-accent mt-3 sm:mt-4"></div>
    </div>
  );
}
