---
sidebar_position: 12
sidebar_label: Verify
---

# Don't Trust, Verify

Living by the motto, "Don't Trust, Verify", DePay's payment protocol empowers everyone to verify payments before executing them.

## Wallets

Wallets can seamlessly incorporate an auto-verification feature for payments made via the DePay payment protocol.

This enhancement aids users in comprehending the transactions they're executing.

Every wallet can integrate a "Payment" screen when users initiate a payment using the DePay payment protocol.

[Learn how wallets can integrate a verified "Payment" screen](/docs/wallets/payment-screen)

## Verification form

The following form allows you to validate DePay payments quickly:

<PaymentDecoder/>

## Verify manually

Even if your wallet doesn't support integrated DePay Payment verification, you can utilize this page to manually validate the payment on your own.

### Verify contract address

The DePay protocol address operates as a trusted and audited smart contract, designed to streamline payment processes.

Upon initializing a payment, your wallet will showcase a transaction overview.

The first step is to ensure that the contract you're interacting with is indeed the DePay payment protocol.

#### On blockchain explorer

Click on the contract address, or copy it in order to open it on a blockchain explorer.

DePay's payment smart contracts are presently labeled on blockchain explorers as `DePay: Router v2`.
If you access the contract address on the blockchain explorer, ensure that the contract carries this exact label.

#### On DePay's deployment page

Alternatively, you can also check that the contract address you are interacting with is listed on DePay's [protocol deployment page](https://depay.com/docs/payments/protocol/deployments/).

### Verify payment details

If your wallet provides you with the `HEX` calldata prepared to call the DePay payment protocol, you can ue the [Verification Form](#verification-form) on this to easily validate the payment.

#### Verify decoded transactions

Some wallets that support transaction decoding will be able to display the payment details in a more human readable way:

```javascript
[
  105000000000000000,   // amount paid in
  24034,                // payment amount paid to payment receiver
  0,                    // fee amount paid to fee receiver
  0,                    // fee amount paid to secondary fee receiver
  0,                    // fee amount paid to protocol
  1748277017920,        // deadline (after which the payment will revery)
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",   // token address of the input token
  "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",   // address of the used exchange (for conversion)
  "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",   // token address of the output token
  "0x08B277154218CCF3380CAE48d630DA13462E3950",   // address of the payment receiver
  "0x0000000000000000000000000000000000000000",   // address of the fee receiver
  "0x0000000000000000000000000000000000000000",   // address of the secondary fee receiver
  1,      // exchange type
  0,      // receiver type
  false,  // permit2
  // following the auto conversion data
  "0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000241c58db4f00000000000000000000000000000000000000000000000001732c47109514d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000104b858183f00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005f50000000000000000000000000000000000000000000000000000000000000002b0d500b1d8e8ef31e21c99d1db9a6444d3adf12700001f43c499c542cef5e3811e1192ce70d8cc03d5c335900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000412210e8a00000000000000000000000000000000000000000000000000000000",
  // following the receiver call data
  "0x0000000000000000000000000000000000000000"
]
```

Those parameters have the following meaning, from the top to bottom:

**#1** is the amount paid. In our example `105000000000000000`.

**#2** specifies the amount that will be disbursed to the payment receiver.

**#3** specifies the amount that will be disbursed to the fee receiver.

**#4** specifies the amount that will be disbursed to the secondary fee receiver.

**#5** specifies the amount that will be disbursed to the protocol (fee).

**#6** defines the timestamp after which the payment will be dropped by the payment protocol.

**#7** represents the address of the token used as input.

**#8** represents the address of the exchange used to perform a conversion as part of the payment. If this is set to `0x0000000000000000000000000000000000000000` no conversion will be performed.

**#9** represents the address of the token used as payout. The payment and fee receivers will receive this token as part of this payment.

**#10** represents the address of the payment receiver.

**#11** represents the address of the fee receiver.

**#12** represents the address of the secondary fee receiver.

**#13** defines the type of how to convert tokens with the exchange.

**#14** defines the type of how to forwarded payments to a smart contract receiver if payment receiver is a smart contract.

**#15** indicates whether the payment utilizes Permit2 (a standard for granting token usage approvals to smart contracts) or not. If set to false, tokens will be transferred based on prior token approvals, which are granted in a distinct, dedicated transaction.

**#16** defines the data used to execute the conversion on the exchange.

**#17** defines the data used to call the payment receiver if the receiver is a smart contract and supposed to be called.
