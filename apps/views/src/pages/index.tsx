import Link from "next/link";

import { Button } from "kbs-core";

import { useIsomorphicLayoutEffect } from "kbs-utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("KBS docs page");
  }, []);
  return (
    <div>
      <h1>KBS Views</h1>
      <Link href="example">Example</Link>
    </div>
  );
}
