import Header from "./_Header"
import Content from "./_Content"
import Footer from "./_Footer"

const _ = () => {
  return (
    <div className="relative flex flex-col pt-12 px-3 w-full">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default _;
