import React, { useState } from 'react';

interface MerchantDescriptionProps {
    onSubmit?: (data: {
        photo: File | null;
        category: string;
        description: string;
    }) => void;
}

const categories = [
    'Boulangerie',
    'Pâtisserie',
    'Boucherie',
    'Épicerie',
    'Fromagerie',
    'Autre',
];

const Description: React.FC<MerchantDescriptionProps> = ({ onSubmit }) => {
    const [photo, setPhoto] = useState<File | null>(null);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ photo, category, description });
        }
        // Ajoutez ici la logique d'envoi ou de validation selon vos besoins
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: 16 }}>
            <h2>Description du commerçant</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Photo du commerçant :
                        <input type="file" accept="image/*" onChange={handlePhotoChange} />
                    </label>
                    {photo && (
                        <div style={{ marginTop: 8 }}>
                            <img
                                src={URL.createObjectURL(photo)}
                                alt="Aperçu"
                                style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8 }}
                            />
                        </div>
                    )}
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Catégorie de produit :
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                            style={{ display: 'block', marginTop: 8 }}
                        >
                            <option value="">Sélectionnez une catégorie</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </label>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>
                        Description :
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                            rows={4}
                            style={{ width: '100%', marginTop: 8 }}
                            placeholder="Décrivez-vous et vos produits..."
                        />
                    </label>
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
};

export default Description;