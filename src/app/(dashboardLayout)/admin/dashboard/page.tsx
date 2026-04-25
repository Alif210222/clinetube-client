
import AdminStatistics from "@/src/component/dashboard/admin-statistics";
import { getAdminStats } from "@/src/services/admin/statistics";

export default async function Page() {
  const data =
    await getAdminStats();

  return (
    <AdminStatistics
      stats={data?.data}
    />
  );
}