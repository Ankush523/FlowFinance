import React, { useState } from "react";
import { customHttpProvider } from "./config";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import "./revokeFlow.css";

//where the Superfluid logic takes place
async function revokeFlowPermissions(operator) {
  const sf = await Framework.create({
    chainId: 5,
    provider: customHttpProvider
  });

  //DO NOT USE PRIVATE KEY IN PROD
  //USE A METAMASK PROVIDER OR ENV VARIABLE INSTEAD
  //THIS IS ONLY FOR DEMO PURPOSES
  const signer = sf.createSigner({
    privateKey:
      "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
    provider: customHttpProvider
  });

  const daix = await sf.loadSuperToken("fDAIx");

  console.log(sf.cfaV1);
  try {
    const revokeFlowOperatorOperation = daix.revokeFlowOperatorWithFullControl({
      flowOperator: operator
      // userData?: string
    });

    console.log("Updating your flow permissions...");

    const result = await revokeFlowOperatorOperation.exec(signer);
    console.log(result);

    console.log(
      `Congrats - you've just revoked flow permissions for 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
    Network: Goerli
    Super Token: DAIx
    Operator: ${operator}
    `
    );
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

export const RevokeFlowPermissions = () => {
  const [recipient, setRecipient] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  function RevokeButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

  return (
    <div>
      <h2>Revoke Flow Permissions</h2>
      <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Enter the operator address"
          ></FormControl>
        </FormGroup>

        <RevokeButton
          onClick={() => {
            setIsButtonLoading(true);
            revokeFlowPermissions(recipient);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          Revoke Flow Permissions
        </RevokeButton>
      </Form>

      <div className="description">
        <p>
          Go to the RevokeFlowPermissions.js component and look at the{" "}
          <b>revokeFlowPermissions() </b>
          function to see under the hood
        </p>
      </div>
    </div>
  );
};
