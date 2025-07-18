const renderPickingSorting = () => (
    <div className="space-y-6">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Data Processing & Order Preparation</h2>
            <div className="flex space-x-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Auto Process Data
                </button>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Validate All
                </button>
            </div>
        </div>

        {/* Data Processing Pipeline */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Data Processing Pipeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Download className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Data Extraction</h4>
                    <p className="text-sm text-gray-600 mt-1">Pull orders from external APIs</p>
                    <div className="mt-2">
                        <StatusBadge status="Completed" />
                    </div>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Edit className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h4 className="font-medium">Data Cleaning</h4>
                    <p className="text-sm text-gray-600 mt-1">Standardize and validate data</p>
                    <div className="mt-2">
                        <StatusBadge status="In Progress" />
                    </div>
                </div>

                <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-medium">Route Preparation</h4>
                    <p className="text-sm text-gray-600 mt-1">Prepare data for routing</p>
                    <div className="mt-2">
                        <StatusBadge status="Ready for Routing" />
                    </div>
                </div>
            </div>
        </div>

        {/* Data Quality Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Data Quality Assessment</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Address Validation</span>
                            <span className="text-sm text-green-600">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Contact Information</span>
                            <span className="text-sm text-blue-600">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Product Details</span>
                            <span className="text-sm text-purple-600">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Processing Status</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-sm font-medium">Validated Orders</span>
                        </div>
                        <span className="text-sm text-green-600">189 orders processed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                            <span className="text-sm font-medium">Under Review</span>
                        </div>
                        <span className="text-sm text-yellow-600">23 orders pending</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center">
                            <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                            <span className="text-sm font-medium">Validation Errors</span>
                        </div>
                        <span className="text-sm text-red-600">5 orders failed</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Orders Ready for Routing */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Orders Ready for Route Optimization</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left py-3 px-4 font-medium">Order ID</th>
                            <th className="text-left py-3 px-4 font-medium">Client</th>
                            <th className="text-left py-3 px-4 font-medium">API Source</th>
                            <th className="text-left py-3 px-4 font-medium">Data Quality</th>
                            <th className="text-left py-3 px-4 font-medium">Status</th>
                            <th className="text-left py-3 px-4 font-medium">Destination</th>
                            <th className="text-left py-3 px-4 font-medium">Items</th>
                            <th className="text-left py-3 px-4 font-medium">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockOrders.map(order => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium">{order.id}</td>
                                <td className="py-3 px-4">{order.client}</td>
                                <td className="py-3 px-4 text-sm text-blue-600">{order.apiSource}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                                            <div
                                                className="bg-green-600 h-2 rounded-full"
                                                style={{ width: `${order.dataQuality}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-600">{order.dataQuality}%</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4"><StatusBadge status={order.status} /></td>
                                <td className="py-3 px-4">{order.destination}</td>
                                <td className="py-3 px-4">{order.items}</td>
                                <td className="py-3 px-4">
                                    <StatusBadge status={order.priority} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
import React, { useState } from 'react';
import {
    Truck,
    Package,
    MapPin,
    Clock,
    CheckCircle,
    AlertCircle,
    BarChart3,
    Route,
    Bell,
    RefreshCw,
    Download,
    Plus,
    Edit,
    Navigation,
    Phone,
    MessageCircle,
    Zap,
    Target,
    Activity,
    X,
    ShoppingCart,
    SortAsc,
    Send,
    Camera,
    Upload,
    Pin,
    CheckSquare,
    ArrowRight,
    Smartphone,
    Building
} from 'lucide-react';

const LastMileDeliveryApp = () => {
    const [currentScreen, setCurrentScreen] = useState('login');
    const [activeTab, setActiveTab] = useState('dashboard');
    const [userRole, setUserRole] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [routeOptimization, setRouteOptimization] = useState({
        status: 'idle',
        progress: 0,
        routes: 0,
        packages: 0
    });
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [workflowStep, setWorkflowStep] = useState(1);
    const [apiIntegration, setApiIntegration] = useState({
        status: 'idle',
        connectedSystems: [],
        lastSync: null,
        ordersImported: 0,
        errors: []
    });
    //const [driverNotifications, setDriverNotifications] = useState([]);
    //const [notificationModal, setNotificationModal] = useState(false);
    //const [selectedDriver, setSelectedDriver] = useState(null);

    const [driverNotifications, setDriverNotifications] = useState([
        {
            id: 'DN-001',
            type: 'cancellation',
            orderId: 'ORD-156',
            message: 'Order ORD-156 has been cancelled by customer',
            timestamp: new Date(Date.now() - 300000).toLocaleTimeString(),
            read: false,
            priority: 'high'
        },
        {
            id: 'DN-002',
            type: 'status_update',
            orderId: 'ORD-189',
            message: 'Delivery window changed to 2:00 PM - 4:00 PM',
            timestamp: new Date(Date.now() - 600000).toLocaleTimeString(),
            read: false,
            priority: 'medium'
        }
    ]);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [newNotification, setNewNotification] = useState({
        type: 'status_update',
        orderId: '',
        message: '',
        priority: 'medium',
        targetDriver: 'all'
    });
    // Enhanced mock data with API integration status
    const mockPickups = [
        {
            id: 'PU-001',
            client: 'TechCorp Solutions',
            status: 'API Synced',
            items: 45,
            weight: 125.5,
            location: 'Philadelphia Distribution Center',
            apiSource: 'TechCorp ERP',
            syncTime: '2025-01-20 09:15:00',
            externalOrderId: 'TC-ORD-8847'
        },
        {
            id: 'PU-002',
            client: 'Global Electronics',
            status: 'Manual Entry',
            items: 32,
            weight: 89.2,
            location: 'Newark Fulfillment Hub',
            apiSource: 'Manual',
            syncTime: '2025-01-20 10:30:00',
            externalOrderId: 'MAN-002'
        },
        {
            id: 'PU-003',
            client: 'MegaStore Chain',
            status: 'API Pending',
            items: 67,
            weight: 198.7,
            location: 'Brooklyn Warehouse',
            apiSource: 'MegaStore API',
            syncTime: null,
            externalOrderId: 'MS-REQ-4501'
        }
    ];

    const mockOrders = [
        {
            id: 'ORD-001',
            client: 'TechCorp Solutions',
            status: 'API Imported',
            items: 12,
            weight: 45.5,
            destination: 'Philadelphia, PA - Center City',
            priority: 'High',
            apiSource: 'TechCorp ERP',
            dataQuality: 95,
            validationStatus: 'Validated'
        },
        {
            id: 'ORD-002',
            client: 'Global Electronics',
            status: 'Data Cleaned',
            items: 8,
            weight: 32.1,
            destination: 'Newark, NJ - Downtown',
            priority: 'Medium',
            apiSource: 'Global Electronics API',
            dataQuality: 88,
            validationStatus: 'Needs Review'
        },
        {
            id: 'ORD-003',
            client: 'MegaStore Chain',
            status: 'Ready for Routing',
            items: 24,
            weight: 78.3,
            destination: 'Brooklyn, NY - Park Slope',
            priority: 'Low',
            apiSource: 'MegaStore WMS',
            dataQuality: 92,
            validationStatus: 'Validated'
        }
    ];

    const mockRoutes = [
        {
            id: 'RT-001',
            name: 'Philadelphia Metro Route',
            packages: 125,
            vehicle: 'TRK-101',
            driver: 'Michael Johnson',
            status: 'Dispatched',
            stops: 15,
            distance: 28.1,
            estimatedTime: '4h 30min'
        },
        {
            id: 'RT-002',
            name: 'Newark Express Route',
            packages: 108,
            vehicle: 'TRK-102',
            driver: 'Sarah Williams',
            status: 'Loading',
            stops: 12,
            distance: 24.3,
            estimatedTime: '3h 45min'
        }
    ];

    const mockDeliveries = [
        { id: 'DEL-001', orderId: 'ORD-001', status: 'Delivered', timestamp: '14:30', podUploaded: true },
        { id: 'DEL-002', orderId: 'ORD-002', status: 'In Transit', timestamp: '', podUploaded: false },
        { id: 'DEL-003', orderId: 'ORD-003', status: 'Failed', timestamp: '16:45', podUploaded: false }
    ];

    const workflowSteps = [
        { id: 1, title: 'Pickups & Order Ingestion', icon: ShoppingCart, completed: true },
        { id: 2, title: 'Picking & Sorting', icon: SortAsc, completed: true },
        { id: 3, title: 'Route Optimization', icon: Route, completed: true },
        { id: 4, title: 'Dispatch & Loading', icon: Send, completed: false },
        { id: 5, title: 'Delivery Execution', icon: Truck, completed: false },
        { id: 6, title: 'Proof of Delivery', icon: Camera, completed: false }
    ];

    const loginHandler = (role) => {
        setUserRole(role);
        if (role === 'driver') {
            setCurrentScreen('driver-app');
        } else {
            setCurrentScreen('main-app');
            setActiveTab('dashboard');
        }
    };

    const simulateApiIntegration = () => {
        setApiIntegration({
            status: 'connecting',
            connectedSystems: [],
            lastSync: null,
            ordersImported: 0,
            errors: []
        });

        const interval = setInterval(() => {
            setApiIntegration(prev => {
                const progress = Math.min(prev.ordersImported + Math.random() * 50, 247);
                const systems = [
                    'TechCorp ERP',
                    'Global Electronics API',
                    'MegaStore WMS',
                    'Brooklyn Warehouse System'
                ].slice(0, Math.floor(progress / 60));

                if (progress >= 247) {
                    clearInterval(interval);
                    return {
                        status: 'completed',
                        connectedSystems: systems,
                        lastSync: new Date().toLocaleTimeString(),
                        ordersImported: 247,
                        errors: ['MegaStore API: Rate limit exceeded (resolved)']
                    };
                }

                return {
                    ...prev,
                    status: 'syncing',
                    connectedSystems: systems,
                    ordersImported: Math.floor(progress)
                };
            });
        }, 300);
    };

    //const sendDriverNotification = (driverId, message, type = 'info') => {
    //    const notification = {
    //        id: Date.now(),
    //        driverId,
    //        message,
    //        type,
    //        timestamp: new Date().toLocaleTimeString(),
    //        read: false
    //    };
    //    setDriverNotifications(prev => [notification, ...prev]);

    //    // Simulate real-time update to driver app
    //    if (currentScreen === 'driver-app') {
    //        setNotifications(prev => [notification, ...prev.slice(0, 4)]);
    //    }
    //};

    const sendNotificationToDriver = () => {
        if (!newNotification.message) {
            alert('Please enter a message');
            return;
        }

        const notification = {
            id: `DN-${Date.now()}`,
            type: newNotification.type,
            orderId: newNotification.orderId,
            message: newNotification.message,
            timestamp: new Date().toLocaleTimeString(),
            read: false,
            priority: newNotification.priority,
            targetDriver: newNotification.targetDriver
        };

        setDriverNotifications(prev => [notification, ...prev]);
        setShowNotificationModal(false);
        setNewNotification({
            type: 'status_update',
            orderId: '',
            message: '',
            priority: 'medium',
            targetDriver: 'all'
        });

        alert(`Notification sent successfully to ${newNotification.targetDriver === 'all' ? 'all drivers' : newNotification.targetDriver}`);
    };

    const markNotificationAsRead = (notificationId) => {
        setDriverNotifications(prev =>
            prev.map(notification =>
                notification.id === notificationId
                    ? { ...notification, read: true }
                    : notification
            )
        );
    };


    const simulateRouteOptimization = () => {
        setRouteOptimization({
            status: 'optimizing',
            progress: 0,
            routes: 0,
            packages: 0
        });

        const interval = setInterval(() => {
            setRouteOptimization(prev => {
                const newProgress = Math.min(prev.progress + Math.random() * 15, 100);
                const newRoutes = Math.min(Math.floor(newProgress / 20), 5);
                const newPackages = Math.min(Math.floor(newProgress * 3.5), 350);

                if (newProgress >= 100) {
                    clearInterval(interval);
                    return {
                        status: 'completed',
                        progress: 100,
                        routes: 5,
                        packages: 350
                    };
                }

                return {
                    ...prev,
                    progress: newProgress,
                    routes: newRoutes,
                    packages: newPackages
                };
            });
        }, 200);
    };

    const NotificationModal = () => (
        showNotificationModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Send Notification to Driver</h3>
                        <button
                            onClick={() => setShowNotificationModal(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Notification Type
                            </label>
                            <select
                                value={newNotification.type}
                                onChange={(e) => setNewNotification(prev => ({ ...prev, type: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            >
                                <option value="status_update">Status Update</option>
                                <option value="cancellation">Order Cancellation</option>
                                <option value="route_change">Route Change</option>
                                <option value="general">General Message</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Order ID (optional)
                            </label>
                            <input
                                type="text"
                                value={newNotification.orderId}
                                onChange={(e) => setNewNotification(prev => ({ ...prev, orderId: e.target.value }))}
                                placeholder="e.g., ORD-001"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message *
                            </label>
                            <textarea
                                value={newNotification.message}
                                onChange={(e) => setNewNotification(prev => ({ ...prev, message: e.target.value }))}
                                placeholder="Enter notification message..."
                                rows={3}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Priority
                            </label>
                            <select
                                value={newNotification.priority}
                                onChange={(e) => setNewNotification(prev => ({ ...prev, priority: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Target Driver
                            </label>
                            <select
                                value={newNotification.targetDriver}
                                onChange={(e) => setNewNotification(prev => ({ ...prev, targetDriver: e.target.value }))}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2"
                            >
                                <option value="all">All Drivers</option>
                                <option value="Michael Johnson">Michael Johnson (TRK-101)</option>
                                <option value="Sarah Williams">Sarah Williams (TRK-102)</option>
                                <option value="David Chen">David Chen (TRK-103)</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex space-x-3 mt-6">
                        <button
                            onClick={() => setShowNotificationModal(false)}
                            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={sendNotificationToDriver}
                            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Send Notification
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    const StatusBadge = ({ status }) => {
        const colors = {
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Completed': 'bg-green-100 text-green-800',
            'In Progress': 'bg-blue-100 text-blue-800',
            'API Synced': 'bg-green-100 text-green-800',
            'API Pending': 'bg-yellow-100 text-yellow-800',
            'Manual Entry': 'bg-blue-100 text-blue-800',
            'API Imported': 'bg-purple-100 text-purple-800',
            'Data Cleaned': 'bg-indigo-100 text-indigo-800',
            'Ready for Routing': 'bg-cyan-100 text-cyan-800',
            'Ingested': 'bg-purple-100 text-purple-800',
            'Sorted': 'bg-indigo-100 text-indigo-800',
            'Picked': 'bg-cyan-100 text-cyan-800',
            'Dispatched': 'bg-green-100 text-green-800',
            'Loading': 'bg-orange-100 text-orange-800',
            'Delivered': 'bg-green-100 text-green-800',
            'In Transit': 'bg-blue-100 text-blue-800',
            'Failed': 'bg-red-100 text-red-800',
            'High': 'bg-red-100 text-red-800',
            'Medium': 'bg-yellow-100 text-yellow-800',
            'Low': 'bg-green-100 text-green-800',
            'Validated': 'bg-green-100 text-green-800',
            'Needs Review': 'bg-yellow-100 text-yellow-800'
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
                {status}
            </span>
        );
    };

    const WorkflowProgress = () => (
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <h3 className="text-lg font-semibold mb-4">Delivery Workflow Progress</h3>
            <div className="flex items-center justify-between">
                {workflowSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step.completed ? 'bg-green-500 text-white' :
                                step.id === workflowStep ? 'bg-blue-500 text-white' :
                                    'bg-gray-200 text-gray-600'
                            }`}>
                            <step.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-3">
                            <p className={`text-sm font-medium ${step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                                Step {step.id}
                            </p>
                            <p className="text-xs text-gray-500">{step.title}</p>
                        </div>
                        {index < workflowSteps.length - 1 && (
                            <ArrowRight className="h-4 w-4 text-gray-400 mx-4" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderLogin = () => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <Truck className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">FDC Last Mile Delivery</h1>
                    <p className="text-gray-600 mt-2">Smart Logistics Management System</p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={() => loginHandler('admin')}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center"
                    >
                        <Building className="h-5 w-5 mr-2" />
                        Login as Back Office Admin
                    </button>

                    <button
                        onClick={() => loginHandler('driver')}
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center"
                    >
                        <Smartphone className="h-5 w-5 mr-2" />
                        Login as Driver
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">Demo Mode - Select your role to continue</p>
                </div>
            </div>
        </div>
    );

    const renderDashboard = () => (
        <div className="space-y-6">
        <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <button
                    onClick={() => setShowNotificationModal(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                >
                    <Bell className="h-4 w-4 mr-2" />
                    Send Driver Notification
                </button>
            </div>
            <WorkflowProgress />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Pickups Today</p>
                            <p className="text-2xl font-bold text-gray-900">156</p>
                            <p className="text-xs text-green-600">+12% vs yesterday</p>
                        </div>
                        <ShoppingCart className="h-8 w-8 text-blue-600" />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Orders Processed</p>
                            <p className="text-2xl font-bold text-gray-900">1,247</p>
                            <p className="text-xs text-blue-600">Ready for routing</p>
                        </div>
                        <Package className="h-8 w-8 text-green-600" />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Active Routes</p>
                            <p className="text-2xl font-bold text-gray-900">23</p>
                            <p className="text-xs text-purple-600">5 routes optimized</p>
                        </div>
                        <Route className="h-8 w-8 text-purple-600" />
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Deliveries Today</p>
                            <p className="text-2xl font-bold text-gray-900">892</p>
                            <p className="text-xs text-green-600">94.2% success rate</p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-orange-600" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Recent Workflow Activity
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            <span className="text-sm text-gray-700">156 packages picked up from TechCorp Solutions</span>
                        </div>
                        <span className="text-xs text-gray-500">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center">
                            <SortAsc className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm text-gray-700">Sorting completed for 89 orders in Zone A</span>
                        </div>
                        <span className="text-xs text-gray-500">5 min ago</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center">
                            <Route className="h-4 w-4 text-purple-600 mr-2" />
                            <span className="text-sm text-gray-700">Route optimization completed - 5 routes with 350 packages</span>
                        </div>
                        <span className="text-xs text-gray-500">12 min ago</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold flex items-center">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            Driver Notifications
                        </h3>
                        <button
                            onClick={() => setShowNotificationModal(true)}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 flex items-center"
                        >
                            <Plus className="h-4 w-4 mr-1" />
                            New Notification
                        </button>
                    </div>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                        {driverNotifications.slice(0, 5).map(notification => (
                            <div key={notification.id} className={`p-3 rounded-lg border-l-4 ${notification.priority === 'urgent' ? 'bg-red-50 border-red-500' :
                                    notification.priority === 'high' ? 'bg-orange-50 border-orange-500' :
                                        notification.priority === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                                            'bg-green-50 border-green-500'
                                }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {notification.type === 'cancellation' && <X className="h-4 w-4 text-red-600" />}
                                        {notification.type === 'status_update' && <Clock className="h-4 w-4 text-blue-600" />}
                                        {notification.type === 'route_change' && <Route className="h-4 w-4 text-purple-600" />}
                                        {notification.type === 'general' && <Bell className="h-4 w-4 text-gray-600" />}
                                        <span className="text-sm font-medium">
                                            {notification.type === 'cancellation' ? 'Cancellation' :
                                                notification.type === 'status_update' ? 'Status Update' :
                                                    notification.type === 'route_change' ? 'Route Change' : 'General'}
                                        </span>
                                        {notification.orderId && (
                                            <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                                {notification.orderId}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-xs text-gray-500">{notification.timestamp}</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                            </div>
                        ))}
                        {driverNotifications.length === 0 && (
                            <div className="text-center py-8 text-gray-500">
                                <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
                                <p>No notifications sent to drivers yet</p>
                            </div>
                        )}
                    </div>
               </div>
            </div>
        </div>

    );

    const renderPickupsIngestion = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">API Integration & Order Ingestion</h2>
                <div className="flex space-x-3">
                    <button
                        onClick={simulateApiIntegration}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center"
                    >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Sync External APIs
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
                        <Plus className="h-4 w-4 mr-2" />
                        Manual Entry
                    </button>
                </div>
            </div>

            {/* API Integration Status */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-purple-600" />
                    External System Integration
                </h3>

                {apiIntegration.status !== 'idle' && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Syncing from external systems...</span>
                            <span className="text-sm text-gray-600">{apiIntegration.ordersImported} orders imported</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(apiIntegration.ordersImported / 247) * 100}%` }}
                            ></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Connected Systems</span>
                                    <Activity className="h-4 w-4 text-green-600" />
                                </div>
                                <p className="text-xl font-bold text-green-600">{apiIntegration.connectedSystems.length}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Orders Imported</span>
                                    <Package className="h-4 w-4 text-blue-600" />
                                </div>
                                <p className="text-xl font-bold text-blue-600">{apiIntegration.ordersImported}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Last Sync</span>
                                    <Clock className="h-4 w-4 text-purple-600" />
                                </div>
                                <p className="text-xl font-bold text-purple-600">{apiIntegration.lastSync || 'Never'}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Connected Systems */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">External System Connections</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { name: 'TechCorp ERP', status: 'Connected', orders: 89, lastSync: '2 min ago' },
                        { name: 'Global Electronics API', status: 'Connected', orders: 45, lastSync: '5 min ago' },
                        { name: 'MegaStore WMS', status: 'Syncing', orders: 113, lastSync: 'In progress' },
                        { name: 'Brooklyn Warehouse System', status: 'Connected', orders: 67, lastSync: '1 min ago' }
                    ].map((system, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{system.name}</h4>
                                <StatusBadge status={system.status} />
                            </div>
                            <div className="text-sm text-gray-600">
                                <p>Orders: {system.orders}</p>
                                <p>Last sync: {system.lastSync}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pickup Requests with API Source */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Pickup Requests & Data Sources</h3>
                <div className="space-y-4">
                    {mockPickups.map(pickup => (
                        <div key={pickup.id} className="border rounded-lg p-4 hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <ShoppingCart className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{pickup.id}</h4>
                                        <p className="text-sm text-gray-600">{pickup.client}</p>
                                        <p className="text-xs text-gray-500">{pickup.location}</p>
                                        <p className="text-xs text-blue-600">Source: {pickup.apiSource}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <StatusBadge status={pickup.status} />
                                    <p className="text-sm text-gray-600 mt-1">{pickup.items} items • {pickup.weight}kg</p>
                                    <p className="text-xs text-gray-500">
                                        {pickup.syncTime ? `Synced: ${pickup.syncTime}` : 'Pending sync'}
                                    </p>
                                    <p className="text-xs text-gray-500">Ext ID: {pickup.externalOrderId}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Data Quality Dashboard */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Data Quality & Validation</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">89%</div>
                        <div className="text-sm text-gray-600">Data Quality Score</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">247</div>
                        <div className="text-sm text-gray-600">Orders Imported</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">23</div>
                        <div className="text-sm text-gray-600">Requiring Review</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">4</div>
                        <div className="text-sm text-gray-600">API Connections</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPickingSorting = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Picking & Sorting Operations</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Start Sorting
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Picking Progress</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Philadelphia Hub</span>
                                <span className="text-sm text-gray-600">89/120 items</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '74%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Newark Center</span>
                                <span className="text-sm text-gray-600">156/200 items</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Brooklyn Facility</span>
                                <span className="text-sm text-gray-600">203/250 items</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '81%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Sorting Status</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                <span className="text-sm font-medium">High Priority</span>
                            </div>
                            <span className="text-sm text-green-600">245 packages sorted</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center">
                                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                                <span className="text-sm font-medium">Medium Priority</span>
                            </div>
                            <span className="text-sm text-blue-600">189 packages sorting</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                            <div className="flex items-center">
                                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                                <span className="text-sm font-medium">Low Priority</span>
                            </div>
                            <span className="text-sm text-yellow-600">156 packages pending</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Orders Ready for Route Optimization</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-4 font-medium">Order ID</th>
                                <th className="text-left py-3 px-4 font-medium">Client</th>
                                <th className="text-left py-3 px-4 font-medium">Status</th>
                                <th className="text-left py-3 px-4 font-medium">Destination</th>
                                <th className="text-left py-3 px-4 font-medium">Items</th>
                                <th className="text-left py-3 px-4 font-medium">Weight</th>
                                <th className="text-left py-3 px-4 font-medium">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockOrders.map(order => (
                                <tr key={order.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4 font-medium">{order.id}</td>
                                    <td className="py-3 px-4">{order.client}</td>
                                    <td className="py-3 px-4"><StatusBadge status={order.status} /></td>
                                    <td className="py-3 px-4">{order.destination}</td>
                                    <td className="py-3 px-4">{order.items}</td>
                                    <td className="py-3 px-4">{order.weight}kg</td>
                                    <td className="py-3 px-4">
                                        <StatusBadge status={order.priority} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderRoutingEngine = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">AI Route Optimization Engine</h2>
                <button
                    onClick={simulateRouteOptimization}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
                >
                    <Zap className="h-4 w-4 mr-2" />
                    Start Route Optimization
                </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Route className="h-5 w-5 mr-2" />
                    Smart Route Generation (Min 100 packages per route)
                </h3>

                {routeOptimization.status !== 'idle' && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Processing 1,247 packages...</span>
                            <span className="text-sm text-gray-600">{Math.round(routeOptimization.progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${routeOptimization.progress}%` }}
                            ></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Routes Generated</span>
                                    <Route className="h-4 w-4 text-green-600" />
                                </div>
                                <p className="text-xl font-bold text-green-600">{routeOptimization.routes}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Packages Allocated</span>
                                    <Package className="h-4 w-4 text-blue-600" />
                                </div>
                                <p className="text-xl font-bold text-blue-600">{routeOptimization.packages}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Generated Optimized Routes</h3>
                <div className="space-y-4">
                    {mockRoutes.map(route => (
                        <div key={route.id} className="border rounded-lg p-4 hover:bg-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                        <Route className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{route.name}</h4>
                                        <p className="text-sm text-gray-600">
                                            {route.packages} packages • {route.stops} stops • {route.distance}km
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Vehicle: {route.vehicle} • Driver: {route.driver}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <StatusBadge status={route.status} />
                                    <p className="text-sm text-gray-600 mt-1">ETA: {route.estimatedTime}</p>
                                    <button className="text-blue-600 hover:text-blue-800 text-sm mt-1">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderDispatch = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Dispatch & Vehicle Loading</h2>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Dispatch All Routes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockRoutes.map(route => (
                    <div key={route.id} className="bg-white p-6 rounded-lg shadow-sm border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">{route.name}</h3>
                            <StatusBadge status={route.status} />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Vehicle:</span>
                                <span className="text-sm font-medium">{route.vehicle}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Driver:</span>
                                <span className="text-sm font-medium">{route.driver}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">Packages to Load:</span>
                                <span className="text-sm font-medium">{route.packages} packages</span>
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium">Loading Progress</span>
                                    <span className="text-sm text-gray-600">
                                        {route.status === 'Loading' ? '78%' : route.status === 'Dispatched' ? '100%' : '0%'}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${route.status === 'Dispatched' ? 'bg-green-500' : 'bg-blue-500'
                                            }`}
                                        style={{
                                            width: route.status === 'Loading' ? '78%' :
                                                route.status === 'Dispatched' ? '100%' : '0%'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">
                                    View Package Manifest
                                </button>
                                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 text-sm">
                                    Loading Checklist
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Dispatch Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">2</div>
                        <div className="text-sm text-gray-600">Routes Dispatched</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">233</div>
                        <div className="text-sm text-gray-600">Packages Loaded</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">2</div>
                        <div className="text-sm text-gray-600">Vehicles Active</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">27</div>
                        <div className="text-sm text-gray-600">Total Delivery Stops</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDelivery = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Delivery Execution & Tracking</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Live Tracking
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Real-time Delivery Map</h3>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>
                    <div className="text-center relative z-10">
                        <div className="flex justify-center mb-4">
                            <div className="relative">
                                <MapPin className="h-16 w-16 text-blue-600" />
                                <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                                    <Truck className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <p className="text-lg font-medium text-gray-700">Live GPS Tracking</p>
                        <p className="text-sm text-gray-500 mt-2">2 vehicles active • 15 delivery points across PA, NY, NJ</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                <span className="text-sm">Delivered</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                <span className="text-sm">In Transit</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                <span className="text-sm">Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Active Deliveries</h3>
                    <div className="space-y-3">
                        {mockDeliveries.map(delivery => (
                            <div key={delivery.id} className="border rounded-lg p-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">{delivery.orderId}</p>
                                        <p className="text-sm text-gray-600">
                                            Status: <StatusBadge status={delivery.status} />
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        {delivery.timestamp && (
                                            <p className="text-sm text-gray-600">Time: {delivery.timestamp}</p>
                                        )}
                                        <p className="text-xs text-gray-500">
                                            POD: {delivery.podUploaded ? '✓ Uploaded' : 'Pending'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Delivery Pins & References</h3>
                    <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center">
                                <Pin className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium">Liberty Place Apartments</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                Main entrance, Building A - Added by Michael Johnson
                            </p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center">
                                <Pin className="h-4 w-4 text-green-600 mr-2" />
                                <span className="text-sm font-medium">Hudson River Plaza</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-1">
                                Security desk, Tower 1 - Added by Sarah Williams
                            </p>
                        </div>
                        <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-blue-400">
                            <Pin className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                            <span className="text-sm text-gray-500">Add New Reference Pin</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProofOfDelivery = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Proof of Delivery Management</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Bulk Upload PODs
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Total Deliveries</p>
                            <p className="text-2xl font-bold text-gray-900">892</p>
                        </div>
                        <CheckSquare className="h-8 w-8 text-blue-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">PODs Uploaded</p>
                            <p className="text-2xl font-bold text-gray-900">756</p>
                        </div>
                        <Camera className="h-8 w-8 text-green-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Pending PODs</p>
                            <p className="text-2xl font-bold text-gray-900">136</p>
                        </div>
                        <Clock className="h-8 w-8 text-orange-600" />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Success Rate</p>
                            <p className="text-2xl font-bold text-gray-900">84.7%</p>
                        </div>
                        <Target className="h-8 w-8 text-purple-600" />
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Recent Proof of Deliveries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(index => (
                        <div key={index} className="border rounded-lg p-4">
                            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                                <Camera className="h-8 w-8 text-gray-400" />
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium">ORD-00{index}</p>
                                <p className="text-sm text-gray-600">Driver: Michael Johnson</p>
                                <p className="text-xs text-gray-500">Uploaded: {new Date().toLocaleTimeString()}</p>
                                <div className="flex space-x-2">
                                    <button className="flex-1 bg-blue-600 text-white py-1 rounded text-xs">
                                        View
                                    </button>
                                    <button className="flex-1 border border-gray-300 text-gray-700 py-1 rounded text-xs">
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );




const renderDriverApp = () => (
                <div className="min-h-screen bg-gray-50">
                    <header className="bg-green-600 text-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Smartphone className="h-6 w-6 mr-2" />
                                <div>
                                    <h1 className="text-lg font-bold">Driver App</h1>
                                    <p className="text-sm opacity-90">Michael Johnson - TRK-101</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setCurrentScreen('login')}
                                className="bg-green-700 px-3 py-1 rounded text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    </header>

                    <div className="p-4 space-y-4">
                        {/* Notifications Section */}
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold">Notifications</h3>
                                <div className="flex items-center">
                                    {driverNotifications.filter(n => !n.read).length > 0 && (
                                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 mr-2">
                                            {driverNotifications.filter(n => !n.read).length}
                                        </span>
                                    )}
                                    <Bell className="h-5 w-5 text-gray-600" />
                                </div>
                            </div>
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {driverNotifications.filter(n => !n.read).map(notification => (
                                    <div key={notification.id} className={`p-2 rounded text-xs border-l-4 ${notification.priority === 'urgent' ? 'bg-red-50 border-red-500' :
                                            notification.priority === 'high' ? 'bg-orange-50 border-orange-500' :
                                                notification.priority === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                                                    'bg-green-50 border-green-500'
                                        }`}>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">
                                                {notification.type === 'cancellation' ? '🚫 Cancellation' :
                                                    notification.type === 'status_update' ? '📝 Status Update' :
                                                        notification.type === 'route_change' ? '🗺️ Route Change' : '📢 Update'}
                                            </span>
                                            <button
                                                onClick={() => markNotificationAsRead(notification.id)}
                                                className="text-blue-600 text-xs"
                                            >
                                                Mark Read
                                            </button>
                                        </div>
                                        {notification.orderId && (
                                            <div className="text-xs text-gray-600 mt-1">Order: {notification.orderId}</div>
                                        )}
                                        <div className="text-xs text-gray-700 mt-1">{notification.message}</div>
                                        <div className="text-xs text-gray-500 mt-1">{notification.timestamp}</div>
                                    </div>
                                ))}
                                {driverNotifications.filter(n => !n.read).length === 0 && (
                                    <div className="text-center py-4 text-gray-500 text-sm">
                                        <Bell className="h-6 w-6 mx-auto mb-2 opacity-50" />
                                        No new notifications
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-3">Today's Route: Philadelphia Metro</h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-blue-50 p-3 rounded">
                                    <div className="text-xl font-bold text-blue-600">125</div>
                                    <div className="text-xs text-gray-600">Total Packages</div>
                                </div>
                                <div className="bg-green-50 p-3 rounded">
                                    <div className="text-xl font-bold text-green-600">15</div>
                                    <div className="text-xs text-gray-600">Delivery Stops</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-3">Delivery Progress</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                        <span className="text-sm">Stop 1: Center City - Market St</span>
                                    </div>
                                    <span className="text-xs text-green-600">Completed</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 text-blue-600 mr-2" />
                                        <span className="text-sm">Stop 2: University City</span>
                                    </div>
                                    <span className="text-xs text-blue-600">In Progress</span>
                                </div>
                                <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <div className="flex items-center">
                                        <AlertCircle className="h-4 w-4 text-gray-600 mr-2" />
                                        <span className="text-sm">Stop 3: Northern Liberties</span>
                                    </div>
                                    <span className="text-xs text-gray-600">Pending</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-blue-600 text-white p-4 rounded-lg text-center">
                                <Navigation className="h-6 w-6 mx-auto mb-2" />
                                <span className="text-sm">Navigate</span>
                            </button>
                            <button className="bg-green-600 text-white p-4 rounded-lg text-center">
                                <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                                <span className="text-sm">Mark Delivered</span>
                            </button>
                            <button className="bg-purple-600 text-white p-4 rounded-lg text-center">
                                <Camera className="h-6 w-6 mx-auto mb-2" />
                                <span className="text-sm">Upload POD</span>
                            </button>
                            <button className="bg-orange-600 text-white p-4 rounded-lg text-center">
                                <Pin className="h-6 w-6 mx-auto mb-2" />
                                <span className="text-sm">Add Pin</span>
                            </button>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-3">Notifications History</h3>
                            <div className="space-y-2 max-h-40 overflow-y-auto">
                                {driverNotifications.map(notification => (
                                    <div key={notification.id} className={`p-2 rounded text-xs ${notification.read ? 'bg-gray-50' : 'bg-blue-50'
                                        }`}>
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">
                                                {notification.type === 'cancellation' ? '🚫 Cancellation' :
                                                    notification.type === 'status_update' ? '📝 Status Update' :
                                                        notification.type === 'route_change' ? '🗺️ Route Change' : '📢 Update'}
                                            </span>
                                            <span className={`text-xs ${notification.read ? 'text-gray-500' : 'text-blue-600'}`}>
                                                {notification.read ? 'Read' : 'New'}
                                            </span>
                                        </div>
                                        {notification.orderId && (
                                            <div className="text-xs text-gray-600 mt-1">Order: {notification.orderId}</div>
                                        )}
                                        <div className="text-xs text-gray-700 mt-1">{notification.message}</div>
                                        <div className="text-xs text-gray-500 mt-1">{notification.timestamp}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-3">Emergency Contact</h3>
                            <div className="space-y-2">
                                <button className="w-full bg-red-600 text-white p-3 rounded-lg text-center flex items-center justify-center">
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Dispatch Center
                                </button>
                                <button className="w-full bg-orange-600 text-white p-3 rounded-lg text-center flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 mr-2" />
                                    Report Issue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                );

    const renderMainApp = () => (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Truck className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-xl font-bold text-gray-900">FDC Last Mile Delivery</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-500 hover:text-gray-700">
                                <Bell className="h-5 w-5" />
                            </button>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">BA</span>
                                </div>
                                <span className="text-sm text-gray-700">Back Office Admin</span>
                            </div>
                            <button
                                onClick={() => setCurrentScreen('login')}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        {[
                            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                            { id: 'pickups', label: 'Pickups & Ingestion', icon: ShoppingCart },
                            { id: 'sorting', label: 'Picking & Sorting', icon: SortAsc },
                            { id: 'routing', label: 'Route Optimization', icon: Route },
                            { id: 'dispatch', label: 'Dispatch & Loading', icon: Send },
                            { id: 'delivery', label: 'Delivery Tracking', icon: Truck },
                            { id: 'pod', label: 'Proof of Delivery', icon: Camera }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <tab.icon className="h-4 w-4 mr-2" />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'dashboard' && renderDashboard()}
                {activeTab === 'pickups' && renderPickupsIngestion()}
                {activeTab === 'sorting' && renderPickingSorting()}
                {activeTab === 'routing' && renderRoutingEngine()}
                {activeTab === 'dispatch' && renderDispatch()}
                {activeTab === 'delivery' && renderDelivery()}
                {activeTab === 'pod' && renderProofOfDelivery()}
            </main>
        </div>
    );

    // Main Render Logic
    if (currentScreen === 'login') {
        return renderLogin();
    } else if (currentScreen === 'driver-app') {
        return renderDriverApp();
    } else {
        return (
            <div>
                {renderMainApp()}
                <NotificationModal
                    showNotificationModal={showNotificationModal}
                    setShowNotificationModal={setShowNotificationModal}
                    newNotification={newNotification}
                    setNewNotification={setNewNotification}
                    sendNotificationToDriver={sendNotificationToDriver}
                />
            </div>
        );
    }
};

export default LastMileDeliveryApp

// Notification Modal Component - Add this AFTER the LastMileDeliveryApp component
const NotificationModal = ({
    showNotificationModal,
    setShowNotificationModal,
    newNotification,
    setNewNotification,
    sendNotificationToDriver
}) => {
    if (!showNotificationModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Send Notification to Driver</h3>
                    <button
                        onClick={() => setShowNotificationModal(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Notification Type
                        </label>
                        <select
                            value={newNotification.type}
                            onChange={(e) => setNewNotification(prev => ({ ...prev, type: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        >
                            <option value="status_update">Status Update</option>
                            <option value="cancellation">Order Cancellation</option>
                            <option value="route_change">Route Change</option>
                            <option value="general">General Message</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Order ID (optional)
                        </label>
                        <input
                            type="text"
                            value={newNotification.orderId}
                            onChange={(e) => setNewNotification(prev => ({ ...prev, orderId: e.target.value }))}
                            placeholder="e.g., ORD-001"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message *
                        </label>
                        <textarea
                            value={newNotification.message}
                            onChange={(e) => setNewNotification(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="Enter notification message..."
                            rows={3}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                        </label>
                        <select
                            value={newNotification.priority}
                            onChange={(e) => setNewNotification(prev => ({ ...prev, priority: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Target Driver
                        </label>
                        <select
                            value={newNotification.targetDriver}
                            onChange={(e) => setNewNotification(prev => ({ ...prev, targetDriver: e.target.value }))}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        >
                            <option value="all">All Drivers</option>
                            <option value="Michael Johnson">Michael Johnson (TRK-101)</option>
                            <option value="Sarah Williams">Sarah Williams (TRK-102)</option>
                            <option value="David Chen">David Chen (TRK-103)</option>
                        </select>
                    </div>
                </div>

                <div className="flex space-x-3 mt-6">
                    <button
                        onClick={() => setShowNotificationModal(false)}
                        className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={sendNotificationToDriver}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Send Notification
                    </button>
                </div>
            </div>
        </div>
    );
};