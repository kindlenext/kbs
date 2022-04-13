import { Badge, PillBadges, ButtonBadges } from "kbs-core";

function Badges() {
  return (
    <div>
      <Badge variant="primary" label="Primary" />
      <PillBadges variant="primary" label="Primary" />
      <ButtonBadges
        buttonvariant="primary"
        labelvariant="light"
        label="Primary"
      />
    </div>
  );
}

export default Badges;
