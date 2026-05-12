import { LeaderboardsBrowser } from "@/components/leaderboards-browser";
import { PrototypePage } from "@/components/prototype-layout";

export default function LeaderboardPage() {
  return (
    <PrototypePage title="Leaderboards" subtitle="Compare different ways of celebrating activity, education, deal progress, and seller-option strategy.">
      <LeaderboardsBrowser />
    </PrototypePage>
  );
}
