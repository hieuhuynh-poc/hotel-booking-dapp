import React, { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3'
import { Select } from 'antd';

const { Option } = Select;

const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");


export const AccountSelector = () => {

  const [ accounts, setAccounts ] = useState<string[]>([])


  useEffect(() => {
    (async () => {
      setAccounts([...(await web3.eth.getAccounts() || [])])
    })()

  })

  const handleChange = (value: string) => {
    console.log(`selected ${ value }`);
  };

  return (
      <Select style={ { width: 500 } } onChange={ handleChange } placeholder="Select Account">
        { accounts.map((acc) => <Option key={ acc } value={ acc }>{ acc }</Option>) }
      </Select>
  )
}
