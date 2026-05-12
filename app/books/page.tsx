import { PrototypePage } from "@/components/prototype-layout";
import { BookRequestPanel } from "@/components/book-request-panel";

export default function BooksPage() {
  return (
    <PrototypePage title="Book Requests" subtitle="A local form for thinking through branded mini book ordering, quantities, and fulfillment notes.">
      <BookRequestPanel />
    </PrototypePage>
  );
}
