// api/company-test.js
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "https://bizniz-admin.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers", 
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS request (preflight)
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  
  // Simple test response
  res.status(200).json({ 
    message: "Company test endpoint is working successfully"
  });
}