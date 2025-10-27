---
sidebar_position: 4
---

# Limits

## Request Limits

Each API Key is limited to a maximum of **600 requests per minute**.

If you exceed this limit, the API will return an HTTP **429 Too Many Requests** response.

### Error Response Example

```apib
+ Response 429 (application/json)

  + Body

    {
      "error": "RATE_LIMIT_EXCEEDED",
      "error_description": "You have exceeded the allowed request rate.",
      "error_uri": "https://depay.com/docs/apis/limits"
    }

```

## Recommendations

:::info
- Use exponential backoff when retrying requests after receiving a 429 error.
- Distribute traffic evenly over time to avoid bursts.
:::
