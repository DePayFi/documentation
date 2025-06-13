---
sidebar_position: 4
sidebar_label: Payments
---

# Payments

Access user's payment data.

You app is required to have the [`payments.read`](/docs/apps/user-authorization#paymentsread) permission authorized from the user's account.

## Shopify Payments

Allows apps to access users' Shopify payments with a Shopify payment `id`.

:::info
Only succeded payments are returned via this endpoint.
:::

```apib
### GET https://api.depay.com/apps/payments/shopify/{id}

+ Attributes
  
  + id: 'r0jveQYVIoqGGcXM7JjAap1u4' (string, required) - The id of the shopify payment.

+ Request (application/json)
  
  GET https://api.depay.com/apps/payments/shopify/r0jveQYVIoqGGcXM7JjAap1u4

  + Headers

    x-api-key: {api_key}
    Authorization: Bearer {access_token}

+ Response 200 (application/json)
  
  + Body
  
    {
      "status": "success",
      "failed_reason": nil,
      "blockchain": "ethereum",
      "transaction": "0xe25ec56d630b2a626a32258b3c90a0ce8cd494e5",
      "sender": "0xcea76a7b223f268cc727fb3a2a93491817cee51a",
      "nonce": "37",
      "receiver": "0x830807e11ee2ee50538302607f5f656d8449855d",
      "token": "0xd4e86ba0bab749c275f8423b84d59d5383d7591e",
      "decimals": 18,
      "commitment": "confirmed",
      "confirmations": 1,
      "after_block": "13542983",
      "amount": "930.26",
      "fee_amount": nil,
      "fee_receiver": nil,
      "payload": nil,
      "secret_id": "d81b7658-b5ed-477e-9865-96c7f63278eb",
      "callback": nil,
      "release": nil,
      "forward_to": nil,
      "forward_on_failure": true,
      "confirmed_at": nil,
      "created_at": "2022-11-05T09:05:27.359792Z",
      "updated_at": "2022-11-05T09:05:27.359792Z"
    }
```


