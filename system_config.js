System.config({
  packages: {
    'ng2-material': {
      main: 'main',
      format: 'register',
      map: {
        '.': System.normalizeSync('{barbatus:ng2-material}')
      }
    }
  }
});
