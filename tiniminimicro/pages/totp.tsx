import React, { useState } from "react";
import { totp } from "otplib";
import { Button, TextField, Typography } from "@material-ui/core";
import styled from "@emotion/styled";

export default function TotpToolsPage() {
  const [secret, setSecret] = useState<string>("");
  const [token, setToken] = useState<string>();
  const [expireSecond, setExpireSecond] = useState<number>(30);
  const [digits, setDigits] = useState<number>(6);

  const handleSubmit = (event) => {
    console.log(event);
    const _generatedToken = totp.generate(secret);
    setToken(_generatedToken);
    event.preventDefault();
  };
  return (
    <Wrapper>
      {token && <Typography variant="h4">{token}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="secret"
          value={secret}
          onChange={(e) => {
            setSecret(e.target.value);
          }}
        />
        <TextField label="expire in (seconds)" type="number" />
        <TextField
          label="digits"
          type="number"
          value={digits}
          onChange={(e) => {
            setDigits(Number.parseInt(e.target.value));
          }}
        />
        <Button type="submit">Generate</Button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
