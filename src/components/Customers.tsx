import React, { useState } from 'react';
import { Plus, Search, Phone, Mail, MapPin, Edit, Trash2, User } from 'lucide-react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Constructora ABC',
      contact: 'Juan Pérez',
      email: 'juan@constructoraabc.com',
      phone: '+34 666 123 456',
      address: 'Calle Mayor 123, Madrid',
      totalOrders: 15,
      totalSpent: 25430,
      status: 'Activo'
    },
    {
      id: 2,
      name: 'Vidriería Central',
      contact: 'María García',
      email: 'maria@vidrieriacentral.es',
      phone: '+34 677 234 567',
      address: 'Av. Libertad 45, Barcelona',
      totalOrders: 8,
      totalSpent: 12850,
      status: 'Activo'
    },
    {
      id: 3,
      name: 'Obras Modernas SL',
      contact: 'Carlos López',
      email: 'carlos@obrasmodernas.com',
      phone: '+34 688 345 678',
      address: 'Plaza España 12, Valencia',
      totalOrders: 22,
      totalSpent: 45200,
      status: 'Activo'
    },
    {
      id: 4,
      name: 'Hogar Ideal',
      contact: 'Ana Martín',
      email: 'ana@hogarideal.es',
      phone: '+34 699 456 789',
      address: 'Calle Sol 78, Sevilla',
      totalOrders: 5,
      totalSpent: 8750,
      status: 'Inactivo'
    },
    {
      id: 5,
      name: 'Reformas Express',
      contact: 'Miguel Ruiz',
      email: 'miguel@reformasexpress.com',
      phone: '+34 611 567 890',
      address: 'Av. Constitución 234, Bilbao',
      totalOrders: 12,
      totalSpent: 18900,
      status: 'Activo'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Nuevo Cliente</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-sm text-gray-600">{customer.contact}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                customer.status === 'Activo' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {customer.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{customer.address}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{customer.totalOrders}</p>
                <p className="text-xs text-gray-600">Pedidos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">€{customer.totalSpent.toLocaleString()}</p>
                <p className="text-xs text-gray-600">Total Gastado</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                <Edit className="w-4 h-4" />
                <span>Editar</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Clientes</h3>
          <p className="text-3xl font-bold text-primary">{customers.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Clientes Activos</h3>
          <p className="text-3xl font-bold text-green-600">
            {customers.filter(c => c.status === 'Activo').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ingresos Totales</h3>
          <p className="text-3xl font-bold text-green-600">
            €{customers.reduce((total, customer) => total + customer.totalSpent, 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pedidos Totales</h3>
          <p className="text-3xl font-bold text-blue-600">
            {customers.reduce((total, customer) => total + customer.totalOrders, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;