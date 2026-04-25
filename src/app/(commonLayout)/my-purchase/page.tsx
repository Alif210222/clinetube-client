
import MyPurchaseHistory from "@/src/component/user/my-purchase-history";
import { getMyPurchaseHistory } from "@/src/services/payment/myPurchase";

export default async function Page() {
  const data =
    await getMyPurchaseHistory();

  return (
    <MyPurchaseHistory
      payments={data?.data || []}
    />
  );
}