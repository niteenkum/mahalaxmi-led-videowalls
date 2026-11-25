"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock, ArrowUpRight } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Invalid credentials");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-t-surface text-t-ink flex flex-col justify-between p-5 sm:p-8">
      <div className="mx-auto w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-t-border bg-t-card px-4 py-2 text-xs font-semibold text-t-ink transition hover:border-t-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Website
        </Link>
      </div>

      <div className="mx-auto w-full max-w-md rounded-[2.25rem] border border-t-border bg-t-card p-8 sm:p-10 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="relative h-11 w-[132px] shrink-0 overflow-hidden rounded-xl border border-t-border/60 bg-black">
            <Image
              src="/images/logo.png"
              alt="Mahalaxmi Visuals Private Limited — LED Video Walls"
              fill
              unoptimized
              className="object-contain"
              sizes="132px"
            />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-t-accent-soft px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-t-accent">
            <Lock className="h-3 w-3" />
            Admin Access
          </span>
        </div>

        <div className="mt-6">
          <h1 className="font-display text-2xl font-bold text-t-ink">
            Sign in to Lead Console
          </h1>
          <p className="mt-1.5 text-xs text-t-muted">
            Protected portal for Mahalaxmi LED Video Walls inquiries &amp;
            quotes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
          <div>
            <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mahalaxmi.com"
              className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink outline-none transition focus:border-t-accent focus:bg-t-card"
            />
          </div>

          <div>
            <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-t-muted mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full rounded-2xl border border-t-border bg-t-surface/70 px-4 py-3.5 text-sm text-t-ink outline-none transition focus:border-t-accent focus:bg-t-card"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-t-accent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-t-accent-fg shadow-lg transition hover:bg-t-accent-hover disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Sign In to Dashboard"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      <p className="text-center font-mono text-[11px] text-t-muted">
        Mahalaxmi LED Video Walls • Neon PostgreSQL (ap-southeast-1)
      </p>
    </div>
  );
}
