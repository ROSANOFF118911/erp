import React from 'react';
import { 
  TrendingUp, 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign,
  AlertTriangle,
  Calendar,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Ventas del Mes',
      value: '$45,230',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-green-500'
    },
    {
      title: 'Pedidos Activos',
      value: '23',
      change: '+3',
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      title: 'Productos en Stock',
      value: '1,247',
      change: '-5.2%',
      icon: Package,
      color: 'bg-purple-500'
    },
    {
      title: 'Clientes Activos',
      value: '89',
      change: '+8.1%',
      icon: Users,
      color: 'bg-orange-500'
    }
  ];

  const recentOrders = [
    { id: '001', client: 'Constructora ABC', product: 'Ventana Aluminio 1.5x1.2m', status: 'En Proceso', amount: '$1,250' },
    { id: '002', client: 'Vidriería Central', product: 'Puerta Vidrio Templado', status: 'Completado', amount: '$890' },
    { id: '003', client: 'Obras Modernas', product: 'Mampara Baño', status: 'Pendiente', amount: '$650' },
    { id: '004', client: 'Hogar Ideal', product: 'Ventana Corrediza', status: 'En Proceso', amount: '$1,100' },
  ];

  const lowStockItems = [
    { name: 'Perfil Aluminio 40x40', stock: 5, min: 20 },
    { name: 'Vidrio Templado 6mm', stock: 3, min: 15 },
    { name: 'Herrajes Puerta', stock: 8, min: 25 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change} vs mes anterior
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Pedidos Recientes</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.client}</p>
                    <p className="text-sm text-gray-600">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'Completado' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'En Proceso'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-900">Stock Bajo</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Mínimo: {item.min}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full">
                      {item.stock}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;