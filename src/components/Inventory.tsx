import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Package } from 'lucide-react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Perfil Aluminio 40x40mm',
      category: 'Perfiles',
      stock: 150,
      minStock: 50,
      price: 25.50,
      supplier: 'Aluminios del Norte',
      location: 'A-01-15'
    },
    {
      id: 2,
      name: 'Vidrio Templado 6mm',
      category: 'Vidrios',
      stock: 25,
      minStock: 20,
      price: 45.00,
      supplier: 'Cristales SA',
      location: 'B-02-08'
    },
    {
      id: 3,
      name: 'Herraje Puerta Corredera',
      category: 'Herrajes',
      stock: 35,
      minStock: 15,
      price: 85.00,
      supplier: 'Herrajes Premium',
      location: 'C-01-22'
    },
    {
      id: 4,
      name: 'Sellador Silicona Transparente',
      category: 'Accesorios',
      stock: 80,
      minStock: 30,
      price: 12.50,
      supplier: 'Químicos Industriales',
      location: 'D-03-05'
    },
    {
      id: 5,
      name: 'Marco Ventana 1.2x1.0m',
      category: 'Marcos',
      stock: 12,
      minStock: 10,
      price: 120.00,
      supplier: 'Marcos y Más',
      location: 'E-01-03'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStatus = (stock: number, minStock: number) => {
    if (stock <= minStock) return { color: 'text-red-600 bg-red-100', text: 'Bajo' };
    if (stock <= minStock * 1.5) return { color: 'text-yellow-600 bg-yellow-100', text: 'Medio' };
    return { color: 'text-green-600 bg-green-100', text: 'Alto' };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventario</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Agregar Producto</span>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Producto</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Categoría</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Stock</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Estado</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Precio</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Ubicación</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map((product) => {
                const stockStatus = getStockStatus(product.stock, product.minStock);
                return (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.supplier}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-900">{product.category}</td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{product.stock}</span>
                      <span className="text-sm text-gray-500 ml-1">/ {product.minStock} mín</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${stockStatus.color}`}>
                        {stockStatus.text}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">${product.price}</td>
                    <td className="py-4 px-6 text-gray-600">{product.location}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Productos</h3>
          <p className="text-3xl font-bold text-primary">{products.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Valor Total</h3>
          <p className="text-3xl font-bold text-green-600">
            ${products.reduce((total, product) => total + (product.stock * product.price), 0).toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Stock Bajo</h3>
          <p className="text-3xl font-bold text-red-600">
            {products.filter(p => p.stock <= p.minStock).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;