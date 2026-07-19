const Header = () => {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center text-white">
          T
        </div>
      </div>
    </header>
  );
};

export default Header;