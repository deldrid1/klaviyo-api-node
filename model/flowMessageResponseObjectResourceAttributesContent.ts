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
import { EmailMessageContent } from './emailMessageContent';
import { SMSMessageContent } from './sMSMessageContent';

export class FlowMessageResponseObjectResourceAttributesContent {
    'subject': string;
    'previewText': string;
    'fromEmail': string;
    'fromLabel': string;
    'replyToEmail'?: string;
    'ccEmail'?: string;
    'bccEmail'?: string;
    'body': string;
    'mediaUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "previewText",
            "baseName": "preview_text",
            "type": "string"
        },
        {
            "name": "fromEmail",
            "baseName": "from_email",
            "type": "string"
        },
        {
            "name": "fromLabel",
            "baseName": "from_label",
            "type": "string"
        },
        {
            "name": "replyToEmail",
            "baseName": "reply_to_email",
            "type": "string"
        },
        {
            "name": "ccEmail",
            "baseName": "cc_email",
            "type": "string"
        },
        {
            "name": "bccEmail",
            "baseName": "bcc_email",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "mediaUrl",
            "baseName": "media_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlowMessageResponseObjectResourceAttributesContent.attributeTypeMap;
    }
}

