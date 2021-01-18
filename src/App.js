/**
 * class :: className
 * style :: by using object literals {}
 */
function App() {
  return (
    <div className="container-fluid">
      <Header />

      <PricingText />

      <PricingCard />
    </div>
  );
}

function Header() {
  return (
    <div
      className="row bg-light"
      style={{ height: "60px", boxShadow: "2px 2px #dee2e6" }}
    >
      <div
        className="col-3  d-flex align-items-center "
        style={{ fontSize: "1.25rem" }}
      >
        Company Name
      </div>
      <div className="col-9 d-flex align-items-center justify-content-end ">
        <button type="button" class="btn btn-link text-secondary">
          Features
        </button>

        <button type="button" class="btn btn-link text-secondary">
          Enterprise
        </button>

        <button type="button" class="btn btn-link text-secondary">
          Support
        </button>

        <button type="button" class="btn btn-link text-secondary">
          Pricing
        </button>

        <button type="button" class="btn btn-outline-primary ">
          Sign Up
        </button>
      </div>
    </div>
  );
}

function PricingText() {
  return (
    <div className="row " style={{ height: "250px" }}>
      <div className="col-3"></div>
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <div style={{ fontSize: "3rem" }}>Pricing</div>
        <div style={{ textAlign: "center" }}>
          Quickly build an effective pricing table for your potential
          customers with this Bootstrap example. It’s built with default
          Bootstrap components and utilities with little customization.
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <div className="row  ">
      <div className="col-2"></div>
      <div className="col-8 d-flex justify-content-between">
        <IndvidualCard />
        <IndvidualCard />
        <IndvidualCard />
      </div>
      <div className="col-2"></div>
    </div>
  );
}

function IndvidualCard() {
  return (
    <div className="card mr-1 col-4">
      <div className="card-header">Free</div>
      <div className="card-body">
        <h3 className="card-title" style={{ textAlign: "center" }}>
          $0 / <span className="text-secondary">mo</span>
        </h3>
        <p className="card-text">
          <div style={{ textAlign: "center" }}>10 users included</div>
          <div style={{ textAlign: "center" }}>2 GB of storage</div>
          <div style={{ textAlign: "center" }}>Email support</div>
          <div style={{ textAlign: "center" }}>Help Center Access</div>
        </p>
        <a href="#" className="btn btn-primary col-12">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default App;
