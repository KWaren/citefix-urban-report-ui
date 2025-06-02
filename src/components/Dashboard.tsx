
import React, { useState } from 'react';
import { Search, Filter, MapPin, BarChart3, Users, Clock, CheckCircle, AlertTriangle, Calendar, Download } from 'lucide-react';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dateRange, setDateRange] = useState('week');

  const statuses = [
    { id: 'signale', name: 'Signalé', color: 'bg-blue-500', count: 124 },
    { id: 'valide', name: 'Validé', color: 'bg-green-500', count: 89 },
    { id: 'assigne', name: 'Assigné', color: 'bg-yellow-500', count: 45 },
    { id: 'encours', name: 'En cours', color: 'bg-orange-500', count: 67 },
    { id: 'termine', name: 'Terminé', color: 'bg-purple-500', count: 23 },
    { id: 'resolu', name: 'Résolu', color: 'bg-emerald-500', count: 156 },
    { id: 'rejete', name: 'Rejeté', color: 'bg-red-500', count: 12 }
  ];

  const recentReports = [
    {
      id: '#2024-001',
      type: 'Voirie',
      description: 'Nids de poule sur la rue de la Paix',
      location: '15 rue de la Paix, 75001 Paris',
      status: 'En cours',
      priority: 'Haute',
      date: '2024-01-15',
      reporter: 'Marie Dubois'
    },
    {
      id: '#2024-002',
      type: 'Éclairage',
      description: 'Lampadaire défaillant',
      location: 'Avenue des Champs, 75008 Paris',
      status: 'Assigné',
      priority: 'Moyenne',
      date: '2024-01-14',
      reporter: 'Pierre Martin'
    },
    {
      id: '#2024-003',
      type: 'Déchets',
      description: 'Poubelles débordantes',
      location: 'Place de la République, 75011 Paris',
      status: 'Validé',
      priority: 'Basse',
      date: '2024-01-14',
      reporter: 'Sophie Leroy'
    }
  ];

  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'Signalé': 'bg-blue-100 text-blue-800',
      'Validé': 'bg-green-100 text-green-800',
      'Assigné': 'bg-yellow-100 text-yellow-800',
      'En cours': 'bg-orange-100 text-orange-800',
      'Terminé': 'bg-purple-100 text-purple-800',
      'Résolu': 'bg-emerald-100 text-emerald-800',
      'Rejeté': 'bg-red-100 text-red-800'
    };
    return statusMap[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const priorityMap: { [key: string]: string } = {
      'Haute': 'text-red-600',
      'Moyenne': 'text-yellow-600',
      'Basse': 'text-green-600'
    };
    return priorityMap[priority] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">CitéFix - Tableau de bord</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <Download className="inline mr-2 h-4 w-4" />
                Exporter
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total signalements</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Résolus</p>
                <p className="text-2xl font-bold text-gray-900">892</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">En cours</p>
                <p className="text-2xl font-bold text-gray-900">67</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Urgents</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carte interactive */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Carte des signalements</h2>
              </div>
              <div className="p-6">
                <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Carte interactive avec marqueurs</p>
                    <p className="text-sm text-gray-400">Intégration Mapbox à implémenter</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filtres et recherche */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher par adresse, type ou description..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="all">Tous les types</option>
                    <option value="dechets">Déchets</option>
                    <option value="voirie">Voirie</option>
                    <option value="eclairage">Éclairage</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="all">Tous les statuts</option>
                    <option value="signale">Signalé</option>
                    <option value="encours">En cours</option>
                    <option value="resolu">Résolu</option>
                  </select>
                </div>

                {/* Liste des signalements */}
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-indigo-600">{report.id}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                            {report.status}
                          </span>
                          <span className={`text-sm font-medium ${getPriorityColor(report.priority)}`}>
                            {report.priority}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{report.date}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{report.description}</h4>
                      <p className="text-sm text-gray-600 mb-2">{report.location}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Type: {report.type}</span>
                        <span>Signalé par: {report.reporter}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statuts */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Répartition par statut</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {statuses.map((status) => (
                    <div key={status.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${status.color} mr-3`}></div>
                        <span className="text-sm text-gray-700">{status.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{status.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Actions rapides</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                    Assigner en masse
                  </button>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Valider sélection
                  </button>
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                    Rejeter sélection
                  </button>
                </div>
              </div>
            </div>

            {/* Activité récente */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Signalement #2024-001 résolu</p>
                      <p className="text-xs text-gray-500">Il y a 2 heures</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Nouveau signalement assigné</p>
                      <p className="text-xs text-gray-500">Il y a 4 heures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
