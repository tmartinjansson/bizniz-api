// Companies endpoint with CORS support
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
  
  if (req.method === "GET") {
    // Return test data
    res.status(200).json({ 
      message: "Companies endpoint is working",
      companies: [] 
    });
  } else if (req.method === "POST") {
    // Log the received data
    console.log("Received company data:", req.body);
    
    // Return success response
    res.status(201).json({ 
      message: "Company created successfully",
      company: req.body 
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}