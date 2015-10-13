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
    api.use("templating", "client");
    api.use('fortawesome:fontawesome', 'client');
    //it is important to include the html file before the js
    api.addFiles(['formbuilder.html','formbuilder.css','formbuilder.js'], 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use("templating", "client");
    api.use('tinytest');
    api.use('vcatalasan:formbuilder');
    //it is important to include the html file before the js
    api.addFiles(['formbuilder.html','formbuilder.css','formbuilder-tests.js'], 'client');
});
