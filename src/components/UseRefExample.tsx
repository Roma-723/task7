import { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const UseRefExample = () => {
  const passwordRef = useRef(null);
  const textRef = useRef(null);
  const nameRef = useRef(null)
  const [show, setShow] = useState(false)
  const handleSubmit = () => {
    setShow(!show)
  }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();

  //   const value = passwordRef.current?.value || "";
  //   const values = names.current?.value || "";

  //   if (value.length < 8) {
  //     passwordRef.current?.classList.add("border-2", "border-red-500");

  //     if (textRef.current) {
  //       textRef.current.textContent = "boyad 8 rakam boshad";
  //     }
  //   } else {
  //     passwordRef.current?.classList.remove("border-2", "border-red-500");

  //     if (textRef.current) {
  //       textRef.current.textContent = "";
  //     }
  //   }
  //   if (values.length < 3) {
  //     names.current?.classList.add("border-2", "border-red-500");

  //     if (nameRef.current) {
  //       nameRef.current.textContent = "boyad 3 az xamai kami kam 3 taboshad";
  //     }
  //   } else {
  //     names.current?.classList.remove("border-2", "border-red-500");

  //     if (names.current) {
  //       nameRef.current.textContent = "";
  //     }
  //   }
  // };




  return (
    <div className="flex justify-center">
      <div className="bg-slate-900 w-80 flex justify-center rounded-2xl h-80">
        <form >
          <div className="w-60 mt-10">
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <input
              autoFocus
              className="w-full outline-blue-950 outline-2 h-10 rounded-[5px] mt-3 pl-2 transition-all focus:ring-4 focus:ring-blue-500"
              placeholder="Name"
              type="text"
            // ref={names}

            />
            <p ref={nameRef} className="text-red-500 mt-2 text-sm"></p>
            <div className="flex gap-5">

              <input
                ref={passwordRef}
                className="w-full outline-blue-950 outline-2 h-10 rounded-[5px] mt-3 pl-2 transition-all focus:ring-4 focus:ring-blue-500"
                placeholder="password"
                type={show ? "text" : "password"}
                minLength={8}
                maxLength={100}

              />
              <p className="absolute top-47 right-125" onClick={handleSubmit}>
                {show ?

                  <FaEye ></FaEye> :
                  <FaEyeSlash ></FaEyeSlash>
                }
              </p>
            </div>
            <p ref={textRef} className="text-red-500 mt-2 text-sm"></p>
            <button className="w-full mt-5 bg-slate-800 h-10 rounded-[5px]">
              Save
            </button>
          </div>
        </form>
      </div>

      { }
    </div>
  );
};

export default UseRefExample;