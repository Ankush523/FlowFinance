import React from 'react';
import { useContract } from 'wagmi';
import FlowABI from '../SmartContracts/ABIs/FlowABI.json';
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xA42798A4D33Aaec7b5B48D63C630C16fc07700Fc',
        contractInterface: FlowABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;