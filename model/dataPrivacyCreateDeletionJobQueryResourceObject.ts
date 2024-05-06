/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DataPrivacyCreateDeletionJobQueryResourceObjectAttributes } from './dataPrivacyCreateDeletionJobQueryResourceObjectAttributes';
import { DataPrivacyDeletionJobEnum } from './dataPrivacyDeletionJobEnum';
export class DataPrivacyCreateDeletionJobQueryResourceObject {
    'type': DataPrivacyDeletionJobEnum | 'data-privacy-deletion-job';
    'attributes': DataPrivacyCreateDeletionJobQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DataPrivacyDeletionJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "DataPrivacyCreateDeletionJobQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return DataPrivacyCreateDeletionJobQueryResourceObject.attributeTypeMap;
    }
}

export namespace DataPrivacyCreateDeletionJobQueryResourceObject {
}
