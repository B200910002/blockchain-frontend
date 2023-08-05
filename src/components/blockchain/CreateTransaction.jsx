import React, { useContext, useState } from "react";
import { Fonts } from "../../constants/styles";
import {
  FormGroup,
  Form,
  Button,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { BlockchainContext } from "../../context/BlockchainContext";
import { UserContext } from "../../context/UserContext";

export default function CreateTransaction() {
  const { cookie } = useContext(UserContext);
  const { createTransaction } = useContext(BlockchainContext);
  const [fromAddress] = useState(cookie.username);
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div style={styles.container}>
      <p style={Fonts.largeGray}>Create transaction</p>
      <Form>
        <FormGroup>
          <FormLabel style={Fonts.smallGray}>From address</FormLabel>
          <FormControl
            type="text"
            name="fromAddress"
            disabled
            placeholder="from address"
            defaultValue={fromAddress}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel style={Fonts.smallGray}>To address</FormLabel>
          <FormControl
            type="text"
            name="toAddress"
            placeholder="to address"
            onChange={(event) => {
              setToAddress(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel style={Fonts.smallGray}>Amount</FormLabel>
          <FormControl
            type="number"
            name="amount"
            placeholder="amount"
            onChange={(event) => {
              setAmount(Number(event.target.value));
            }}
          />
        </FormGroup>

        <FormGroup style={styles.button}>
          <Button
            // type="submit"
            onClick={() => {
              createTransaction({ fromAddress, toAddress, amount });
            }}
          >
            Sign & create transaction
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

const styles = {
  container: {},
  button: {
    marginTop: "20px",
  },
};
