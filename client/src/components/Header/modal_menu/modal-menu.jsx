import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import VerticalNav from './vertical-nav';

const ModalMenu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button size='small' danger onClick={showModal}>
                Menü
            </Button>
            <Modal
                title="Menü"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
                width={1000}
            >
                <div className='row bg-light my-3 mx-1'>
                    <div className='col p-4 text-primary-emphasis border-end border-3'>
                        Giriş Yap
                    </div>
                    <div className='col p-4 text-primary-emphasis'>
                        Üye Ol
                    </div>
                </div>
                <div className='px-auto'>
                    <VerticalNav/>
                </div>
                <button type="button" class="btn btn-warning w-100 mt-4 sticky-bottom">
                    Ücretsiz İlan Ver
                </button>
            </Modal>
        </>
    )
}

export default ModalMenu