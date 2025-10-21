---
sidebar_position: 6
sidebar_label: Shopify
---

# Shopify Payments

Access your own account's Shopify payment data.

:::info
To access other account's Shopify payment data as an app, please [continue here](/docs/apps/resources/payments).
:::

:::info
Only succeded payments are returned via this endpoint.
:::

```apib
### GET https://api.depay.com/payments/shopify/{id}

+ Attributes
  
  + id: 'r0jveQYVIoqGGcXM7JjAap1u4' (string, required) - The id of the shopify payment.

+ Request (application/json)
  
  GET https://api.depay.com/payments/shopify/r0jveQYVIoqGGcXM7JjAap1u4

  + Headers

    x-api-key: {api_key}
    x-api-version: 2025-10

+ Response 200 (application/json)
  
  + Body
  
    {
      "blockchain": "ethereum",
      "transaction": "0xe25ec56d630b2a626a32258b3c90a0ce8cd494e5",
      "sender": "0xcea76a7b223f268cc727fb3a2a93491817cee51a",
      "receiver": "0x830807e11ee2ee50538302607f5f656d8449855d",
      "token": "0xd4e86ba0bab749c275f8423b84d59d5383d7591e",
      "amount": "930.26",
      "payload": nil,
      "after_block": "13542983",
      "commitment": "confirmed",
      "confirmations": 1,
      "created_at": "2022-11-05T09:05:27.359792Z",
      "confirmed_at": "2022-11-05T09:06:28.421791Z"
    }
```


