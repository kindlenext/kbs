import Badge from "./components/Badge";
import PillBadges from "./components/PillBadges";
import ButtonBadges from "./components/ButtonBadge";

function Badges() {
  return (
    <div>
      <Badge variant="primary" label="Primary" />
      <Badge variant="Seconday" label="Badge" />
      <Badge variant="Dark h1" label="Badge" />
      <PillBadges variant="primary" label="Primary" />
      <ButtonBadges buttonvariant="primary" labelvariant="light" label="2" />
    </div>
  );
}

export default Badges;
