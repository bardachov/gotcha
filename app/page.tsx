"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { ApiStats } from "@/components/api-stats";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });
import "swagger-ui-react/swagger-ui.css";

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Gatcha API Documentation
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">
            Complete API reference for Gatcha - a gamification backend designed for Microsoft Teams. 
            Build engaging experiences with clans, assignments, and leaderboards.
          </p>
        </div>

        {/* Stats Grid */}
        <ApiStats />

        {/* API Documentation */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6">
          <SwaggerUI url="/swagger.yaml" />
        </div>
      </main>

      <footer className="mt-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Gatcha API v1.0.0 - Gamification Backend for Microsoft Teams
          </p>
        </div>
      </footer>
    </div>
  );
}
