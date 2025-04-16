// Companies endpoint with CORS support and in-memory storage
// Store companies in memory
const companies = [];

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
    // Return the companies stored in memory
    res.status(200).json({ 
      message: "Companies endpoint is working",
      companies: companies 
    });
  } else if (req.method === "POST") {
    try {
      // Create a new company with an id
      const newCompany = {
        id: Date.now().toString(), // Simple unique ID based on timestamp
        ...req.body,
        createdAt: new Date().toISOString()
      };
      
      // Add to our in-memory array
      companies.push(newCompany);
      
      // Log the created company
      console.log("Created company:", newCompany);
      console.log("Total companies:", companies.length);
      
      // Return success response
      res.status(201).json({ 
        message: "Company created successfully",
        company: newCompany 
      });
    } catch (error) {
      console.error("Error creating company:", error);
      res.status(500).json({ message: "Failed to create company" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}