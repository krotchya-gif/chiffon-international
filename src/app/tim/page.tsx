import type { Metadata } from "next";
import { TimContent } from "@/components/tim/tim-content";

export const metadata: Metadata = {
  title: "Tim & Kepemimpinan",
  description:
    "Kenali pimpinan Chiffon International — dari CEO hingga pimpinan lini bisnis yang mengarahkan pertumbuhan grup.",
};

export default function TimPage() {
  return <TimContent />;
}
