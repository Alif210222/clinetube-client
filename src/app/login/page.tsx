"use client";
import LoginForm from "@/src/component/auth/login-form";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";


export default function Page() {

 const params =
    useSearchParams();

  useEffect(() => {
    const reason =
      params.get("reason");

    if (
      reason ===
      "login-required"
    ) {
      toast.error(
        "Unauthorized. Login first."
      );
    }

    if (
      reason ===
      "session-expired"
    ) {
      toast.error(
        "Session expired. Login again."
      );
    }

    if (
      reason ===
      "invalid-token"
    ) {
      toast.error(
        "Invalid session. Login again."
      );
    }
  }, [params]);


  return <LoginForm />;
}