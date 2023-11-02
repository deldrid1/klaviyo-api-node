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
import { FlowMessageEnum } from './flowMessageEnum';
import { FlowMessageResponseObjectResource } from './flowMessageResponseObjectResource';
import { FlowMessageResponseObjectResourceAttributes } from './flowMessageResponseObjectResourceAttributes';
import { FlowResponseObjectResource } from './flowResponseObjectResource';
import { ObjectLinks } from './objectLinks';




    export type GetFlowActionResponseCompoundDocumentIncludedInner = FlowResponseObjectResource | FlowMessageResponseObjectResource

    export class GetFlowActionResponseCompoundDocumentIncludedInnerHelper {
        static mapping: {[index: string]: any} = {
            "flow": "FlowResponseObjectResource",
            "flow-message": "FlowMessageResponseObjectResource",
        }
        static discriminator: string | undefined = "type";
    }

