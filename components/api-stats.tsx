import { Users, Shield, Zap, Trophy } from "lucide-react";

const stats = [
  {
    label: "Auth",
    value: "JWT Bearer",
    description: "Secure authentication via Microsoft Teams tokens",
    icon: Shield,
  },
  {
    label: "Endpoints",
    value: "10+",
    description: "RESTful API endpoints for all features",
    icon: Zap,
  },
  {
    label: "Features",
    value: "5",
    description: "Users, Clans, Assignments, Leaderboards, Auth",
    icon: Users,
  },
  {
    label: "Version",
    value: "1.0.0",
    description: "Production-ready gamification backend",
    icon: Trophy,
  },
];

export function ApiStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary/20 transition-all duration-300 group-hover:bg-primary/40" />
        </div>
      ))}
    </div>
  );
}
