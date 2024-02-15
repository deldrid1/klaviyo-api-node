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
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric';
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile';

export class GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships {
    'profile'?: GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile;
    'metric'?: GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric;
    'attributions'?: GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profile",
            "baseName": "profile",
            "type": "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfile"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsMetric"
        },
        {
            "name": "attributions",
            "baseName": "attributions",
            "type": "GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsAttributions"
        }    ];

    static getAttributeTypeMap() {
        return GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationships.attributeTypeMap;
    }
}

