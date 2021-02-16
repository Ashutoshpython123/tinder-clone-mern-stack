import React from 'react'
import './Footer.css';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

import FlashOnIcon from '@material-ui/icons/FlashOn';

function Footer() {
    return (
        <div className="Footer">
            <IconButton className="replay">
                <ReplayIcon />
            </IconButton>
            <IconButton className="close">
                <CloseIcon/>
            </IconButton>
            <IconButton className="star">
                <StarIcon />
            </IconButton>
            <IconButton className="favourite">
                <FavoriteIcon />
            </IconButton>
            <IconButton className="flashon">
                <FlashOnIcon />
            </IconButton>
        </div>
    )
}

export default Footer
