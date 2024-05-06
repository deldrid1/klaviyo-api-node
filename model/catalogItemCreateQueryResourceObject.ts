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
import { CatalogItemCreateQueryResourceObjectAttributes } from './catalogItemCreateQueryResourceObjectAttributes';
import { CatalogItemCreateQueryResourceObjectRelationships } from './catalogItemCreateQueryResourceObjectRelationships';
import { CatalogItemEnum } from './catalogItemEnum';
export class CatalogItemCreateQueryResourceObject {
    'type': CatalogItemEnum | 'catalog-item';
    'attributes': CatalogItemCreateQueryResourceObjectAttributes;
    'relationships'?: CatalogItemCreateQueryResourceObjectRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogItemCreateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CatalogItemCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogItemCreateQueryResourceObject {
}
