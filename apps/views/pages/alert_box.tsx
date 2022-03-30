import Link from "next/link";

import AlertBox from "components/alert-box/index";

const Alert = () => {
  return (
    <div className="container my-5">
      <AlertBox varient="primary" label="Custom message" />
      <AlertBox varient="danger">
        <h4>Alert!</h4>
        <p>
          I'm here by using children of Alert component. Aww yeah, you
          successfully read this important alert message. This example text is
          going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p>{`You can use <hr /> tag in Alert component simply.`}</p>
      </AlertBox>
      <AlertBox varient="info">
        <p>
          You can use <Link href="#">example link(s)</Link> in alert box simply.
        </p>
      </AlertBox>
      <AlertBox
        varient="secondary"
        label="An error occured while displaying previous error."
      />
      <AlertBox varient="success">
        <strong>Be bold!</strong>{" "}
        {`You can simply use <strong></strong> tag in Alert Component.`}
      </AlertBox>
      <AlertBox varient="warning" label="I'm from warning alert!" />
      <AlertBox varient="dark" label="I'm from dark alert!" />
      <AlertBox varient="light" label="I'm from light alert!" />
    </div>
  );
};

export default Alert;
