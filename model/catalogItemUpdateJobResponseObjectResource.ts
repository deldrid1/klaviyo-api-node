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
import { CatalogItemBulkUpdateJobEnum } from './catalogItemBulkUpdateJobEnum';
import { CatalogItemCreateJobResponseObjectResourceAttributes } from './catalogItemCreateJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';

export class CatalogItemUpdateJobResponseObjectResource {
    'type': CatalogItemBulkUpdateJobEnum;
    'attributes': CatalogItemCreateJobResponseObjectResourceAttributes;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogItemBulkUpdateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogItemCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemUpdateJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace CatalogItemUpdateJobResponseObjectResource {
}
