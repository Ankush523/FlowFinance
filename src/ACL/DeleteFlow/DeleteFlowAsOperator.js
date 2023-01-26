import React, { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Spinner,
  Card
} from "react-bootstrap";
import "./updateFlow.css";
import { ethers } from "ethers";

// let account;

//where the Superfluid logic takes place
async function deleteFlowAsOperator(sender, recipient) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider
  });

  const DAIxContract = await sf.loadSuperToken("fDAIx");
  const DAIx = DAIxContract.address;

  try {
    const deleteFlowOperation = sf.cfaV1.deleteFlowByOperator({
      sender: sender,
      receiver: recipient,
      superToken: DAIx
      // userData?: string
    });

    console.log("Deleting your stream...");

    const result = await deleteFlowOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just deleted your money stream!
    View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
    Network: Goerli
    Super Token: DAIx
    Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Receiver: ${recipient},
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

export const DeleteFlowAsOperator = () => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      // let account = currentAccount;
      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      // setupEventListener()
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      // setupEventListener()
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  function DeleteButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleSenderChange = (e) => {
    setSender(() => ([e.target.name] = e.target.value));
  };

  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <h2>Delete a Flow as an Operator</h2>
      {currentAccount === "" ? (
        <button id="connectWallet" className="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <Card className="connectedWallet">
          {`${currentAccount.substring(0, 4)}...${currentAccount.substring(
            38
          )}`}
        </Card>
      )}
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="sender"
            value={sender}
            onChange={handleSenderChange}
            placeholder="Enter sender address"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Enter recipient address"
          ></FormControl>
        </FormGroup>

        <DeleteButton
          onClick={() => {
            setIsButtonLoading(true);
            deleteFlowAsOperator(sender, recipient);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          Click to Delete Stream
        </DeleteButton>
      </Form>

      <div className="description">
        <p>
          Go to the DeleteFlowAsOperator.js component and look at the{" "}
          <b>deleteFlowAsOperator() </b>
          function to see under the hood. Note: you should use Goerli.
        </p>
      </div>
    </div>
  );
};
