import Header from "./pages/Header";

// import Footer from "./pages/Footer";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <AnimatedRoutes />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
