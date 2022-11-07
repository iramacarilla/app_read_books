import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import back from '../../assets/svg/back.svg';
import pointer from './icons/pointer.png';

const AuthModal = ({ setOpenModal }) => {
    const closeModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <Modal className="authModal">
                <div className="signupDiv">
                    <button
                        type="button"
                        className="backBtn"
                        onClick={closeModal}
                    >
                        <Link to="/">
                            <img
                                src={back}
                                alt=""
                                width="24px"
                                height="11.62px"
                            />
                        </Link>
                    </button>
                    <h1 className="mainTitleSignUp">Books Reading</h1>
                    <h2 className="titleSignUp">Help you</h2>
                    <ul className="authFormList">
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Formulate your goal faster and start reading
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Proportionately distribute the load for each day
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Track personal success
                            </p>
                        </li>
                    </ul>
                    <h2 className="titleSignUp">You can also</h2>
                    <ul className="authFormList">
                        <li className="authFormText ">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Form a personal opinion independently of others
                            </p>
                        </li>
                        <li className="authFormText">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Improve your professional qualities based on new
                                knowledge
                            </p>
                        </li>
                        <li className="authFormText last">
                            <img className="pointer" src={pointer} alt="" />
                            <p className="instraction">
                                Become an interesting interlocutor
                            </p>
                        </li>
                    </ul>
                    <div className="sign">
                        <button className="buttonSign up">
                            <Link to="/signup">Sign Up</Link>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AuthModal;
