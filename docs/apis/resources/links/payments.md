---
sidebar_position: 1
sidebar_label: Payments
---

# Link Payments

Accesses payments received with payment links.

:::info

For efficient payment status synchronization, it's advised against using API endpoints for polling payment statuses. Instead, [implement callbacks](/docs/payments/integrate/link#callback-request) to ensure your system is seamlessly updated with payment transactions.

:::

## GET

```
GET https://api.depay.com/links/:link_id/payments
```

### Required Parameters

`link_id` - (string) Link id. Get your link id from https://app.depay.com.

### Optional Parameters

`after` - (string, ISO 8601) Used to paginate payments by time. Paginates payments that have been confirmed after the given time.

### Example Request

```apib
### GET https://api.depay.com/links/{id}/payments

+ Attributes
  
  + id: '4cZQFsap1QbLIlnVC5hscB' (string, required) - The id of the link.
  + after: '2023-04-21T15:52:34.937960Z' (string, optional) - The time after which to start list payments.

+ Request (application/json)
  
  GET https://api.depay.com/links/4cZQFsap1QbLIlnVC5hscB/payments

  + Headers

    x-api-key: {api_key}
    x-api-version: 2025-10

+ Response 200 (application/json)
  
  + Body
  
    [
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
    ]
```

### Pagination

This endpoint has a limit of 10 payments that are responded per request.

Use `after` of the last received payment per response to paginate through the result set:

```
GET https://api.depay.com/links/4cZQFsap1QbLIlnVC5hscB/payments?after=2023-04-21T15:52:34.937960Z
```
