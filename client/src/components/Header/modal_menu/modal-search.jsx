import React, { useState } from 'react';
import { Modal } from 'antd';
import Search from 'antd/es/input/Search';

const ModalSearch= () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <i className="bi bi-search" onClick={showModal}></i>
            <Modal
                title="Arama"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={false}
                width={1000}
            >
                <Search placeholder="Ürün veya hizmet ara" style={{ width: 200 }} />
            </Modal>
        </>
    )
}

export default ModalSearch