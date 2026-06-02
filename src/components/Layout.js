import Header from "./Header";
import Footer from "./Footer";
import NewsPanel from "./NewsPanel";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <NewsPanel />
    </>
  );
}

export default Layout;
