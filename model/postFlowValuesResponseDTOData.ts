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
import { FlowValuesReportEnum } from './flowValuesReportEnum';
import { ObjectLinks } from './objectLinks';
import { PostFlowValuesResponseDTODataAttributes } from './postFlowValuesResponseDTODataAttributes';
import { PostFlowValuesResponseDTODataRelationships } from './postFlowValuesResponseDTODataRelationships';
export class PostFlowValuesResponseDTOData {
    'type': FlowValuesReportEnum | 'flow-values-report';
    'attributes': PostFlowValuesResponseDTODataAttributes;
    'relationships'?: PostFlowValuesResponseDTODataRelationships;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FlowValuesReportEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "PostFlowValuesResponseDTODataAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "PostFlowValuesResponseDTODataRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostFlowValuesResponseDTOData.attributeTypeMap;
    }
}

export namespace PostFlowValuesResponseDTOData {
}
