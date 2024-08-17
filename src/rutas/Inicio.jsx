import { Box, Typography } from '@mui/material';
import { Carrusel } from '../componentes/Carrusel';
import videoInicio from '../assets/videoInicio.mp4';
export const Inicio = () => {
  return (
    <>
      <Box>
        <Box sx={{ maxWidth: 800, margin: '20px auto' }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 800,
              color: '#3f0165',
              fontSize: {
                xs: '20px',
                sm: '23px',
              },
            }}
          >
            Conquistá el mundo con tu brillo y elegancia
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: { sx: '15px', sm: '18px' },
              color: '#3f0165',
            }}
          >
            Mostrá al mundo tu encanto, delicadeza y elegancia con las joyas de
            lujo de MG Joyas. Buscá la pieza ideal y destaca allá donde vayas,
            compartiendo todo tu estilo y sofisticación con el mundo.
          </Typography>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <video
          controls
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            maxWidth: '1100px',
            height: '400px',
            objectFit: 'cover',

            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <source src={videoInicio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box> */}

      <Carrusel />
      <Box sx={{ maxWidth: 800, margin: '20px auto' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 800,
            color: '#3f0165',
            fontSize: {
              xs: '15px',
              sm: '18px',
            },
          }}
        >
          Todos los productos de nuestra joyería de lujo están hechos con
          cuidado y atención al detalle, el enfoque siempre es resaltar el
          brillo más intenso y hermoso de quienes usan estas piezas.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBlock: '20px',
        }}
      >
        <video
          controls
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            maxWidth: '1100px',
            height: '400px',
            objectFit: 'cover',

            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <source src={videoInicio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </>
  );
};
