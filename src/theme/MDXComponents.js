import Blockchains from '@depay/web3-blockchains'
import BrowserOnly from '@docusaurus/BrowserOnly'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import MDXComponents from '@theme-original/MDXComponents'
import React, { useState, useEffect } from 'react'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import Token from '@depay/web3-tokens'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCoins,
    faWallet,
    faCube,
    faMoneyBillTransfer,
    faArrowRightLong,
    faRotate,
    faWandMagicSparkles,
    faFlag,
    faCompass,
    faSquareCheck,
    faRobot,
    faKey,
    faRoute,
    faSatelliteDish,
  } from '@fortawesome/free-solid-svg-icons'

[
  faYoutube,
  faCoins,
  faWallet,
  faCube,
  faMoneyBillTransfer,
  faArrowRightLong,
  faRotate,
  faWandMagicSparkles,
  faFlag,
  faCompass,
  faSquareCheck,
  faRobot,
  faKey,
  faRoute,
  faSatelliteDish,
].forEach((icon)=>library.add(icon))

let DePayButtons
if (ExecutionEnvironment.canUseDOM) {
  DePayButtons = require('@depay/buttons').default;
}

function DePayButton(props){

  return(
    <BrowserOnly>
      {() =>
        <DePayButtons.DePayButton
          label={ props.label?.length ? props.label : 'Pay' }
          widget={ props.widget?.length ? props.widget : 'Payment' }
          configuration={ props.configuration }
          css={ props.css }
        />
      }
    </BrowserOnly>
  )
}

let DePayWidgets
if (ExecutionEnvironment.canUseDOM) {
  DePayWidgets = require('@depay/widgets').default;
}

function DePayWidgetTest(props){
  return(
    <BrowserOnly>
      {() =>
        <div className={props.className}>
          <button
            type='button'
            className="btn btn-link fw-bold"
            onClick={(event)=>{
              event.preventDefault()
              DePayWidgets.Payment(props.configuration)
            }}
          >{ props.label || "Click to test" }</button>
        </div>
      }
    </BrowserOnly>
  )
}

let decodePayment, PROTOCOL_ADDRESSES
if (ExecutionEnvironment.canUseDOM) {
  decodePayment = require('@depay/verify-payment').decodePayment;
  PROTOCOL_ADDRESSES = require('@depay/verify-payment').PROTOCOL_ADDRESSES;
}

function PaymentDecoder() {

  if (!ExecutionEnvironment.canUseDOM) { return null }

  const [ address, setAddress ] = useState('')
  const [ blockchain, setBlockchain ] = useState('ethereum')
  const [ callData, setCallData ] = useState('')
  const [ decodedPayment, setDecodedPayment ] = useState(null)
  const [ tokenSymbol, setTokenSymbol ] = useState()
  const [ tokenName, setTokenName ] = useState()
  const [ readableAmount, setReadableAmount ] = useState()

  useEffect(()=>{
    setTokenSymbol()
    setTokenName()
    setReadableAmount()
    if(address && callData) {
      const _decodedPayment = decodePayment({ blockchain, address, transaction: callData });
      if(_decodedPayment) {
        setDecodedPayment({..._decodedPayment, blockchain })
        let token = new Token({
          blockchain,
          address: _decodedPayment.token
        })
        Promise.all([
          token.readable(_decodedPayment.amount),
          token.name(),
          token.symbol(),
        ]).then(([
          amount,
          name,
          symbol,
        ])=>{
          setReadableAmount(amount)
          setTokenSymbol(symbol)
          setTokenName(name)
        })
      } else {
        setDecodedPayment(false)
      }
    } else {
      setDecodedPayment(null)
    }

  }, [address, callData])

  return(
    <div className="card p-4">
      <div className="mb-3">
        <label htmlFor="contractAddress" className="form-label">Blockchain</label>
        <div>
          <select value={ blockchain } onChange={(event)=>setBlockchain(event.target.value)}>
            {
              ['ethereum','bsc','polygon','arbitrum','avalanche','gnosis','optimism','base'].map((blockchainName)=>{
                let blockchain = Blockchains[blockchainName]
                return(
                  <option key={blockchain.name} value={blockchain.name}>{ blockchain.label }</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="contractAddress" className="form-label">Contract address</label>
        <input value={address} onChange={(event)=>setAddress(event.target.value)} type="email" className="form-control" id="contractAddress" aria-describedby="contractAddressHelp"/>
        <div id="contractAddressHelp" className="form-text">Enter the address of the contract you are interacting with</div>
      </div>
      <div className="mb-3 pt-2">
        <label htmlFor="callData" className="form-label">Call data</label>
        <textarea
          value={callData} onChange={(event)=>setCallData(event.target.value)}
          className="form-control" id="callData"
          rows={4}
          style={{ resize: 'none' }}
        />
        <div id="contractAddressHelp" className="form-text">Paste/enter the call data to be executed</div>
      </div>
      <pre className="p-3 bg-dark text-white card mt-2 mb-0">
        { decodedPayment === null &&
          <>Please enter contract address and call data.</>
        }
        { decodedPayment === false &&
          <strong>Invalid calldata or contract address!</strong>
        }
        { decodedPayment &&
          <strong>
            Payment<br/>
            Amount: { readableAmount ? readableAmount : decodedPayment.amount.toString() }<br/>
            Token: { (tokenName && tokenSymbol) ? <a target="_blank" href={ Blockchains[decodedPayment.blockchain].explorerUrlFor({ token: decodedPayment.token.toString() }) } rel="noopener noreferrer">{tokenSymbol} ({tokenName})</a> : decodedPayment.token.toString() }<br/>
            Receiver: <a target="_blank" href={ Blockchains[decodedPayment.blockchain].explorerUrlFor({ address: decodedPayment.receiver.toString() }) } rel="noopener noreferrer">{ decodedPayment.receiver.toString() }</a><br/>
          </strong>
        }
      </pre>
    </div>
  )
}

export default {
  ...MDXComponents,
  DePayButton,
  DePayWidgetTest,
  FontAwesomeIcon,
  Tabs,
  TabItem,
  PaymentDecoder,
}
