import { navigationItems } from "../../data/navigation";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold text-cyan-400">
        InterviewPro AI
      </h1>

      <nav className="mt-10 space-y-4">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="block hover:text-cyan-400"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;