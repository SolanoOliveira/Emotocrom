import * as React from 'react';
import Input from '@mui/joy/Input';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Load from '../imagens/Load.gif'; // Certifique-se de que o caminho está correto

export default function InputSizes() {
  const [inputValue, setInputValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [sentimentResult, setSentimentResult] = React.useState(
    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif" alt="Neutral" width="100" height="100" />
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const text = encodeURIComponent(inputValue);
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/sentiment?text=${text}`, {
        method: 'GET',
        headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
        contentType: 'application/json',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      
      const result = await response.json();
      const sentiment = result.sentiment.toUpperCase();

      switch (sentiment) {
        case 'WEAK_POSITIVE':
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="Weak Positive" width="100" height="100" />);
          break;
        case 'POSITIVE':
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif" alt="Positive" width="100" height="100" />);
          break;
        case 'WEAK_NEGATIVE':
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f97a/512.gif" alt="Weak Negative" width="100" height="100" />);
          break;
        case 'NEGATIVE':
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif" alt="Negative" width="100" height="100" />);
          break;
        case 'NEUTRAL':
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif" alt="Neutral" width="100" height="100" />);
          break;
        default:
          setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2753/512.gif" alt="Unknown" width="100" height="100" />);
      }
    } catch (error) {
      console.error('Error:', error);
      setSentimentResult(<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2753/512.gif" alt="Error" width="100" height="100" />);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack spacing={2} sx={{ width: 'auto', alignItems: 'center' }}>
        {loading ? (
          <img src={Load} alt="Loading..." width="100" height="100" /> // Usa o GIF de carregamento importado
        ) : (
          sentimentResult
        )}
        <Input
          placeholder="Type in here…"
          variant="outlined"
          color="primary"
          sx={{ width: '50vh' }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button sx={{ width: '15vh' }} onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Box>
  );
}
