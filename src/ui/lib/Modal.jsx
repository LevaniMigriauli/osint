import React, { forwardRef, useImperativeHandle, useState } from 'react'
import Modal from 'react-modal'
import classes from './Modal.module.scss'

Modal.setAppElement('#root')

const ReactModal = forwardRef(
  ({ isOpen, children, handleModalClose }, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(isOpen || false)

    useImperativeHandle(ref, () => ({
      handleOpenModal () {
        setModalIsOpen(true)
      },
      handleCloseModal () {
        setModalIsOpen(false)
      },
      isOpened () {
        return modalIsOpen
      }
    }))

    return (
      <Modal
        ref={ref}
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false)
          handleModalClose()
        }}
        contentLabel="Example Modal"
        className={classes.modalContent}
        style={{
          overlay: {
            backgroundColor: 'rgba(2, 21, 38, 0.34)'
          }
        }}
      >
        {children}
      </Modal>
    )
  }
)

export default ReactModal
