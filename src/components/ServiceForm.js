import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ServiceForm = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        description: initialData?.description || '',
        price: initialData?.price || '',
        category_name: initialData?.category_name || '',
        subcategory_name: initialData?.subcategory_name || '',
        service_image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, service_image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h5">{initialData ? 'Edit Service' : 'Add Service'}</Typography>
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Category Name"
                name="category_name"
                value={formData.category_name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Subcategory Name"
                name="subcategory_name"
                value={formData.subcategory_name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginTop: '16px' }}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                {initialData ? 'Update' : 'Add'} Service
            </Button>
        </Box>
    );
};

export default ServiceForm;