import PurchaseHistory from "@/src/component/dashboard/purchase-history";
import { getAllPurchaseHistory } from "@/src/services/payment/paymentHistory(admin)";


export default async function Page() {
  const data =
    await getAllPurchaseHistory();

  return (
    <PurchaseHistory
      payments={data?.data || []}
    />
  );
}