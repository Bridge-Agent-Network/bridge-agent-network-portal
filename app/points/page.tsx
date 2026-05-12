import { PointsDetail } from "@/components/points-detail";
import { PrototypePage } from "@/components/prototype-layout";

export default function PointsPage() {
  return (
    <PrototypePage title="Bridge Points" subtitle="Preview the point menu, rewards logic, and admin-style review behavior without needing the real backend yet.">
      <PointsDetail />
    </PrototypePage>
  );
}
