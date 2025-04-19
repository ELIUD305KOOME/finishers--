import React, { useEffect, useState } from 'react';

const MechanicsDashboard = () => {
  const [mechanics, setMechanics] = useState([]);
  const [editingMechanic, setEditingMechanic] = useState(null);
  const [formData, setFormData] = useState({});

  const fetchMechanics = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/mechanics`);
    const data = await res.json();
    setMechanics(data);
  };

  useEffect(() => {
    fetchMechanics();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this mechanic?')) return;
    await fetch(`${process.env.REACT_APP_API_URL}/mechanics/${id}`, { method: 'DELETE' });
    fetchMechanics();
  };

  const handleEdit = (mechanic) => {
    setEditingMechanic(mechanic);
    setFormData(mechanic);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = editingMechanic.id;
    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    await fetch(`${process.env.REACT_APP_API_URL}/mechanics/${id}`, {
      method: 'PATCH',
      body: form
    });

    setEditingMechanic(null);
    setFormData({});
    fetchMechanics();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mechanics Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mechanics.map(mechanic => (
          <div key={mechanic.id} className="bg-white shadow rounded-xl p-4">
            <img src={mechanic.profile_picture} alt="Profile" className="w-12 h-12 object-cover rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{mechanic.first_name} {mechanic.last_name}</h2>
            <p><strong>Username:</strong> {mechanic.username}</p>
            <p><strong>Email:</strong> {mechanic.email}</p>
            <p><strong>Phone:</strong> {mechanic.phone_number}</p>
            <p><strong>Expertise:</strong> {mechanic.expertise}</p>
            <p><strong>Bio:</strong> {mechanic.bio}</p>

            <div className="mt-4 flex gap-2">
              <button onClick={() => handleEdit(mechanic)} className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
              <button onClick={() => handleDelete(mechanic.id)} className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingMechanic && (
        <div className="mt-10 bg-gray-100 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Edit Mechanic</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name || ''} onChange={handleInputChange} className="input" />
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name || ''} onChange={handleInputChange} className="input" />
            <input type="text" name="username" placeholder="Username" value={formData.username || ''} onChange={handleInputChange} className="input" />
            <input type="email" name="email" placeholder="Email" value={formData.email || ''} onChange={handleInputChange} className="input" />
            <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number || ''} onChange={handleInputChange} className="input" />
            <input type="text" name="expertise" placeholder="Expertise" value={formData.expertise || ''} onChange={handleInputChange} className="input" />
            <textarea name="bio" placeholder="Bio" value={formData.bio || ''} onChange={handleInputChange} className="input"></textarea>
            <input type="file" name="profile_picture" onChange={handleInputChange} className="input" />
            <button type="submit" className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MechanicsDashboard;
