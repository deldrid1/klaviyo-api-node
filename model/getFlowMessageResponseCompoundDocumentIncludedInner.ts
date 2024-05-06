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
import { FlowActionResponseObjectResource } from './flowActionResponseObjectResource';
import { ObjectLinks } from './objectLinks';
import { TemplateEnum } from './templateEnum';
import { TemplateResponseObjectResource } from './templateResponseObjectResource';
import { TemplateResponseObjectResourceAttributes } from './templateResponseObjectResourceAttributes';



    export type GetFlowMessageResponseCompoundDocumentIncludedInner = FlowActionResponseObjectResource | TemplateResponseObjectResource

    export class GetFlowMessageResponseCompoundDocumentIncludedInnerHelper {
        static mapping: {[index: string]: any} = {
            "flow-action": "FlowActionResponseObjectResource",
            "template": "TemplateResponseObjectResource",
        }
        static discriminator: string | undefined = "type";
    }

