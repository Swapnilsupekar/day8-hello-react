function App() {
  return (
    <div>
      <Home />

      <Page1 />
      <Page1 />
      <Page1 />
      <Page1 />
      <Page1 />
    </div>
  );
}

// <Home />
function Home() {
  return <div>Home Component</div>;
}

function Page2() {
  return (
    <div>
      <div>Abcd</div>
      <div>Pqrs</div>
    </div>
  );
}

// <Page1 />
function Page1() {
  return (
    <div>
      <div>
        ================================================================
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Aspernatur dignissimos alias enim laboriosam, molestias sed facilis
        iure, voluptatum fugiat deserunt non exercitationem sequi hic
        placeat et explicabo illum repudiandae nihil provident fugit
        dolores eveniet. Officiis rerum perspiciatis ipsa velit magnam!
      </div>
    </div>
  );
}

export default App;
