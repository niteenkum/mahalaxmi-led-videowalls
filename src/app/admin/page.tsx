import { Suspense } from "react";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import AdminDashboard from "@/components/AdminDashboard";

async function ProtectedAdmin() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    redirect("/admin/login");
  }
  return <AdminDashboard />;
}

export default function AdminPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-t-surface flex items-center justify-center font-mono text-xs text-t-muted">
          Verifying admin session...
        </div>
      }
    >
      <ProtectedAdmin />
    </Suspense>
  );
}
