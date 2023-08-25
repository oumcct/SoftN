import React from 'react';
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import {ASSET_IMAGES} from "../../utils/constants/paths";


const Logo = ({mini, mode, sx}) => {
    return (
        <Div sx={{display: "inline-flex", ...sx}}>
            <Link href={'/'}>
                {
                    !mini ?
                        <img src={ mode === "light" ? `${ASSET_IMAGES}/logo-softn-mini.png` : `${ASSET_IMAGES}/logo-softn-mini.png`} alt="Jumbo React" style={{width:"95px"}}/>
                        :
                        <img src={mode === "light" ? `${ASSET_IMAGES}/logo-short.png` : `${ASSET_IMAGES}/logo-short-white.png`} alt="Jumbo React" />
                }
            </Link>
        </Div>
    );
};

Logo.defaultProps = {
    mode: "light"
};

export default Logo;
