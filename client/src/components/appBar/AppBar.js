import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import mainRoutes from '../../routes/routes';
import authOperations from '../../redux/operations/authOperation';
import authSelectors from '../../redux/selectors/authSelector';
import Modal from '../modal/Modal';
import AppBarStyled from './AppBarStyled';

const AppBar = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector(authSelectors.isAuthSelect);
    const name = useSelector(authSelectors.getUserName);

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const logOut = () => {
        dispatch(authOperations.logOutOperation());

        setShowModal(false);
    };

    return (
        <AppBarStyled className="appBarStyled">
            <div className={isAuth ? 'container' : 'secondContainer'}>
                <nav className="navigation">
                    {isAuth ? (
                        <ul className="navlist">
                            <li className="logo link">
                                <NavLink to="/" className="logo__descr link">
                                    BR
                                </NavLink>
                            </li>

                            <li className="titleNameWrap">
                                <span className="titleNameWrap__icon">
                                    {name.substr(0, 1)}
                                </span>

                                <p className="titleNameWrap__name">{name}</p>
                            </li>

                            <li className="navListItem">
                                <ul className="rightNav">
                                    {mainRoutes.map(
                                        ({ isPrivate, path, icon, exact }) =>
                                            isPrivate && (
                                                <li key={path}>
                                                    <NavLink
                                                        to={path}
                                                        exact={exact}
                                                        className="navLink"
                                                    >
                                                        {icon}
                                                    </NavLink>
                                                </li>
                                            ),
                                    )}
                                </ul>
                            </li>

                            <li className="link link-btn">
                                <button
                                    className="exit"
                                    type="button"
                                    onClick={handleClick}
                                >
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navlist start">
                            <li className="logo link ">
                                <NavLink to="/" className="logo__descr link">
                                    BR
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>

            {showModal && (
                <Modal onToggleModal={closeModal}>
                    <div className="exit-modal">
                        <p>If you sign out, unsaved data will be lost</p>
                        <div className="btn-wrapper">
                            <button
                                type="button"
                                className="cancel"
                                onClick={closeModal}
                            >
                                Reject
                            </button>
                            <button
                                type="button"
                                className="exitBtn"
                                onClick={logOut}
                            >
                                Sing out
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </AppBarStyled>
    );
};

export default AppBar;
