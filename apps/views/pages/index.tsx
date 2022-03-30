import Link from "next/link";

import { Button } from "kbs-core";

import { useIsomorphicLayoutEffect } from "kbs-utils";

import stl from "./index.module.css";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("KBS docs page");
  }, []);
  return (
    <div className={`container my-5 ${stl.container}`}>
      <h1>KBS Views</h1>
      <Link href="/alert_box">Alert Component</Link>
      <Link href="/">Example Component Link</Link>
      <br />
      <br />
      <Button>Hello</Button>
    </div>
  );
}
