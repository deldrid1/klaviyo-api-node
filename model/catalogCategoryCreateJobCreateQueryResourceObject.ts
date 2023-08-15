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
import { CatalogCategoryBulkCreateJobEnum } from './catalogCategoryBulkCreateJobEnum';
import { CatalogCategoryCreateJobCreateQueryResourceObjectAttributes } from './catalogCategoryCreateJobCreateQueryResourceObjectAttributes';

export class CatalogCategoryCreateJobCreateQueryResourceObject {
    'type': CatalogCategoryBulkCreateJobEnum;
    'attributes': CatalogCategoryCreateJobCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryBulkCreateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogCategoryCreateJobCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CatalogCategoryCreateJobCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogCategoryCreateJobCreateQueryResourceObject {
}
