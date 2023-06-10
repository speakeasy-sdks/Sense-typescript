# ClassifySingleResponseDocumentType

Document type defined in the Sensible account that this doc is most similar to. To use a document type for classification, Sensible requires that the type contains at least one reference document.


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | Unique ID for the document type.                                               |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | User-friendly name for the document type.                                      |
| `score`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Similarity score comparing the document to the document type, between 0 and 1. |