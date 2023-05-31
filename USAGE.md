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