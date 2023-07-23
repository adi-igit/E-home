"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmtryStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

export default function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}: EmtryStateProps) {
  const router = useRouter();

  return (
    <div
      className="
        sm:mt-10
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div
        className="
        w-48 mt-4
      "
      >
        {showReset && (
          <Button
            outline
            label="Remove all filter"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}
