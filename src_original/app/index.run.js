(function() {
  'use strict';

  angular
    .module('ngYoAngularTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
