// src/pages/QRRedirect.jsx
import { useEffect } from "react";


const QRRedirect = () => {


  // Change this target anytime
  const target = "https://www.vijayrathfoods.com/contact"; 


  useEffect(() => {
     window.location.href = target;
  }, []);

  return <p>Redirecting...</p>;
};

export default QRRedirect;
