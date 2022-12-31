'use strict';

/**
 * liquid router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::liquid.liquid');
