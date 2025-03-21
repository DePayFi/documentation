---
sidebar_position: 3
sidebar_label: World App
---

# World App

List Your Store as a MiniApp on World App

![World App Checkout](/img/checkouts/worldapp-depay-checkout.jpg)

## Example

https://world.org/ecosystem/app_e40049a2b0b344c63754a954b84308df

## Before you start

Make sure you have an online shop and that DePay is installed or integrated into it—whether you're using Shopify, WooCommerce, or any other platform supported by DePay Checkout or integration:

- [Setup DePay for Shopify](/docs/checkouts/shopify)
- [Setup DePay for WooCommerce](/docs/checkouts/woocommerce)
- [Integrate DePay Payments](/docs/payments/integrate)
- [Use DePay Payment Links](/docs/payments/integrate/link)

### Accept tokens on World Chain

To get your shop listed as a MiniApp on World App, make sure you accept tokens on World Chain.

Select at least one World Chain token in your DePay payment configuration:

![Select Token](/img/checkouts/worldapp/select-token.jpg)

:::warning
If you don’t add at least one World Chain token as an accepted payment method in you DePay configuration, payments in your Shop on World App won’t work.
:::

## Step-by-step

### Create a World Account

Visit https://developer.worldcoin.org and click "Create an Account":

![Create World Account](/img/checkouts/worldapp/create-account.jpg)

Register either using your email or your [World App](https://worldcoin.org/world-app?download):

![Register World Account](/img/checkouts/worldapp/register.jpg)

### Name your Account

Name your account—use your shop or brand name, for example:

![Name Account](/img/checkouts/worldapp/name-account.jpg)

### Create an App

Now create an app by clicking "Start":

![Create App](/img/checkouts/worldapp/create-app.jpg)

Now enter the App details. Leave "Mini App" and "Cloud" selected.

Enter your shop or brand name as "App Name".

Enter your store url as "App URL".

:::info
The App URL should be the homepage of your store.
:::

Select "Shopping" as category.

![App Details](/img/checkouts/worldapp/app-details.jpg)

### Icon/Logo

Now upload your shop or brand logo as app icon:

![Upload App Icon](/img/checkouts/worldapp/upload-app-icon.jpg)

### Listing Details

Now navigate to "App Store" and enter the required listing information:

![Listing Details](/img/checkouts/worldapp/listing-details.jpg)

Under "Support", choose either "Email" or a "Link" to your support page or form, and enter the corresponding details.

### Support Details

Enter your store homepage url again as "Official Website":

![Support Details](/img/checkouts/worldapp/support-details.jpg)

### Support Countries

Select all supported countries.

:::info
Only select the countries you actually ship to.
:::

![Set Supported Countries](/img/checkouts/worldapp/select-countries.jpg)

### Languages and Description

Set your supported languages, or keep the default (English). Then enter a "Short Name," "App Tagline," and an "Overview."

For example:

![Set Langauges and Description](/img/checkouts/worldapp/languages-and-description.jpg)

Make sure you finish this step by clicking "**Save Changes**"!

### Additional Domains

Now navigate to "Advanced":

![Advanced](/img/checkouts/worldapp/advanced.jpg)

Then set "Additional Domains" to: `https://integrate.depay.com,https://checkout.depay.com`

### Permitted Tokens

Now configure the tokens that you allow customers to use.

We recommend to at least allow World Coin and USDC and set "Permit2 Tokens" to `0x2cFc85d8E48F8EAB294be644d9E25C3030863003,0x79A02482A880bCE3F13e09Da970dC34db4CD24d1`

For all other token addresses, visit: https://worldscan.org/tokens

![Permitted Tokens](/img/checkouts/worldapp/permitted-tokens.jpg)

### Contract Entrypoints

Set DePay's smart contracts as entrypoints: `0xC9850b32475f4fdE5c972EA6f967982a3c435D10,0x886eb82a7e5E7310F66A0E83748662A17E391eb0`:

![Contract Entrypoints](/img/checkouts/worldapp/contract-entrypoints.jpg)

Make sure you finish this step by clicking "**Save Changes**"!

### Submit for Review

After clicking "Save Changes" scroll up and click "Submit for Review":

![Click Submit for Review](/img/checkouts/worldapp/click-submit-for-review.jpg)

Now check "Allow App Store Listing" and enter "Changelog":

![Submit for Review](/img/checkouts/worldapp/submit-for-review.jpg)

Finally click "Submit app" to submit it.

:::success Succesfully submitted
Your shop has been successfully submitted as a World App MiniApp.
:::

