
import React from 'react';
import { MapPin, Camera, FileText, Bell, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h1 className="ml-3 text-3xl font-bold text-gray-900">CitéFix</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#signaler" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Signaler</a>
              <a href="#suivi" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Suivi</a>
              <a href="#dashboard" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Tableau de bord</a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Connexion
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Améliorons notre ville ensemble
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Signalez facilement les problèmes urbains de votre quartier. 
            Notre plateforme permet un suivi transparent et une résolution rapide des incidents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
              <Camera className="inline mr-2 h-5 w-5" />
              Signaler un problème
            </button>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-indigo-600">
              <FileText className="inline mr-2 h-5 w-5" />
              Suivre mes signalements
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comment ça fonctionne
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">1. Signalez</h4>
              <p className="text-gray-600">Prenez une photo, ajoutez une description et la localisation GPS du problème</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">2. Suivez</h4>
              <p className="text-gray-600">Recevez des notifications sur l'évolution du traitement de votre signalement</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">3. Résolvez</h4>
              <p className="text-gray-600">Les autorités traitent le problème et vous informent de sa résolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">1,247</div>
              <div className="text-indigo-200">Problèmes signalés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">892</div>
              <div className="text-indigo-200">Problèmes résolus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">72%</div>
              <div className="text-indigo-200">Taux de résolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3.2j</div>
              <div className="text-indigo-200">Délai moyen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Types de problèmes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types de problèmes signalables
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Déchets", icon: "🗑️", color: "bg-red-100 text-red-600" },
              { name: "Voirie", icon: "🛣️", color: "bg-blue-100 text-blue-600" },
              { name: "Éclairage", icon: "💡", color: "bg-yellow-100 text-yellow-600" },
              { name: "Espaces verts", icon: "🌳", color: "bg-green-100 text-green-600" },
              { name: "Mobilier urbain", icon: "🪑", color: "bg-purple-100 text-purple-600" },
              { name: "Signalisation", icon: "🚏", color: "bg-orange-100 text-orange-600" },
              { name: "Nuisances", icon: "🔊", color: "bg-pink-100 text-pink-600" },
              { name: "Autres", icon: "❓", color: "bg-gray-100 text-gray-600" }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`w-12 h-12 rounded-lg ${type.color} flex items-center justify-center mb-3 text-2xl`}>
                  {type.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{type.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-6">
            Prêt à améliorer votre quartier ?
          </h3>
          <p className="text-xl text-indigo-100 mb-8">
            Rejoignez les milliers de citoyens qui contribuent déjà à l'amélioration de leur ville
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Commencer maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-2 text-xl font-bold">CitéFix</h3>
              </div>
              <p className="text-gray-400">
                Plateforme citoyenne pour l'amélioration de l'environnement urbain
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Fonctionnalités</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Signalement de problèmes</li>
                <li>Suivi en temps réel</li>
                <li>Notifications</li>
                <li>Carte interactive</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Guide d'utilisation</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Aide</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@citefix.fr</li>
                <li>01 23 45 67 89</li>
                <li>123 Rue de la Ville</li>
                <li>75000 Paris</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CitéFix. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
