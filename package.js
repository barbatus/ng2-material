Package.describe({
  name: 'barbatus:ng2-material',
  version: '0.1.0',
  summary: 'Angular2 Material Design packaged for Meteor',
  git: 'https://github.com/barbatus/ng2-material',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'fourseven:scss@3.4.1',
    'urigo:angular2-meteor@0.2.6_1'
  ]);

  // Adds typings.
  api.addFiles(['typings/ng2-material.d.ts'], 'server');

  api.addFiles([
    'src/components/button/button.html',
    'src/components/button/button.ts',
    'src/components/button/button.scss'
  ], 'client');

  api.addFiles([
    'src/components/input/input.ts',
    'src/components/input/input.scss'
  ], 'client');

  api.addFiles([
    'src/components/checkbox/checkbox.html',
    'src/components/checkbox/checkbox.ts',
    'src/components/checkbox/checkbox.scss'
  ], 'client');

  api.addFiles([
    'src/components/switcher/switch.html',
    'src/components/switcher/switch.ts',
    'src/components/switcher/switch.scss'
  ], 'client');

  api.addFiles([
    'src/components/progress-linear/progress_linear.html',
    'src/components/progress-linear/progress_linear.ts',
    'src/components/progress-linear/progress_linear.scss'
  ], 'client');

  api.addFiles([
    'src/components/radio/radio_button.html',
    'src/components/radio/radio_group.html',
    'src/components/radio/radio_button.ts',
    'src/components/radio/radio_dispatcher.ts',
    'src/components/radio/radio-button.scss',
    'src/components/radio/radio-group.scss'
  ], 'client');

  api.addFiles([
    'src/components/dialog/dialog.html',
    'src/components/dialog/dialog.ts'
  ], 'client');

  api.addFiles([
    'src/components/grid_list/grid_list.html',
    'src/components/grid_list/grid_list.ts',
    'src/components/grid_list/grid_tile.html',
    'src/components/grid_list/grid-list.scss'
  ], 'client');

  api.addFiles([
    'src/core/style/default-theme.scss',
    'src/core/style/palette.scss',
    'src/core/style/shadows.scss',
    'src/core/style/theme-functions.scss',
    'src/core/style/variables.scss'
  ], 'client', { isImport: true });

  api.addFiles([
    'src/core/key_codes.ts',
    'main.ts',
    'system_config.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use([
    'tinytest',
    'sanjo:jasmine@0.18.0',
    'barbatus:ng2-material'
  ]);
});
