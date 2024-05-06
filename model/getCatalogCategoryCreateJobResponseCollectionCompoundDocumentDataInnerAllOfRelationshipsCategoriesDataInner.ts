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
import { CatalogCategoryEnum } from './catalogCategoryEnum';
export class GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner {
    'type': CatalogCategoryEnum | 'catalog-category';
    /**
    * IDs of the created catalog categories.
    */
    'id': string;


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
        }    ];

    static getAttributeTypeMap() {
        return GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner.attributeTypeMap;
    }
}

export namespace GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCategoriesDataInner {
}
