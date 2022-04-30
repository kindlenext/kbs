import Link from "next/link";

import { Button } from "kbs-core";

import { useIsomorphicLayoutEffect } from "kbs-utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("KBS docs page");
  }, []);
  return (
    <div className="container my-5">
      <h1>KBS Views</h1>
      <Link href="/">Example Component Link</Link>
      <br />
      <br />
      <Button>Hello</Button>
      <br />
      <Link href="/collapse">Collapse</Link>
    </div>
  );
}
