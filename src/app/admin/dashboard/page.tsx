import type { Metadata } from "next";
import { getLocalContent } from "@/lib/content";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Dashboard | Admin | Pooja Tours and Travels",
  robots: "noindex, nofollow",
};

export default async function AdminDashboardPage() {
  // Load current content (local for editing baseline)
  const content = getLocalContent();
  return <AdminDashboard initialContent={content} />;
}
