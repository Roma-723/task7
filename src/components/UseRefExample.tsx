
const UseRefExample = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-900 w-80 flex justify-center rounded-2xl h-70">
        <form>
          <div className="w-60 mt-10">
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <input className="w-full outline-blue-950 outline-2  border-blue-900  border border-solid h-10 rounded-[5px] mt-3 placeholder:pl-2 pl-2"  placeholder="Name" type="text" />
            <input className="w-full outline-blue-950 outline-2   border-blue-900 border border-solid h-10 rounded-[5px] mt-3 placeholder:pl-2 pl-2" placeholder="password" type="number" />
            <button className="w-full mt-5 bg-slate-800 h-10  rounded-[5px]">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UseRefExample
