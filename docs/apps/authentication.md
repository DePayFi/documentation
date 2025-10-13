---
sidebar_position: 3
---

# Authentication

Authenticate as an App towards DePay's APIs.

To authenticate towards DePay's APIs as an App you need an [API Key](/docs/apis/authentication) and a valid [Access Token](#access-token).

## API Key

Make sure you have an Api Key before accessing DePay APIs.

In order to authenticate towards DePay's APIs, you need to pass your API Key via the `x-api-key` header:

```
x-api-key: Th1406MN7L796p9fM8lHTa79jrtNorXW2duHYZkY
```

### Issue an API Key

If you want to use DePay's APIs, you need to issue your own API key.

Go to **[DePay App](https://app.depay.com)** > **API** > **Issue Api Key**.

You will need to have an active DePay PRO subscription in order to issue and maintain an active API key.

## Access Token

Make sure you have the [Authorization Flow](/docs/apps/authorization) implemented and your app is able to [retrieve and refresh access tokens](/docs/apps/authorization#retrieve-access-token).

## Authorization Header

In order to make requests as an app retrieving other accounts' data you need to pass the `access_token` via the `Authorization` header with a `Bearer` prefix:

```
Authorization: Bearer {access_token}
```
