import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="Header">
            <IconButton>
            <PersonIcon className="PersonIcon" />
            </IconButton>
            <img
            className="logo"
                src="https://image.shutterstock.com/image-vector/flame-icon-graphic-template-vector-260nw-733799875.jpg"
                alt=""
            />
            <QuestionAnswerIcon />
        </div>
    )
}

export default Header
