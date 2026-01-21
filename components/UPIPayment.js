import React from 'react';

const UPIPayment = ({ amount, productTitle }) => {
  // 1. YOUR DETAILS (Change these!)
  const upiId = "yourname@okicici"; // Put your actual UPI ID here
  const payeeName = "Your Business Name"; 
  
  // 2. CREATE THE UPI LINK
  // This format works for GPay, PhonePe, and Paytm
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Order for ' + productTitle)}`;

  // 3. GENERATE QR CODE VIA GOOGLE CHART API
  // We encode the upiLink so Google can read it correctly
  const googleChartApi = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(upiLink)}&choe=UTF-8`;

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      border: '2px solid #f0f0f0', 
      borderRadius: '15px',
      backgroundColor: '#fff',
      maxWidth: '300px',
      margin: '20px auto'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Pay ₹{amount}</h3>
      
      {/* The QR Code (No library needed!) */}
      <img 
        src={googleChartApi} 
        alt="UPI QR Code" 
        style={{ width: '200px', height: '200px' }}
      />

      <p style={{ fontSize: '14px', color: '#666' }}>Scan with GPay, PhonePe, or Paytm</p>

      {/* Button for Mobile Users */}
      <a href={upiLink} style={{
        display: 'block',
        backgroundColor: '#1A73E8',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '10px'
      }}>
        Pay via App
      </a>
      
      <p style={{ fontSize: '11px', color: '#999', marginTop: '15px' }}>
        *Send payment screenshot on WhatsApp after paying to confirm order.
      </p>
    </div>
  );
};

export default UPIPayment;