---
sidebar_position: 4
sidebar_label: Checkouts
---

# Checkouts

Access other accounts checkout data as an app.

## Shopify

Allows apps to access users' Shopify checkouts and check which shops are connected to the DePay account.

Requires [`checkouts.shopify.read`](/docs/apps/authorization/permissions) permission.


```apib
### GET https://api.depay.com/apps/checkouts/shopify

+ Request (application/json)

  GET https://api.depay.com/apps/checkouts/shopify

  + Headers

    x-api-key: {api_key}
    Authorization: Bearer {access_token}

+ Response 200 (application/json)

  + Body
    
    [
      { shop: 'web3-payments.myshopify.com' }
    ]
```

Every shop returned is connected to the user's DePay account.
