import Progress from "./components/Progress";
import ProgressColors from "./components/ProgressColors";
import ProgressHeight from "./components/ProgressHeight";
import ProgressLabel from "./components/ProgressLabels";

function ProgressTest() {
  return (
    <div>
      <Progress value="25" />
      <br />
      <Progress value="75" />
      <br />
      <ProgressColors colors="info" width="50%" value="50" />
      <br />
      <ProgressColors colors="success progress-bar-striped" width="25%" value="25" />
      <br />
      <ProgressHeight topheight="1px" topwidth="25%" topvalue="25" bottomheight="25px" 
        bottomwidth="50%" bottomvalue="50" />
      <br />
      <ProgressLabel width="75%" value="75" label="75" />

    </div>
  );
}

export default ProgressTest: