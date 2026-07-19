import { NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigation";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold text-cyan-400">
        InterviewPro AI
      </h1>

      <nav className="mt-10 space-y-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-2 transition-colors ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;