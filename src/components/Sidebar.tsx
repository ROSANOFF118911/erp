import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Module {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface SidebarProps {
  modules: Module[];
  activeModule: string;
  setActiveModule: (module: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  activeModule, 
  setActiveModule, 
  isOpen 
}) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg border-r border-gray-200 transition-all duration-300 z-30 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">ERP</span>
          </div>
          {isOpen && (
            <div>
              <h1 className="font-bold text-gray-900">ERP Nube</h1>
              <p className="text-xs text-gray-500">Aluminio/Vidrio</p>
            </div>
          )}
        </div>
      </div>

      <nav className="px-3">
        {modules.map((module) => {
          const Icon = module.icon;
          const isActive = activeModule === module.id;
          
          return (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg mb-1 transition-all duration-200 ${
                isActive 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && (
                <span className="font-medium">{module.name}</span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;