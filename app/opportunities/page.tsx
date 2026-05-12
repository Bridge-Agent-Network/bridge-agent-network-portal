import { OpportunitiesWorkspace } from "@/components/opportunities-workspace";
import { PrototypePage } from "@/components/prototype-layout";

export default function OpportunitiesPage() {
  return (
    <PrototypePage title="Opportunities / Deal Desk" subtitle="Submit seller situations, organize them by stage, and preview the workflow Brad and Alex will eventually support.">
      <OpportunitiesWorkspace />
    </PrototypePage>
  );
}
