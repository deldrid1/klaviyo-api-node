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
import { CatalogVariantBulkDeleteJobEnum } from './catalogVariantBulkDeleteJobEnum';
import { CouponCodeCreateJobResponseObjectResourceAttributes } from './couponCodeCreateJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
import { PostCatalogVariantDeleteJobResponseDataRelationships } from './postCatalogVariantDeleteJobResponseDataRelationships';

export class PostCatalogVariantDeleteJobResponseData {
    'type': CatalogVariantBulkDeleteJobEnum | 'catalog-variant-bulk-delete-job';
    /**
    * Unique identifier for retrieving the job. Generated by Klaviyo.
    */
    'id': string;
    'attributes': CouponCodeCreateJobResponseObjectResourceAttributes;
    'relationships'?: PostCatalogVariantDeleteJobResponseDataRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogVariantBulkDeleteJobEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CouponCodeCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostCatalogVariantDeleteJobResponseDataRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogVariantDeleteJobResponseData.attributeTypeMap;
    }
}

export namespace PostCatalogVariantDeleteJobResponseData {
}
