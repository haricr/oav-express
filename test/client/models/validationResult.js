/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ValidationResult class.
 * @constructor
 * Describes the validation result of the live request, response validation.
 *
 * @member {object} [requestValidationResult] Describes the validation result
 * of the live request.
 *
 * @member {boolean} [requestValidationResult.successfulRequest] Describes the
 * status of live request validation.
 *
 * @member {array} [requestValidationResult.operationInfo] The corresponding
 * operation(s) in openapi spec that was used for validating the request.
 *
 * @member {array} [requestValidationResult.errors] Provides more information
 * about live response validation.
 *
 * @member {object} [responseValidationResult] Describes the validation result
 * of the live response.
 *
 * @member {boolean} [responseValidationResult.successfulResponse] Describes
 * the status of live response validation.
 *
 * @member {array} [responseValidationResult.operationInfo] The corresponding
 * operation(s) in openapi spec that was used for validating the response.
 *
 * @member {array} [responseValidationResult.errors] Provides more information
 * about live response validation.
 *
 * @member {array} [errors] Provides more information about validation for
 * scenarios where no potential operation was found or multiple operations were
 * found or the input was invalid.
 *
 */
class ValidationResult {
  constructor() {
  }

  /**
   * Defines the metadata of ValidationResult
   *
   * @returns {object} metadata of ValidationResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ValidationResult',
      type: {
        name: 'Composite',
        className: 'ValidationResult',
        modelProperties: {
          requestValidationResult: {
            required: false,
            readOnly: true,
            serializedName: 'requestValidationResult',
            type: {
              name: 'Composite',
              className: 'RequestValidationResult'
            }
          },
          responseValidationResult: {
            required: false,
            readOnly: true,
            serializedName: 'responseValidationResult',
            type: {
              name: 'Composite',
              className: 'ResponseValidationResult'
            }
          },
          errors: {
            required: false,
            readOnly: true,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorWrapperElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorWrapper'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ValidationResult;
