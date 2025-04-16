module.exports = (req, res) => {
    const app = require('../index');
    
    // Get all registered routes
    const routes = [];
    app._router.stack.forEach(middleware => {
      if(middleware.route) { // routes registered directly on the app
        routes.push(middleware.route.path);
      } else if(middleware.name === 'router') { // router middleware
        middleware.handle.stack.forEach(handler => {
          if(handler.route) {
            const path = handler.route.path;
            routes.push(middleware.regexp.toString() + ' -> ' + path);
          }
        });
      }
    });
    
    res.json({ 
      routes: routes,
      environment: process.env.NODE_ENV
    });
  };