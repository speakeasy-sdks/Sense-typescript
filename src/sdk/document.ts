/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;

    constructor(
        defaultClient: AxiosInstance,
        securityClient: AxiosInstance,
        serverURL: string,
        language: string,
        sdkVersion: string,
        genVersion: string
    ) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }

    /**
     * Classify document by type
     *
     * @remarks
     * Score a document's similarity to each document type you defined in your Sensible account and to each reference document in the highest-scoring type.
     * To retrieve the scores, poll the `download_link` in this endpoint's response until it returns a non-error response.
     * For more information about scores, expand the 200 response in the synchronous [classification](ref:classify-document-sync) endpoint.
     *
     * Use this endpoint:
     *
     *  - In an extraction workflow. For example, determine which documents to extract prior to calling a Sensible extraction endpoint.
     *  - Outside an extraction workflow. For example, to determine where to route each document or to label each document in a system of record.
     *
     * To post the document bytes, specify the non-encoded document bytes as the entire request body,and specify the `Content-Type` header, for example,"application/pdf" or "image/jpeg".
     * For a list of supported document file types, see the [/extract](ref:extract-data-from-a-document) endpoint.
     *
     */
    async classifyDocument(
        req: Uint8Array,
        config?: AxiosRequestConfig
    ): Promise<operations.ClassifyDocumentResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/classify/async";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "raw");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ClassifyDocumentResponse = new operations.ClassifyDocumentResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.classifyAsyncSingleResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ClassifyAsyncSingleResponse
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = JSON.stringify(httpRes?.data);
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = JSON.stringify(httpRes?.data);
                }
                break;
        }

        return res;
    }

    /**
     * Classify document by type (sync)
     *
     * @remarks
     *
     * **Note:** Use this Classify endpoint for testing. Use the asynchronous Classify endpoint for production.
     *
     * Score a document's similarity to each document type you defined in your Sensible account. Get scores for the document's similarity to document types and to their reference documents.
     *
     * Use this endpoint:
     *
     *  - In an extraction workflow. For example, determine which documents to extract prior to calling a Sensible extraction endpoint.
     *  - Outside an extraction workflow. For example, determine where to route each document or to label each document in a system of record.
     *
     * To post the document bytes, specify the non-encoded document bytes as the entire request body,and specify the `Content-Type` header, for example,"application/pdf" or "image/jpeg".
     * For a list of supported document file types, see the [/extract](ref:extract-data-from-a-document) endpoint.
     *
     */
    async classifyDocumentSync(
        req: Uint8Array,
        config?: AxiosRequestConfig
    ): Promise<operations.ClassifyDocumentSyncResponse> {
        const baseURL: string = this._serverURL;
        const url: string = baseURL.replace(/\/$/, "") + "/classify";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "raw");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance = this._securityClient || this._defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] =
            "application/json;q=1, text/plain;q=0.8, text/plain;q=0.6, text/plain;q=0.4, text/plain;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.ClassifyDocumentSyncResponse =
            new operations.ClassifyDocumentSyncResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.classifySingleResponse = utils.objectToClass(
                        httpRes?.data,
                        shared.ClassifySingleResponse
                    );
                }
                break;
            case httpRes?.status == 400:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.badRequest = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 401:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unauthorized = JSON.stringify(httpRes?.data);
                }
                break;
            case [415, 429].includes(httpRes?.status):
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.unsupportedMediaType = JSON.stringify(httpRes?.data);
                }
                break;
            case httpRes?.status == 500:
                if (utils.matchContentType(contentType, `text/plain`)) {
                    res.sensibleEncounteredAnUnknownError = JSON.stringify(httpRes?.data);
                }
                break;
        }

        return res;
    }
}
