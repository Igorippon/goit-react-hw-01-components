import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li>
            <span >{isOnline ? "Online" : "Ofline"}</span>
            <img src={avatar} alt={name} width="48" />
            <p >{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline:PropTypes.bool,
};