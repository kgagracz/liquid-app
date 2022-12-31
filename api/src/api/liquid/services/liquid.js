'use strict';

/**
 * liquid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::liquid.liquid');
