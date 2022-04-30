import Popovers from "./components/Popovers";
import TitlePopovers from "./components/TitlePopovers";
import Tooltips from "./components/Tooltips";

function popovers() {
  return (
    <div>
      <Popovers
        classNam="btn btn-secondary"
        placement="right"
        content="Right Popover"
        text="Right Popover"
      />
      <br /> <br />
      <TitlePopovers
        classNam="btn btn-primary"
        placement="Top"
        title="Popover"
        content="Top Popover"
        text="Popover on Top"
      />
      <br /> <br />
      <Tooltips
        classNam="btn btn-secondary"
        placement="bottom"
        title="Tooltip"
        text="Tooltips"
      />
    </div>
  );
}

export default popovers;
