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
export class MetricAggregateQueryResourceObjectAttributes {
    /**
    * The metric ID used in the aggregation.
    */
    'metricId': string;
    /**
    * Optional pagination cursor to iterate over large result sets
    */
    'pageCursor'?: string;
    /**
    * Measurement key, e.g. `unique`, `sum_value`, `count`
    */
    'measurements': Array<MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum> | Array<'count' | 'sum_value' | 'unique'>;
    /**
    * Aggregation interval, e.g. \"hour\", \"day\", \"week\", \"month\"
    */
    'interval'?: MetricAggregateQueryResourceObjectAttributes.IntervalEnum | 'day' | 'hour' | 'month' | 'week' | null = MetricAggregateQueryResourceObjectAttributes.IntervalEnum.Day;
    /**
    * Alter the maximum number of returned rows in a single page of aggregation results
    */
    'pageSize'?: number | null = 500;
    /**
    * Optional attribute(s) used for partitioning by the aggregation function
    */
    'by'?: Array<MetricAggregateQueryResourceObjectAttributes.ByEnum> | Array<'$attributed_channel' | '$attributed_flow' | '$attributed_message' | '$attributed_variation' | '$campaign_channel' | '$flow' | '$flow_channel' | '$message' | '$message_send_cohort' | '$variation' | '$variation_send_cohort' | 'Bot Click' | 'Bounce Type' | 'Campaign Name' | 'Client Canonical' | 'Client Name' | 'Client Type' | 'Email Domain' | 'Failure Source' | 'Failure Type' | 'From Number' | 'From Phone Region' | 'Inbox Provider' | 'List' | 'Message Name' | 'Message Type' | 'Method' | 'Subject' | 'To Number' | 'To Phone Region' | 'URL' | 'form_id'> | null;
    /**
    * Provide fields to limit the returned data
    */
    'returnFields'?: Array<string> | null;
    /**
    * List of filters, must include time range using ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).             These filters follow a similar format to those in `GET` requests, the primary difference is that this endpoint asks for a list.             The time range can be filtered by providing a `greater-or-equal` and a `less-than` filter on the `datetime` field.
    */
    'filter': Array<string>;
    /**
    * The timezone used for processing the query, e.g. `\'America/New_York\'`.             This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones).             While most are supported, a few notable exceptions are `Factory`, `Europe/Kyiv` and `Pacific/Kanton`. This field is case-sensitive.
    */
    'timezone'?: string | null = 'UTC';
    /**
    * Provide a sort key (e.g. -$message)
    */
    'sort'?: MetricAggregateQueryResourceObjectAttributes.SortEnum | '$attributed_channel' | '-$attributed_channel' | '$attributed_flow' | '-$attributed_flow' | '$attributed_message' | '-$attributed_message' | '$attributed_variation' | '-$attributed_variation' | '$campaign_channel' | '-$campaign_channel' | '$flow' | '-$flow' | '$flow_channel' | '-$flow_channel' | '$message' | '-$message' | '$message_send_cohort' | '-$message_send_cohort' | '$variation' | '-$variation' | '$variation_send_cohort' | '-$variation_send_cohort' | 'Bot Click' | '-Bot Click' | 'Bounce Type' | '-Bounce Type' | 'Campaign Name' | '-Campaign Name' | 'Client Canonical' | '-Client Canonical' | 'Client Name' | '-Client Name' | 'Client Type' | '-Client Type' | 'Email Domain' | '-Email Domain' | 'Failure Source' | '-Failure Source' | 'Failure Type' | '-Failure Type' | 'From Number' | '-From Number' | 'From Phone Region' | '-From Phone Region' | 'Inbox Provider' | '-Inbox Provider' | 'List' | '-List' | 'Message Name' | '-Message Name' | 'Message Type' | '-Message Type' | 'Method' | '-Method' | 'Subject' | '-Subject' | 'To Number' | '-To Number' | 'To Phone Region' | '-To Phone Region' | 'URL' | '-URL' | 'count' | '-count' | 'form_id' | '-form_id' | 'sum_value' | '-sum_value' | 'unique' | '-unique';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metricId",
            "baseName": "metric_id",
            "type": "string"
        },
        {
            "name": "pageCursor",
            "baseName": "page_cursor",
            "type": "string"
        },
        {
            "name": "measurements",
            "baseName": "measurements",
            "type": "Array<MetricAggregateQueryResourceObjectAttributes.MeasurementsEnum>"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "MetricAggregateQueryResourceObjectAttributes.IntervalEnum"
        },
        {
            "name": "pageSize",
            "baseName": "page_size",
            "type": "number"
        },
        {
            "name": "by",
            "baseName": "by",
            "type": "Array<MetricAggregateQueryResourceObjectAttributes.ByEnum>"
        },
        {
            "name": "returnFields",
            "baseName": "return_fields",
            "type": "Array<string>"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "Array<string>"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "MetricAggregateQueryResourceObjectAttributes.SortEnum"
        }    ];

    static getAttributeTypeMap() {
        return MetricAggregateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

export namespace MetricAggregateQueryResourceObjectAttributes {
    export enum MeasurementsEnum {
        Count = <any> 'count',
        SumValue = <any> 'sum_value',
        Unique = <any> 'unique'
    }
    export enum IntervalEnum {
        Day = <any> 'day',
        Hour = <any> 'hour',
        Month = <any> 'month',
        Week = <any> 'week'
    }
    export enum ByEnum {
        AttributedChannel = <any> '$attributed_channel',
        AttributedFlow = <any> '$attributed_flow',
        AttributedMessage = <any> '$attributed_message',
        AttributedVariation = <any> '$attributed_variation',
        CampaignChannel = <any> '$campaign_channel',
        Flow = <any> '$flow',
        FlowChannel = <any> '$flow_channel',
        Message = <any> '$message',
        MessageSendCohort = <any> '$message_send_cohort',
        Variation = <any> '$variation',
        VariationSendCohort = <any> '$variation_send_cohort',
        BotClick = <any> 'Bot Click',
        BounceType = <any> 'Bounce Type',
        CampaignName = <any> 'Campaign Name',
        ClientCanonical = <any> 'Client Canonical',
        ClientName = <any> 'Client Name',
        ClientType = <any> 'Client Type',
        EmailDomain = <any> 'Email Domain',
        FailureSource = <any> 'Failure Source',
        FailureType = <any> 'Failure Type',
        FromNumber = <any> 'From Number',
        FromPhoneRegion = <any> 'From Phone Region',
        InboxProvider = <any> 'Inbox Provider',
        List = <any> 'List',
        MessageName = <any> 'Message Name',
        MessageType = <any> 'Message Type',
        Method = <any> 'Method',
        Subject = <any> 'Subject',
        ToNumber = <any> 'To Number',
        ToPhoneRegion = <any> 'To Phone Region',
        Url = <any> 'URL',
        FormId = <any> 'form_id'
    }
    export enum SortEnum {
        AttributedChannel = <any> '$attributed_channel',
        AttributedChannelDesc = <any> '-$attributed_channel',
        AttributedFlow = <any> '$attributed_flow',
        AttributedFlowDesc = <any> '-$attributed_flow',
        AttributedMessage = <any> '$attributed_message',
        AttributedMessageDesc = <any> '-$attributed_message',
        AttributedVariation = <any> '$attributed_variation',
        AttributedVariationDesc = <any> '-$attributed_variation',
        CampaignChannel = <any> '$campaign_channel',
        CampaignChannelDesc = <any> '-$campaign_channel',
        Flow = <any> '$flow',
        FlowDesc = <any> '-$flow',
        FlowChannel = <any> '$flow_channel',
        FlowChannelDesc = <any> '-$flow_channel',
        Message = <any> '$message',
        MessageDesc = <any> '-$message',
        MessageSendCohort = <any> '$message_send_cohort',
        MessageSendCohortDesc = <any> '-$message_send_cohort',
        Variation = <any> '$variation',
        VariationDesc = <any> '-$variation',
        VariationSendCohort = <any> '$variation_send_cohort',
        VariationSendCohortDesc = <any> '-$variation_send_cohort',
        BotClick = <any> 'Bot Click',
        BotClickDesc = <any> '-Bot Click',
        BounceType = <any> 'Bounce Type',
        BounceTypeDesc = <any> '-Bounce Type',
        CampaignName = <any> 'Campaign Name',
        CampaignNameDesc = <any> '-Campaign Name',
        ClientCanonical = <any> 'Client Canonical',
        ClientCanonicalDesc = <any> '-Client Canonical',
        ClientName = <any> 'Client Name',
        ClientNameDesc = <any> '-Client Name',
        ClientType = <any> 'Client Type',
        ClientTypeDesc = <any> '-Client Type',
        EmailDomain = <any> 'Email Domain',
        EmailDomainDesc = <any> '-Email Domain',
        FailureSource = <any> 'Failure Source',
        FailureSourceDesc = <any> '-Failure Source',
        FailureType = <any> 'Failure Type',
        FailureTypeDesc = <any> '-Failure Type',
        FromNumber = <any> 'From Number',
        FromNumberDesc = <any> '-From Number',
        FromPhoneRegion = <any> 'From Phone Region',
        FromPhoneRegionDesc = <any> '-From Phone Region',
        InboxProvider = <any> 'Inbox Provider',
        InboxProviderDesc = <any> '-Inbox Provider',
        List = <any> 'List',
        ListDesc = <any> '-List',
        MessageName = <any> 'Message Name',
        MessageNameDesc = <any> '-Message Name',
        MessageType = <any> 'Message Type',
        MessageTypeDesc = <any> '-Message Type',
        Method = <any> 'Method',
        MethodDesc = <any> '-Method',
        Subject = <any> 'Subject',
        SubjectDesc = <any> '-Subject',
        ToNumber = <any> 'To Number',
        ToNumberDesc = <any> '-To Number',
        ToPhoneRegion = <any> 'To Phone Region',
        ToPhoneRegionDesc = <any> '-To Phone Region',
        Url = <any> 'URL',
        UrlDesc = <any> '-URL',
        Count = <any> 'count',
        CountDesc = <any> '-count',
        FormId = <any> 'form_id',
        FormIdDesc = <any> '-form_id',
        SumValue = <any> 'sum_value',
        SumValueDesc = <any> '-sum_value',
        Unique = <any> 'unique',
        UniqueDesc = <any> '-unique'
    }
}
