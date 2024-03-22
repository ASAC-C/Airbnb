'use client'
import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import LoginModal from '@/app/components/loginmodal'
export default function ProfileModal({ anchorEl, setAnchorEl }) {
  const isOpen = Boolean(anchorEl)
  const onClose = () => {
    setAnchorEl(null)
  }
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
    onClose() // 모달 열리면 메뉴 닫기
  }
  return (
    <>
      <Menu
        id="profil-modal"
        anchorEl={anchorEl}
        keepMounted
        open={isOpen}
        onClose={onClose}
        sx={{
          '.MuiPaper-root': {
            borderRadius: '16px',
            marginTop: '12px',
            marginRight: '24px',
          },
        }}
      >
        <MenuItem
          sx={{ fontSize: '14px', fontWeight: 'bold', padding: '16px' }}
        >
          <button onClick={handleLoginClick}>로그인</button>
        </MenuItem>

        <MenuItem sx={{ fontSize: '14px', padding: '16px' }}>회원가입</MenuItem>
        <hr />
        <MenuItem sx={{ fontSize: '14px', padding: '16px' }}>
          당신의 공간을 에어비앤비하세요
        </MenuItem>
        <MenuItem sx={{ fontSize: '14px', padding: '16px' }}>
          도움말 센터
        </MenuItem>
      </Menu>
      <LoginModal
        openModal={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}
