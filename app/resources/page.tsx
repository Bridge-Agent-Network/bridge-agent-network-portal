import { PrototypePage } from "@/components/prototype-layout";
import { ResourcesBrowser } from "@/components/resources-browser";

export default function ResourcesPage() {
  return (
    <PrototypePage title="Resource Library" subtitle="Filter, search, preview, and open the marketing assets agents will use in seller conversations.">
      <ResourcesBrowser />
    </PrototypePage>
  );
}
