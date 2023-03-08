import useTranslation from "hooks/useTranslation";

export const ReadTime = ({ minutes }: { minutes: Number }) => {
  const { t } = useTranslation();

  return (
    <span className="text-sm self-center">
      {`${minutes} ${t("blogs.reading_time")}`}
    </span>
  );
};
