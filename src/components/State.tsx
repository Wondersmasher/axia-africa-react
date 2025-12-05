import { useEffect, useState, type ChangeEvent } from "react";

type ObjType = {
  name: string;
  age: number;
};
const State = () => {
  //   const [state, setter] = useState();

  const [str, setStr] = useState<string>("this works now");
  const [multiple, setMultiple] = useState<string | number | boolean>(
    "this works now"
  );
  const [num, setNum] = useState<number>(4);
  const t = 4 >= 5;
  const [bool, setBool] = useState<boolean>(t);
  const [obj, setObj] = useState<ObjType>({
    name: "",
    age: 0,
  });

  //   console.log(str, num, bool, obj, setStr, setNum, setBool, setObj);

  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  type UserValueType = {
    email: string;
    userName: string;
    course: string;
  };

  const [userValues, setUserValues] = useState<UserValueType>({
    email: "",
    userName: "",
    course: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
    //   onClick={() => {
    //     setStr("Testing the update");
    //     setNum(89);
    //     setMultiple(1);
    //   }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <input
          type="text"
          name="email"
          id="email"
          value={userValues.email}
          // onChange={(e) => {
          //   setUserValues((prev) => ({ ...prev, email: e.target.value }));
          //   //   setUserValues({
          //   //     email:e.target.value,
          //   //     course:userValues.course,
          //   //     userName:userValues.userName
          //   //   })
          // }}
          //   onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          id="userName"
          value={userValues.userName}
          //   onChange={(e) => {
          //     setUserValues((prev) => ({ ...prev, userName: e.target.value }));
          //   }}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          id="course"
          value={userValues.course}
          //   onChange={(e) => {
          //     setUserValues((prev) => ({ ...prev, course: e.target.value }));
          //   }}
          onChange={handleChange}
        />
      </div>

      <button
      // onClick={() => {
      //   console.log("this is your email value: ", email);
      // }}
      >
        Get value
      </button>
      <p>Email: {userValues.email}</p>
      <p>UserName: {userValues.userName}</p>
      <p>Course: {userValues.course}</p>
    </div>
  );
};

export default State;
