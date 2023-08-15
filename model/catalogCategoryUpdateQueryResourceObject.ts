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
import { CatalogCategoryCreateQueryResourceObjectRelationships } from './catalogCategoryCreateQueryResourceObjectRelationships';
import { CatalogCategoryEnum } from './catalogCategoryEnum';
import { CatalogCategoryUpdateQueryResourceObjectAttributes } from './catalogCategoryUpdateQueryResourceObjectAttributes';

export class CatalogCategoryUpdateQueryResourceObject {
    'type': CatalogCategoryEnum;
    /**
    * The catalog category ID is a compound ID (string), with format: `{integration}:::{catalog}:::{external_id}`. Currently, the only supported integration type is `$custom`, and the only supported catalog is `$default`.
    */
    'id': string;
    'attributes': CatalogCategoryUpdateQueryResourceObjectAttributes;
    'relationships'?: CatalogCategoryCreateQueryResourceObjectRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogCategoryUpdateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CatalogCategoryCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return CatalogCategoryUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CatalogCategoryUpdateQueryResourceObject {
}
