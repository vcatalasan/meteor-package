Package.describe({
    name: 'vcatalasan:formbuilder',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    //api.use('ecmascript');
    //api.use('templating', 'client');
    api.use('jquery', 'client');
    api.use('mrt:jquery-ui-sortable', 'client');
    api.use('twbs:bootstrap', 'client');
    api.use('angular', 'client');
    api.use('angular:angular-route', 'client');
    api.use('angularui:angular-ui-router', 'client');
    api.use('mrt:datatables', 'client');
    api.use('fortawesome:fontawesome', 'client');
    api.use('dbernhard:jquery-ui-draggable', 'client');
    api.use('scmart:jquery-timepicker', 'client');
    api.use('eastamis:angular-bootstrap-colorpicker', 'client');
    api.use('kidovate:bootstrap-slider', 'client');
    //it is important to include the html file before the js
    api.addFiles([
        'client/stylesheets/font-awesome/font-awesome.min.css',
        'client/stylesheets/style.css',
        'client/stylesheets/boxes.css',
        'client/stylesheets/nform_style.css',
        'client/builder/builder.ng.html',
        'client/builder/builder.ng.js',
        'client/app.ng.js'
        ],
        'client'
    );
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use("templating", "client");
    api.use('tinytest');
    api.use('vcatalasan:formbuilder');
    //it is important to include the html file before the js
    api.addFiles(['formbuilder.html','formbuilder.css','formbuilder-tests.js'], 'client');
});
