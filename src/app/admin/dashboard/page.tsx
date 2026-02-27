import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Dashboard | Admin | Pooja Tours and Travels",
  robots: "noindex, nofollow",
};

export default async function AdminDashboardPage() {
  // Load current content (strictly from GitHub)
  const content = await getContent();
  return <AdminDashboard initialContent={content} />;
}
