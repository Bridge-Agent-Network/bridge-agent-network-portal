import { AgentsWorkspace } from "@/components/agents-workspace";
import { PrototypePage } from "@/components/prototype-layout";

export default function AgentsPage() {
  return (
    <PrototypePage title="Agent Directory" subtitle="Add dummy agents, inspect territory coverage, and preview the future public/private member directory.">
      <AgentsWorkspace />
    </PrototypePage>
  );
}
