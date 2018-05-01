module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'AppName',
      script    : '/home/username/path/to/server.js',
      instances  : 'max',
      exec_mode  : 'cluster',
     // watchin    ;
      env: {
        NODE_ENV: 'production',
        PORT: 8080
      }
    } 
  ]
};

