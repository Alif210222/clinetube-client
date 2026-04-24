import DashboardLayout from "@/src/component/dashboard/Dashboard-layout";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}