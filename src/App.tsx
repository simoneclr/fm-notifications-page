import NotificationsDashboard from "./views/notifications/NotificationsDashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App min-h-screen font-jakarta text-sm md:text-base text-darkGrayishBlue bg-veryLightGrayishBlue md:pt-8 lg:pt-16">
      <div className="max-w-[1440px] mx-auto">
        <NotificationsDashboard/>

        <Footer/>
      </div>
    </div>
  );
}

export default App;
