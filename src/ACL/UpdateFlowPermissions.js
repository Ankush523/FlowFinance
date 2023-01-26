import React, { useState } from "react";
import { customHttpProvider } from "./config";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import "./createFlow.css";
import { ethers } from "ethers";

//where the Superfluid logic takes place
async function updateFlowPermissions(
  operator,
  flowRateAllowance,
  permissionType
) {
  const sf = await Framework.create({
    chainId: 5,
    provider: customHttpProvider
  });

  //NOTE - DO NOT DO THIS IN PROD
  //THIS IS FOR DEMO PURPOSES ONLY
  //USE A METAMASK PROVIDER OR ENV VARIABLE INSTEAD
  const signer = sf.createSigner({
    privateKey:
      "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
    provider: customHttpProvider
  });

  const daix = await sf.loadSuperToken("fDAIx");

  console.log(sf.cfaV1);
  try {
    const updateFlowOperatorOperation = daix.updateFlowOperatorPermissions({
      flowOperator: operator,
      permissions: permissionType,
      flowRateAllowance: flowRateAllowance
      // userData?: string
    });

    console.log("Updating your flow permissions...");

    const result = await updateFlowOperatorOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just updated flow permissions for 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Network: Goerli
    Super Token: DAIx
    Operator: ${operator}
    Permission Type: ${permissionType},
    Flow Rate Allowance: ${flowRateAllowance}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

export const UpdateFlowPermissions = () => {
  const [recipient, setRecipient] = useState("");
  const [permissionLevel, setPermissionLevel] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [flowRate, setFlowRate] = useState("");
  const [flowRateDisplay, setFlowRateDisplay] = useState("");

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  function CreateButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

  const handlePermissionLevelChange = (e) => {
    setPermissionLevel(() => ([e.target.name] = e.target.value));
  };

  const handleFlowRateChange = (e) => {
    setFlowRate(() => ([e.target.name] = e.target.value));
    // if (typeof Number(flowRate) === "number") {
    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    setFlowRateDisplay(newFlowRateDisplay.toString());
    // setFlowRateDisplay(() => calculateFlowRate(e.target.value));
    // }
  };

  return (
    <div>
      <h2>Update Flow Permissions</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Enter the operator address"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            name="permissionLevel"
            value={permissionLevel}
            onChange={handlePermissionLevelChange}
            placeholder="Enter the permission type (1-7)"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            name="flowRate"
            value={flowRate}
            onChange={handleFlowRateChange}
            placeholder="Enter a flowRateAllowance in wei/second"
          ></FormControl>
        </FormGroup>
        <CreateButton
          onClick={() => {
            setIsButtonLoading(true);
            updateFlowPermissions(recipient, flowRate, permissionLevel);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          Update Flow Permissions
        </CreateButton>
      </Form>

      <div className="description">
        <p>
          Go to the UpdateFlowPermissions.js component and look at the{" "}
          <b>updateFlowPermissions() </b>
          function to see under the hood
        </p>
        <div className="calculation">
          <p>Your flow rate allowance will be equal to:</p>
          <p>
            <b>${flowRateDisplay !== " " ? flowRateDisplay : 0}</b> DAIx/month
          </p>
        </div>
      </div>
    </div>
  );
};
