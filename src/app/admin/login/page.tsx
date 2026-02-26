import type { Metadata } from "next";
import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login | Pooja Tours and Travels",
  robots: "noindex, nofollow",
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#1a1a19]" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
