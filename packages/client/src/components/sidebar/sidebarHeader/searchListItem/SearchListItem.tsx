import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type SearchListItem = {
  onClick: () => Promise<void>;
  id: string;
  profileAvatar: string;
  username: string;
  className?: string;
};

const SearchListItem = (props: SearchListItem) => {
  const { onClick, id, username, profileAvatar, className } = props;

  return (
    <div className={`search_item ${className ? className : ''}`} key={id} onClick={onClick}>
      <div className="search_item_image">
        {profileAvatar ? <img src={profileAvatar} /> : <AccountCircleIcon />}
      </div>
      <div className="search_item_info">
        <span className="username">{username}</span>
      </div>
    </div>
  );
};

export default SearchListItem;
