import { useI18n } from "next-localization";
import { SpanSecondary } from "./SpanSecondary";

export const ReadingTime = ({ minutes }: { minutes: Number }) => {
  const i18n = useI18n();

  return (
    <SpanSecondary className="text-sm self-center">
      {` ● ${minutes} ${i18n.t("blogs.reading_time")}`}
    </SpanSecondary>
  );
};
