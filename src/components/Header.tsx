import ToggleAside from "./ToggleAside";

const Header = () => {
   
  return (
    <header className="w-full bg-primary-50 sticky top-0 transition-all z-[9998] h-16">
      <ToggleAside/>        
    </header>
  );
};

export default Header;
