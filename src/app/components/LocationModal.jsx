import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import world from '/public/home/world.jpg'
import Europe from '/public/home/Europe.png'
import japan from '/public/home/japan.png'
import SoutheastAsia from '/public/home/SoutheastAsia.png'
import Thailand from '/public/home/Thailand.png'
import Australia from '/public/home/Australia.png'

export default function LocationModal({ anchorEl, setAnchorEl }) {
  const isOpen = Boolean(anchorEl)
  const onClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      id="location-modal"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '20px',
          width: '600px',
        },
      }}
    >
      <Typography
        sx={{ padding: '20px', fontSize: '20px', fontWeight: 'bold' }}
      >
        지역으로 검색하기
      </Typography>
      <Grid container spacing={4} sx={{ padding: '20px' }}>
        <Grid item xs={4}>
          <Image
            src={world}
            alt="Europe"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            유연한 검색
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={Europe}
            alt="World"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            유럽
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={japan}
            alt="World"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            일본
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={SoutheastAsia}
            alt="World"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            동남아시아
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={Thailand}
            alt="World"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            태국
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Image
            src={Australia}
            alt="World"
            width="100%"
            height="100%"
            layout="responsive"
          />
          <Typography sx={{ paddingTop: '8px', fontSize: '18px' }}>
            호주
          </Typography>
        </Grid>
      </Grid>
    </Menu>
  )
}
