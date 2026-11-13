//--|►| RequireJS (Log a Ticket) |◄|--//
require(['config'], () => {
  let fontAwesomePro = 'vendors/font-awesome/5.13.0/js/all.min.js';
  let jQuery = 'https://code.jquery.com/jquery-3.6.0.min.js';
  let main = 'main.js';

  require([fontAwesomePro, jQuery, main]);

  /*--► console.log('--config.js Loaded'); ◄--*/
});
