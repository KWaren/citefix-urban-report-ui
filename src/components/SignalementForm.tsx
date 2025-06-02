
import React, { useState } from 'react';
import { Camera, MapPin, Upload, X, Check } from 'lucide-react';

const SignalementForm = () => {
  const [selectedType, setSelectedType] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  
  const problemTypes = [
    { id: 'dechets', name: 'Déchets', icon: '🗑️' },
    { id: 'voirie', name: 'Voirie', icon: '🛣️' },
    { id: 'eclairage', name: 'Éclairage', icon: '💡' },
    { id: 'espaces-verts', name: 'Espaces verts', icon: '🌳' },
    { id: 'mobilier', name: 'Mobilier urbain', icon: '🪑' },
    { id: 'signalisation', name: 'Signalisation', icon: '🚏' },
    { id: 'nuisances', name: 'Nuisances', icon: '🔊' },
    { id: 'autres', name: 'Autres', icon: '❓' }
  ];

  const handleLocationDetection = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          alert('Impossible de détecter votre position. Veuillez saisir l\'adresse manuellement.');
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Signaler un problème</h1>
          <p className="text-gray-600">Aidez-nous à améliorer votre quartier en signalant les problèmes urbains</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Étapes */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">1</div>
                <span className="ml-2 text-sm font-medium text-indigo-600">Type</span>
              </div>
              <div className="flex-1 h-px bg-gray-200 mx-4"></div>
              <div className="flex items-center">
                <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">2</div>
                <span className="ml-2 text-sm font-medium text-gray-500">Détails</span>
              </div>
              <div className="flex-1 h-px bg-gray-200 mx-4"></div>
              <div className="flex items-center">
                <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">3</div>
                <span className="ml-2 text-sm font-medium text-gray-500">Localisation</span>
              </div>
            </div>

            {/* Type de problème */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quel type de problème voulez-vous signaler ?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {problemTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Décrivez le problème
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Décrivez en détail le problème que vous avez observé..."
              />
            </div>

            {/* Photos */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Ajoutez des photos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Glissez vos photos ici ou cliquez pour sélectionner</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  <Upload className="inline mr-2 h-4 w-4" />
                  Choisir des fichiers
                </button>
              </div>
            </div>

            {/* Localisation */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Localisation du problème
              </label>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Adresse ou coordonnées GPS"
                  />
                  <button
                    onClick={handleLocationDetection}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Détecter
                  </button>
                </div>
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive (à implémenter)</p>
                </div>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vos informations (optionnel)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nom"
                />
                <input
                  type="email"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Téléphone"
                />
              </div>
              <div className="mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="ml-2 text-sm text-gray-600">
                    Je souhaite recevoir des notifications sur l'évolution de ce signalement
                  </span>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-6 border-t">
              <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
                Annuler
              </button>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                <Check className="mr-2 h-5 w-5" />
                Envoyer le signalement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalementForm;
