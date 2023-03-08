import useSWR from "swr";
import useTranslation from "hooks/useTranslation";
import { fetcher } from "utils/fetcher";

export const ViewCount = ({ slug }: { slug: string }) => {
  const { t } = useTranslation();

  const { data: views } = useSWR(`/api/views/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <span className="text-sm self-center dark:text-gray-300">
      {views ? views : "-"} {t("blogs.view_count")}
    </span>
  );
};
