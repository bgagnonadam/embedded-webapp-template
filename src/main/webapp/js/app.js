angular.module('telephonyApp',['ui.router','ngResource','telephonyApp.callLogsControllers',
'telephonyApp.contactsControllers','telephonyApp.contactsServices','telephonyApp.callLogsServices']);

angular.module('telephonyApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('contacts',{
        url:'/contacts',
        templateUrl:'contacts/partials/contacts.html',
        controller:'ContactListController'
    }).state('viewContact',{
       url:'/contacts/:id',
       templateUrl:'contacts/partials/contact-view.html',
       controller:'ContactViewController'
    }).state('newContact',{
        url:'/contacts',
        templateUrl:'contacts/partials/contact-add.html',
        controller:'ContactCreateController'
    }).state('editContact',{
        url:'/contacts/:id',
        templateUrl:'contacts/partials/contact-edit.html',
        controller:'ContactEditController'
    }).state('callLogs',{
       url:'/calllogs',
       templateUrl:'callLogs/partials/callLogs.html',
       controller:'CallLogsController'
    });
}).run(function($state){
   $state.go('contacts');
});