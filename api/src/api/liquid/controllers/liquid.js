'use strict';

/**
 * liquid controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::liquid.liquid');
