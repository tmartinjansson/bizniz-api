// Simple companies endpoint for testing
export default function handler(req, res) {
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