require.config({
  waitSeconds: 120,
  //   urlArgs: window['i4key'],
  baseUrl: '../',
  paths: {
    jquery: ['libs/jquery/3.6.0/3.6.0.min'],
    start: ['index'],
  },
});

require.onError = (err) => {
  console.log(`
  require.config({
    waitSeconds: 120,
    //   urlArgs: window['i4key'],
    baseUrl: '../',
    paths: {
      jquery: ['libs/jquery/3.6.0/3.6.0.min'],
      start: ['index'],
    },
  });
  
  require.onError = (err) => {
    debugger;
  };
  require(['jquery', 'index'], function (jquery, index) {
    index.TicketSystem.startProgram();
  }, function (err) {
    if (console && console.log) {
      console.trace();
      console.error(err);
    }
  });
  console.log('RequireJS Loaded');`);
  debugger;
};
require(['jquery', 'index'], function (jquery, index) {
  index.TicketSystem.startProgram();
}, function (err) {
  if (console && console.log) {
    console.trace();
    console.error(err);
  }
});
console.log('RequireJS Loaded');
