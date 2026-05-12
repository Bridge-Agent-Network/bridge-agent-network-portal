import { PrototypePage } from "@/components/prototype-layout";
import { SellerOptionsCalculator } from "@/components/seller-options-calculator";

export default function CalculatorPage() {
  return (
    <PrototypePage title="Seller Options Calculator" subtitle="A local MVP of the tool that will become the agent's magic weapon: compare every serious seller path in one view.">
      <SellerOptionsCalculator />
    </PrototypePage>
  );
}
