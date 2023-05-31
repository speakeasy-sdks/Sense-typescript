# Classification

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Sense-typescript
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Sense-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Classification } from "Classification";
import { ClassifyDocumentResponse } from "Classification/dist/sdk/models/operations";

const sdk = new Classification({
  security: {
    bearerAuth: "YOUR_BEARER_TOKEN_HERE",
  },
});

sdk.document.classifyDocument("corrupti".encode()).then((res: ClassifyDocumentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [document](docs/document/README.md)

* [classifyDocument](docs/document/README.md#classifydocument) - Classify document by type
* [classifyDocumentSync](docs/document/README.md#classifydocumentsync) - Classify document by type (sync)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

