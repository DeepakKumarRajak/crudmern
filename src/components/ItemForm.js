import React, { useState } from "react";

function ItemForm({ addItem }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;
        addItem({ name, price, quantity: Number(quantity) });
        setName('');
        setPrice('');
        setQuantity('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="row g-2">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Item Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Item Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Item Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary w-100">Add</button>
                </div>
            </div>
        </form>
    );
}

export default ItemForm;