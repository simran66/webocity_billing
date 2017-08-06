'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('webocityBillingApp.util', [])
  .factory('Util', UtilService)
  .name;
