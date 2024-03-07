import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function ProfileModal({ anchorEl, setAnchorEl }) {
  const isOpen = Boolean(anchorEl)
  const onClose = () => {
    setAnchorEl(null)
  }

  return (
    <Menu
      id="profil-modal"
      anchorEl={anchorEl}
      keepMounted
      open={isOpen}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '16px',
        },
      }}
    >
      <MenuItem sx={{ fontSize: '20px', fontWeight: 'bold', padding: '16px' }}>
        로그인
      </MenuItem>
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>회원가입</MenuItem>
      <hr />
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>
        당신의 공간을 에어비앤비하세요
      </MenuItem>
      <MenuItem sx={{ fontSize: '20px', padding: '16px' }}>
        도움말 센터
      </MenuItem>
    </Menu>
    // {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}
  )
}
