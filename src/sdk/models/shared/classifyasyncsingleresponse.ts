/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Link to download the classification response. Poll the link until it returns a non-error response.
 *
 * @remarks
 *
 */
export class ClassifyAsyncSingleResponse extends SpeakeasyBase {
    /**
     * File format of the document for which you requested classification.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content_type" })
    contentType?: string;

    /**
     * Poll until the download URL returns a non-error response. Links to a JSON download that contains the same response as from the synchronous Classify endpoint request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "download_link" })
    downloadLink?: string;

    /**
     * ID for this classification response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
