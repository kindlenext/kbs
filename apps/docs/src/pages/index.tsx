import { Button } from "kbs-core";
import { useIsomorphicLayoutEffect } from "kbs-utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("KBS docs page");
  }, []);
  return (
    <div>
      <h1>KBS Docs</h1>
      <Button>Click me</Button>
    </div>
  );
}
