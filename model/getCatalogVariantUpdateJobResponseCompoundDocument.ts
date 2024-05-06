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
import { CatalogVariantResponseObjectResource } from './catalogVariantResponseObjectResource';
import { GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner } from './getCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner';
export class GetCatalogVariantUpdateJobResponseCompoundDocument {
    'data': GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner;
    'included'?: Array<CatalogVariantResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GetCatalogVariantUpdateJobResponseCollectionCompoundDocumentDataInner"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<CatalogVariantResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetCatalogVariantUpdateJobResponseCompoundDocument.attributeTypeMap;
    }
}

