import React from 'react'
import Modal from './Modal'
import useSearchModel from '../hooks/useLSearchModal'

const SearchModel = () => {
    const searchModal = useSearchModel()
  return (
    <Modal
    isOpen={searchModal.isOpen}
    onClose={searchModal.onClose}
    onSubmit={searchModal.onOpen}
    title='Filters'
    actionLabel='Search'
    />
  )
}

export default SearchModel