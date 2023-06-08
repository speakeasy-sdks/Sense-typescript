# document

## Overview

Classify documents by type

### Available Operations

* [classifyDocument](#classifydocument) - Classify document by type
* [classifyDocumentSync](#classifydocumentsync) - Classify document by type (sync)

## classifyDocument

Score a document's similarity to each document type you defined in your Sensible account and to each reference document in the highest-scoring type.
To retrieve the scores, poll the `download_link` in this endpoint's response until it returns a non-error response.
For more information about scores, expand the 200 response in the synchronous [classification](ref:classify-document-sync) endpoint.

Use this endpoint:

 - In an extraction workflow. For example, determine which documents to extract prior to calling a Sensible extraction endpoint.
 - Outside an extraction workflow. For example, to determine where to route each document or to label each document in a system of record.

To post the document bytes, specify the non-encoded document bytes as the entire request body,and specify the `Content-Type` header, for example,"application/pdf" or "image/jpeg".

This endpoint supports documents up to 4.5MB in size.

For a list of supported document file types, see the [/extract](ref:extract-data-from-a-document) endpoint.


### Example Usage

```typescript
import { Classification } from "Classification";
import { ClassifyDocumentResponse } from "Classification/dist/sdk/models/operations";

const sdk = new Classification({
  security: {
    bearerAuth: "",
  },
});

sdk.document.classifyDocument("provident".encode()).then((res: ClassifyDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## classifyDocumentSync


**Note:** Use this Classify endpoint for testing. Use the asynchronous Classify endpoint for production.

Score a document's similarity to each document type you defined in your Sensible account. Get scores for the document's similarity to document types and to their reference documents.

Use this endpoint:

 - In an extraction workflow. For example, determine which documents to extract prior to calling a Sensible extraction endpoint.
 - Outside an extraction workflow. For example, determine where to route each document or to label each document in a system of record.

To post the document bytes, specify the non-encoded document bytes as the entire request body,and specify the `Content-Type` header, for example,"application/pdf" or "image/jpeg".
This endpoint supports documents up to 4.5MB in size.

For a list of supported document file types, see the [/extract](ref:extract-data-from-a-document) endpoint.


### Example Usage

```typescript
import { Classification } from "Classification";
import { ClassifyDocumentSyncResponse } from "Classification/dist/sdk/models/operations";

const sdk = new Classification({
  security: {
    bearerAuth: "",
  },
});

sdk.document.classifyDocumentSync("distinctio".encode()).then((res: ClassifyDocumentSyncResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
