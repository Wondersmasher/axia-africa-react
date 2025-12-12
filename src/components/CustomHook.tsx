import { useWindowSize } from "../hook/hook";

const Component1 = () => {
  // window size here

  const [windowSize] = useWindowSize();
  console.log("window size", windowSize);
  return <div>Component 1</div>;
};
const Component2 = () => {
  // window size here

  const [windowSize] = useWindowSize();
  console.log("windlow size", windowSize);
  return <div></div>;
};
const Component3 = () => {
  // window size here
  const [windowSize] = useWindowSize();
  console.log("window size", windowSize);
  return <div></div>;
};

export { Component1, Component2, Component3 };
