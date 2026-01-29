"use client";

import { useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";

// Mock Product Type
type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export default function AdminDashboard() {
    // Initial Mock Data
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Shaft 542 GT", description: "Full face helmet...", image: "https://placehold.co/100" },
        { id: 2, name: "Shaft Pro 610", description: "Modular helmet...", image: "https://placehold.co/100" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState<Partial<Product>>({});

    const handleDelete = (id: number) => {
        if (confirm("Are you sure?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        if (newProduct.name && newProduct.description) {
            setProducts([
                ...products,
                {
                    id: Date.now(),
                    name: newProduct.name,
                    description: newProduct.description,
                    image: newProduct.image || "https://placehold.co/100",
                },
            ]);
            setIsModalOpen(false);
            setNewProduct({});
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Shaft Product Management</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg"
                    >
                        <Plus size={20} /> Add Product
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-700 uppercase font-semibold text-sm">
                            <tr>
                                <th className="p-6">Image</th>
                                <th className="p-6">Name</th>
                                <th className="p-6">Description</th>
                                <th className="p-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6">
                                        <img src={product.image} alt={product.name} className="w-16 h-16 rounded object-cover border border-gray-200" />
                                    </td>
                                    <td className="p-6 font-medium text-gray-900">{product.name}</td>
                                    <td className="p-6 text-gray-500 max-w-sm truncate">{product.description}</td>
                                    <td className="p-6 text-right space-x-2">
                                        <button className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded-full transition-colors">
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-full transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {products.length === 0 && (
                        <div className="p-12 text-center text-gray-500">
                            No products found. Click "Add Product" to start.
                        </div>
                    )}
                </div>
            </div>

            {/* Simple Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2"
                                    value={newProduct.name || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Description</label>
                                <textarea
                                    className="w-full border rounded p-2"
                                    value={newProduct.description || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">Image URL</label>
                                <input
                                    type="text"
                                    className="w-full border rounded p-2"
                                    placeholder="https://..."
                                    value={newProduct.image || ""}
                                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded font-bold hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-4 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
