import React, { useState } from 'react';
import Responsive from 'react-responsive';
import Modal from '../modal/Modal';
import book from '../../assets/svg/book3.svg';
import vector from '../../assets/svg/vector.svg';
import flag from '../../assets/svg/flag.svg';
import LibraryModalStyled from './LibraryModalStyled';

const LibraryModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(true);

    const Mobile = props => <Responsive {...props} maxWidth={767} />;
    const Tablet = props => <Responsive {...props} minWidth={768} />;

    const closeModal = () => {
        setIsOpenModal(false);
    };

    return (
        <LibraryModalStyled>
            <Mobile>
                {isOpenModal && (
                    <Modal closeModal={closeModal}>
                        <div className="libraryModal">
                            <ul className="list">
                                <li className="listItem">
                                    Step 1.
                                    <div className="listItemPart1">
                                        <img
                                            src={book}
                                            alt=""
                                            className="listItemImgPart1"
                                        />
                                        <p className="listItemTitlePart1">
                                            Create your own library
                                        </p>
                                    </div>
                                    <div className="listItemPart2">
                                        <img
                                            src={vector}
                                            alt=""
                                            className="listItemImgPart2"
                                        />
                                        <p className="listItemTitlePart2">
                                            Add the books you intend to read to
                                            it.
                                        </p>
                                    </div>
                                </li>
                                <li className="listItem">
                                    Step 2.
                                    <div className="listItemPart1">
                                        <img
                                            src={flag}
                                            alt=""
                                            className="listItemImgPart1"
                                        />
                                        <p className="listItemTitlePart1">
                                            Create your first training
                                        </p>
                                    </div>
                                    <div className="listItemPart2">
                                        <img
                                            src={vector}
                                            alt=""
                                            className="listItemImgPart2"
                                        />
                                        <p className="listItemTitlePart2">
                                            Define a goal, choose a period,
                                            start training.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <button
                                className="listBtn"
                                type="button"
                                onClick={closeModal}
                            >
                                Ok
                            </button>
                        </div>
                    </Modal>
                )}
            </Mobile>
            <Tablet>
                <ul className="list">
                    <li className="listItem">
                        Step 1.
                        <div className="listItemPart1">
                            <img
                                src={book}
                                alt=""
                                className="listItemImgPart1"
                            />
                            <p className="listItemTitlePart1">
                                Create your own library
                            </p>
                        </div>
                        <div className="listItemPart2">
                            <img
                                src={vector}
                                alt=""
                                className="listItemImgPart2"
                            />
                            <p className="listItemTitlePart2">
                                Add the books you intend to read to it.
                            </p>
                        </div>
                    </li>
                    <li className="listItem">
                        Step 2.
                        <div className="listItemPart1">
                            <img
                                src={flag}
                                alt=""
                                className="listItemImgPart1"
                            />
                            <p className="listItemTitlePart1">
                                Create your first training
                            </p>
                        </div>
                        <div className="listItemPart2">
                            <img
                                src={vector}
                                alt=""
                                className="listItemImgPart2"
                            />
                            <p className="listItemTitlePart2">
                                Define a goal, choose a period, start training.
                            </p>
                        </div>
                    </li>
                </ul>
            </Tablet>
        </LibraryModalStyled>
    );
};

export default LibraryModal;
