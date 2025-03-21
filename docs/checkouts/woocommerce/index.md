---
sidebar_position: 2
sidebar_label: WooCommerce
redirect_from:
  - /payments/plugins/woocommerce
---

# WooCommerce Web3 Crypto Checkout

Sell and get paid seamlessly with crypto and digital wallets.

![WooCommerce Web3 Crypto Checkout](/img/checkouts/woocommerce-depay-checkout.jpg)

[<FontAwesomeIcon icon="fa-brands fa-youtube" /> Watch the step-by-step video guide](https://depay.com/how-to/accept-web3-cryptocurrency-payments-on-woocommerce-4tbR4B1bdmipZ5a2N1e8HJ)

## Example

http://web3woocommerce.xyz/

## Step-by-step

### Installation

First, download the latest plugin zip: [Download Here](https://github.com/DePayFi/web3-woocommerce-depay-payments/releases/latest/download/depay-woocommerce-payments.zip)

Within your Wordpress admin section navigate to "Plugins".

Then click "Add new".

Then click "Upload Plugin".

Now click "choose file" and upload the plugin zip you downloaded earlier.

Make sure you click "Activate" after the installation has been completed.

### Connect Wallet

Navigate to the "DePay" section in your Wordpress admin.

Click the "Connect Wallet" button or enter your wallet address manually.

### Select Tokens

Now click "Add Token" and add the tokens on the blockchains that you accept as means of payment.

Please make sure to save your settings. Click "Save Settings".

Your customers can now select "DePay" as payment option during checkout.

### Change Checkout

You can alter the presentation of the payment method during the checkout process by modifying the payment method name that is displayed or by adding a descriptive explanation of the payment method that will appear when a customer selects it.

### Denomination

You can also list your WooCommerce items in a cryptocurrency token.

Prices for conversion are obtained from integrated [decentralized exchanges](/docs/payments/supported/exchanges).

## FAQ

### Why are some tokens not supported for conversion?

DePay only supports conversion for tokens that are fullfilling the requirements:

[Learn more about what it takes for a token to be convertible.](/docs/payments/supported/tokens)

This means fiat currencies can't be converted to an unsupported token and customers will not be able to pay during checkout.

Customers could still use this token to perform payments if you denominate your items in that token (and not fiat).

### Why should I select as few tokens per chain as possible?

As DePay converts automatically it's not required to select a lot of tokens. 

Focus on selecting the tokens you want to receive and dont worry about the tokens customers can use (as DePay takes care of the auto-conversion).

The more tokens you select, the more calculations need to be peformed during checkout which can slow down the checkout experience.

A configuration with an excessive number of tokens can result in timeouts, making it impossible to complete checkout using DePay.

