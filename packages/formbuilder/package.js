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
    api.use('ecmascript');
    //api.use('templating', 'client');
    api.use('angular', 'client');
    api.use('angular:angular-route', 'client');
    api.use('angularui:angular-ui-router', 'client');
    api.use('twbs:bootstrap', 'client');
    api.use('fortawesome:fontawesome', 'client');
    api.use('dbernhard:jquery-ui-draggable', 'client');
    api.use('scmart:jquery-timepicker', 'client');
    //it is important to include the html file before the js
    api.addFiles([
        'client/css/style.css',
        'client/css/boxes.css',
        'client/css/ratings.css',
        'client/css/nform_style.css',
        'client/builder/views/builder.ng.html',
        'client/lib/app.ng.js',
        'client/builder/controllers/builder.ng.js',
        'client/builder/build.ng.js',
        'client/builder/form.ng.js'],
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
