import { AlertTriangle } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <AlertTriangle size={64} className="text-amber-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">We'll be back soon!</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        Our website is currently undergoing scheduled maintenance.  
        We should be back online shortly. Thank you for your patience!
      </p>
    </div>
  );
};

export default Maintenance;
