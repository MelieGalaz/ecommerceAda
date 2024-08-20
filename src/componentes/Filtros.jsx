import { Box, TextField } from '@mui/material';

export const Filtros = ({ setFiltro }) => {
  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <Box sx={{ margin: '20px auto' }}>
      <TextField
        variant="outlined"
        label="Buscar Producto"
        onChange={handleChange}
        sx={{
          '& label.Mui-focused': {
            color: '#66129b',
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffeffeab',
            '& fieldset': {
              borderColor: 'white',
              borderWidth: '3px',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
            color: '#66129b',
          },
        }}
        InputLabelProps={{
          sx: {
            color: '#66129b',
            '&.Mui-focused': {
              color: '#66129b',
            },
          },
        }}
      />
    </Box>
  );
};
