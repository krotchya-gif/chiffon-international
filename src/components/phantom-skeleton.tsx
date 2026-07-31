"use client";

import * as React from "react";

export function PhantomSkeleton({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    import("@aejkatappaja/phantom-ui/standalone").then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <phantom-ui loading={(ready && loading) || undefined}>
      {children}
    </phantom-ui>
  );
}
