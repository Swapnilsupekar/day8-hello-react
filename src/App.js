/**
 * class :: className
 * style :: by using object literals {}
 */
function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

function Home() {
  return <div className="bg-primary text-light p-2">Home Component</div>;
}

export default App;
