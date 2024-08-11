import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Entered Name:', name);
    // ここで名前を使って次の処理を行います
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="名前を入力"
        variant="outlined"
        value={name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
        style={{ marginTop: '10px' }}
      >
        送信
      </Button>
    </div>
  );
};

export default NameInput;