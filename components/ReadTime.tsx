import { useI18n } from "next-localization";

export const ReadTime = ({ minutes }: { minutes: Number }) => {
  const i18n = useI18n();

  return (
    <span className="text-sm self-center">
      {` ● ${minutes} ${i18n.t("blogs.reading_time")}`}
    </span>
  );
};
