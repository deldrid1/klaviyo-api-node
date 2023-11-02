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
import { GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner } from './getCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner';
import { RelationshipLinks } from './relationshipLinks';

export class GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes {
    'data': Array<GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner>;
    'links'?: RelationshipLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodesDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "RelationshipLinks"
        }    ];

    static getAttributeTypeMap() {
        return GetCouponCodeCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsCouponCodes.attributeTypeMap;
    }
}

