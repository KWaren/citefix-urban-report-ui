
import React, { useState } from 'react';
import { Search, Bell, Calendar, MapPin, Camera, MessageSquare, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const SuiviSignalements = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const userReports = [
    {
      id: '#2024-001',
      type: 'Voirie',
      title: 'Nids de poule sur la rue de la Paix',
      description: 'Plusieurs nids de poule dangereux pour les véhicules et piétons',
      location: '15 rue de la Paix, 75001 Paris',
      status: 'En cours',
      priority: 'Haute',
      date: '2024-01-15',
      lastUpdate: '2024-01-18',
      photos: 2,
      timeline: [
        { date: '2024-01-15 14:30', status: 'Signalé', description: 'Signalement créé' },
        { date: '2024-01-15 16:45', status: 'Validé', description: 'Signalement validé par les services' },
        { date: '2024-01-16 09:00', status: 'Assigné', description: 'Assigné à l\'équipe voirie - Secteur Nord' },
        { date: '2024-01-18 08:30', status: 'En cours', description: 'Intervention programmée pour demain' }
      ]
    },
    {
      id: '#2024-002',
      type: 'Éclairage',
      title: 'Lampadaire défaillant Avenue des Champs',
      description: 'Lampadaire éteint depuis plusieurs jours',
      location: 'Avenue des Champs, 75008 Paris',
      status: 'Résolu',
      priority: 'Moyenne',
      date: '2024-01-10',
      lastUpdate: '2024-01-17',
      photos: 1,
      timeline: [
        { date: '2024-01-10 19:20', status: 'Signalé', description: 'Signalement créé' },
        { date: '2024-01-11 08:15', status: 'Validé', description: 'Signalement validé' },
        { date: '2024-01-12 14:00', status: 'Assigné', description: 'Assigné à l\'équipe éclairage public' },
        { date: '2024-01-15 10:30', status: 'En cours', description: 'Intervention en cours' },
        { date: '2024-01-15 15:45', status: 'Terminé', description: 'Lampadaire réparé' },
        { date: '2024-01-17 09:00', status: 'Résolu', description: 'Intervention validée et clôturée' }
      ]
    },
    {
      id: '#2024-003',
      type: 'Déchets',
      title: 'Poubelles débordantes Place de la République',
      description: 'Poubelles publiques débordantes et déchets au sol',
      location: 'Place de la République, 75011 Paris',
      status: 'Validé',
      priority: 'Basse',
      date: '2024-01-19',
      lastUpdate: '2024-01-19',
      photos: 3,
      timeline: [
        { date: '2024-01-19 11:15', status: 'Signalé', description: 'Signalement créé' },
        { date: '2024-01-19 13:30', status: 'Validé', description: 'Signalement validé par les services' }
      ]
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Résolu': return <CheckCircle className="h-4 w-4 text-emerald-600" />;
      case 'En cours': return <Clock className="h-4 w-4 text-orange-600" />;
      case 'Signalé': return <AlertTriangle className="h-4 w-4 text-blue-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
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
              <h1 className="ml-3 text-xl font-bold text-gray-900">Mes signalements</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Nouveau signalement
              </button>
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recherche et filtres */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher dans mes signalements..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="all">Tous les statuts</option>
              <option value="signale">Signalé</option>
              <option value="encours">En cours</option>
              <option value="resolu">Résolu</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option value="recent">Plus récents</option>
              <option value="oldest">Plus anciens</option>
              <option value="priority">Par priorité</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Liste des signalements */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {userReports.map((report) => (
                <div
                  key={report.id}
                  className={`bg-white rounded-lg shadow-sm border-2 cursor-pointer transition-all ${
                    selectedReport?.id === report.id ? 'border-indigo-500' : 'border-transparent hover:border-gray-200'
                  }`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-indigo-600">{report.id}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        {getStatusIcon(report.status)}
                        <span className="ml-1">Mis à jour le {report.lastUpdate}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-gray-600 mb-3">{report.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{report.location}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        {report.photos > 0 && (
                          <div className="flex items-center">
                            <Camera className="h-4 w-4 mr-1" />
                            <span>{report.photos} photo{report.photos > 1 ? 's' : ''}</span>
                          </div>
                        )}
                        <span>Type: {report.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Détails du signalement sélectionné */}
          <div className="lg:col-span-1">
            {selectedReport ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Détails</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(selectedReport.status)}`}>
                      {selectedReport.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{selectedReport.id}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{selectedReport.title}</h4>
                  <p className="text-gray-600 mb-4">{selectedReport.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">{selectedReport.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600">Signalé le {selectedReport.date}</span>
                    </div>
                    {selectedReport.photos > 0 && (
                      <div className="flex items-center text-sm">
                        <Camera className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{selectedReport.photos} photo{selectedReport.photos > 1 ? 's' : ''} jointe{selectedReport.photos > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-4">Historique</h5>
                    <div className="space-y-4">
                      {selectedReport.timeline.map((event, index) => (
                        <div key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                            index === 0 ? 'bg-indigo-600' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-medium px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                              <span className="text-xs text-gray-500">{event.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t bg-gray-50">
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contacter le service
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-gray-400 mb-4">
                  <FileText className="h-12 w-12 mx-auto" />
                </div>
                <p className="text-gray-500">Sélectionnez un signalement pour voir ses détails</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuiviSignalements;
