import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState<any[]>([]);

  async function getUser() {
    try {
      const res = await fetch("https://to-dos-api.softclub.tj/api/to-dos");
      const result = await res.json();

      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Todo Users
        </h1>
        <p></p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300"
            >
              <img
                src={`https://to-dos-api.softclub.tj/images/${e.images?.[0]?.imageName}`}
                alt={e.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">
                  {e.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  {e.description}
                </p>

                <span
                  className={`px-4 py-2 rounded-full text-white text-sm ${
                    e.isCompleted
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {e.isCompleted ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseEffectExample;