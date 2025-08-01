import React, { useState } from 'react';
import { Plus, Search, Filter, Eye, Edit, Trash2, Calendar, Clock } from 'lucide-react';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Constructora ABC',
      contact: 'Juan Pérez',
      products: [
        { name: 'Ventana Aluminio 1.5x1.2m', quantity: 2, price: 625 },
        { name: 'Herrajes Premium', quantity: 1, price: 85 }
      ],
      total: 1335,
      status: 'En Proceso',
      priority: 'Alta',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-25',
      notes: 'Cliente requiere instalación incluida'
    },
    {
      id: 'ORD-002',
      customer: 'Vidriería Central',
      contact: 'María García',
      products: [
        { name: 'Puerta Vidrio Templado', quantity: 1, price: 890 }
      ],
      total: 890,
      status: 'Completado',
      priority: 'Media',
      orderDate: '2024-01-10',
      deliveryDate: '2024-01-20',
      notes: 'Entregado sin problemas'
    },
    {
      id: 'ORD-003',
      customer: 'Obras Modernas',
      contact: 'Carlos López',
      products: [
        { name: 'Mampara Baño', quantity: 3, price: 216.67 }
      ],
      total: 650,
      status: 'Pendiente',
      priority: 'Baja',
      orderDate: '2024-01-18',
      deliveryDate: '2024-01-28',
      notes: 'Esperando confirmación de medidas'
    },
    {
      id: 'ORD-004',
      customer: 'Hogar Ideal',
      contact: 'Ana Martín',
      products: [
        { name: 'Ventana Corrediza', quantity: 2, price: 550 }
      ],
      total: 1100,
      status: 'En Proceso',
      priority: 'Media',
      orderDate: '2024-01-16',
      deliveryDate: '2024-01-26',
      notes: 'Color personalizado solicitado'
    },
    {
      id: 'ORD-005',
      customer: 'Reformas Express',
      contact: 'Miguel Ruiz',
      products: [
        { name: 'Perfil Aluminio 40x40mm', quantity: 10, price: 25.50 },
        { name: 'Vidrio Templado 6mm', quantity: 5, price: 45 }
      ],
      total: 480,
      status: 'Cancelado',
      priority: 'Baja',
      orderDate: '2024-01-12',
      deliveryDate: '2024-01-22',
      notes: 'Cliente canceló por cambio de proyecto'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.contact.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-100 text-green-800';
      case 'En Proceso':
        return 'bg-blue-100 text-blue-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-100 text-red-800';
      case 'Media':
        return 'bg-yellow-100 text-yellow-800';
      case 'Baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Nuevo Pedido</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar pedidos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">Todos los estados</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En Proceso">En Proceso</option>
            <option value="Completado">Completado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Pedido</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Cliente</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Productos</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Total</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Estado</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Prioridad</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Entrega</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(order.orderDate).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.contact}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      {order.products.slice(0, 2).map((product, index) => (
                        <p key={index} className="text-sm text-gray-900">
                          {product.quantity}x {product.name}
                        </p>
                      ))}
                      {order.products.length > 2 && (
                        <p className="text-sm text-gray-500">+{order.products.length - 2} más</p>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900">€{order.total}</td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(order.deliveryDate).toLocaleDateString('es-ES')}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Pedidos</h3>
          <p className="text-3xl font-bold text-primary">{orders.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">En Proceso</h3>
          <p className="text-3xl font-bold text-blue-600">
            {orders.filter(o => o.status === 'En Proceso').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Completados</h3>
          <p className="text-3xl font-bold text-green-600">
            {orders.filter(o => o.status === 'Completado').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Valor Total</h3>
          <p className="text-3xl font-bold text-green-600">
            €{orders.reduce((total, order) => total + order.total, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;