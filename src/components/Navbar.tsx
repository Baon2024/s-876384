import mango from "../mango.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
        <img 
              src={mango} 
              className="mr-2 h-8 w-8 object-contain" 
              alt="Mango Logo" 
            />
          <span className="font-medium text-[#141413]">Mango</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#enterprise" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Enterprise</a>
          <a href="#pricing" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Pricing</a>
          <a href="#docs" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Docs</a>
          <a href="#faq" className="text-[#141413] hover:text-[#141413]/80 transition-colors">FAQ</a>
        </div>

        <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;