"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Phone,
  Mail,
  Trash2,
  RefreshCw,
  Search,
  MessageCircle,
  Inbox,
  LogOut,
} from "lucide-react";
import type { Inquiry, InquiryStatus } from "@/lib/inquiriesStore";

const STATUS_OPTIONS: InquiryStatus[] = ["new", "contacted", "quoted", "closed"];

export default function AdminDashboard() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<InquiryStatus | "all">(
    "all"
  );
  const [search, setSearch] = useState("");

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", { cache: "no-store" });
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = (await res.json()) as { inquiries?: Inquiry[] };
      setInquiries(data.inquiries ?? []);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const handleStatusChange = async (id: string, status: InquiryStatus) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    await fetch(`/api/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  };

  const handleDelete = async (id: string) => {
    setInquiries((prev) => prev.filter((item) => item.id !== id));
    await fetch(`/api/inquiries/${id}`, { method: "DELETE" });
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const filtered = inquiries.filter((item) => {
    const matchesStatus =
      filterStatus === "all" || item.status === filterStatus;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.message.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const counts = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    quoted: inquiries.filter((i) => i.status === "quoted").length,
  };

  return (
    <div className="min-h-screen bg-t-surface text-t-ink">
      <header className="sticky top-0 z-30 border-b border-t-border bg-t-bg/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-t-border bg-t-surface px-3.5 py-1.5 text-xs font-semibold text-t-ink transition hover:border-t-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Website
            </Link>
            <div>
              <h1 className="font-display text-base font-bold text-t-ink">
                Mahalaxmi Admin — Lead Console
              </h1>
              <p className="font-mono text-[10px] text-t-muted">
                Connected to Neon PostgreSQL (Singapore ap-southeast-1)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={fetchInquiries}
              className="inline-flex items-center gap-1.5 rounded-full bg-t-accent px-4 py-2 text-xs font-semibold text-t-accent-fg transition hover:bg-t-accent-hover"
            >
              <RefreshCw
                className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full border border-t-border bg-t-surface px-4 py-2 text-xs font-semibold text-t-ink transition hover:border-red-400 hover:text-red-600"
            >
              <LogOut className="h-3.5 w-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total Leads", value: counts.total },
            { label: "New", value: counts.new },
            { label: "Contacted", value: counts.contacted },
            { label: "Quoted", value: counts.quoted },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-t-border bg-t-card p-5 shadow-xs"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-t-muted">
                {stat.label}
              </p>
              <p className="font-display mt-1 text-3xl font-bold text-t-ink">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {(["all", ...STATUS_OPTIONS] as const).map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setFilterStatus(status)}
                className={`rounded-full px-4 py-2 font-mono text-xs font-semibold capitalize transition ${
                  filterStatus === status
                    ? "bg-t-accent text-t-accent-fg"
                    : "border border-t-border bg-t-card text-t-muted hover:text-t-ink"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-t-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, phone, category..."
              className="w-full rounded-full border border-t-border bg-t-card py-2.5 pl-10 pr-4 text-xs text-t-ink outline-none focus:border-t-accent"
            />
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-t-border bg-t-card p-16 text-center text-sm text-t-muted">
            Loading inquiries from Neon DB...
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-3xl border border-t-border bg-t-card p-16 text-center space-y-3">
            <Inbox className="mx-auto h-10 w-10 text-t-muted/50" />
            <p className="font-display text-lg font-bold text-t-ink">
              No Inquiries Found
            </p>
            <p className="text-xs text-t-muted">
              Submit the Contact Us form on the homepage to see leads appear
              here in real time.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-t-border bg-t-card p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="font-display text-lg font-bold text-t-ink">
                      {item.name}
                    </h2>
                    <span className="rounded-full bg-t-accent-soft px-3 py-0.5 font-mono text-[11px] font-semibold text-t-accent">
                      {item.category}
                    </span>
                    <span className="font-mono text-[11px] text-t-muted">
                      {new Date(item.createdAt).toLocaleString("en-IN")}
                    </span>
                  </div>

                  <p className="text-sm text-t-ink/90">
                    {item.message || "No additional message provided."}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-1 text-xs">
                    <a
                      href={`tel:${item.phone}`}
                      className="inline-flex items-center gap-1.5 font-mono font-semibold text-t-ink hover:text-t-accent"
                    >
                      <Phone className="h-3.5 w-3.5 text-t-accent" />
                      {item.phone}
                    </a>
                    <a
                      href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono font-semibold text-t-muted hover:text-t-ink"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                    {item.email && (
                      <a
                        href={`mailto:${item.email}`}
                        className="inline-flex items-center gap-1.5 text-t-muted hover:text-t-ink"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {item.email}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end lg:self-center">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(
                        item.id,
                        e.target.value as InquiryStatus
                      )
                    }
                    className="rounded-xl border border-t-border bg-t-surface px-3.5 py-2 font-mono text-xs font-bold capitalize text-t-ink outline-none focus:border-t-accent"
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    aria-label="Delete inquiry"
                    className="rounded-xl border border-t-border p-2.5 text-t-muted transition hover:border-red-400 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
