import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Workspaces",
      path: "/workspace",
      subMenu: [
        { name: "Table", path: "/workspace/table" },
        { name: "Calendar", path: "/workspace/calendar" },
      ],
    },
    { name: "Boards", path: "/board" },
    { name: "Members", path: "/member" },
    { name: "Settings", path: "/setting" },
  ];

  return (
    <div className="sidebar bg-gray-800 text-white h-full w-64">
      {/* Header */}
      <h2 className="text-2xl font-bold p-4 border-b border-gray-700">Trello</h2>

      {/* Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.name} className="mb-2">
            {item.subMenu ? (
              <div>
                {/* Parent Menu with Dropdown */}
                <div
                  className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700"
                  onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
                >
                  <span>{item.name}</span>
                  <span className="ml-auto">
                    {isWorkspaceOpen ? "▲" : "▼"}
                  </span>
                </div>

                {/* Sub-menu */}
                {isWorkspaceOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subMenu.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-lg ${
                            isActive ? "bg-gray-700" : "hover:bg-gray-700"
                          }`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 rounded-lg ${
                    isActive ? "bg-gray-700" : "hover:bg-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
