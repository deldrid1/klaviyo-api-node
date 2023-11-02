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
import { CampaignMessageCreateQueryResourceObjectAttributesContent } from './campaignMessageCreateQueryResourceObjectAttributesContent';
import { RenderOptionsSubObject } from './renderOptionsSubObject';

export class CampaignMessagePartialUpdateQueryResourceObjectAttributes {
    /**
    * The label or name on the message
    */
    'label'?: string;
    'content'?: CampaignMessageCreateQueryResourceObjectAttributesContent;
    'renderOptions'?: RenderOptionsSubObject;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "CampaignMessageCreateQueryResourceObjectAttributesContent"
        },
        {
            "name": "renderOptions",
            "baseName": "render_options",
            "type": "RenderOptionsSubObject"
        }    ];

    static getAttributeTypeMap() {
        return CampaignMessagePartialUpdateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

