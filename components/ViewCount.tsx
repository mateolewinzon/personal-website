import { useI18n } from "next-localization";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

export const ViewCount = ({ slug }: { slug: string }) => {
  const i18n = useI18n();

  const { data: views } = useSWR(`/api/views/${slug}`, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <span className="text-sm self-center dark:text-gray-300">
      {views ? views : "-"} {i18n.t("blogs.view_count")}
    </span>
  );
};
