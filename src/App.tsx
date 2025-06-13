import BOT from "./bot";

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-100 grid grid-cols-12">
      <div className="col-span-9">
        <div className="w-full h-full bg-white"></div>
      </div>
      <div className="col-span-3 border rounded-l-2xl overflow-hidden">
        <div className="w-full h-full bg-white">
          <BOT />
        </div>
      </div>
    </div>
  );
}

export default App;
