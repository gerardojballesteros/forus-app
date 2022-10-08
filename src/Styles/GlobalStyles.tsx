import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        /* Colors */
        --primary-color: #333;
        --secondary-color: #ffff;
        --text-color: #333;
        --text-light-color: #847F7F;
        --text-secondary-color: #431C8A; 
        --bg-header: #1E3D56;
        --tag-color: #9ED32E;
        --success-color: #7C9F30;
        --error-color: #FF3629;
        --bg-button: #179281;
        --bg-gray: #F5F5F5;
        --bg-header-bottom: #d3d3d361;
    }

    h1{font-size: 2.4rem}
    h2{font-size: 2.1rem}
    h3{font-size: 1.8rem}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Red Hat Display', sans-serif;
    }

    footer{
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 0;
        left: 0;
        z-index: 4;
        text-align: center;
        padding-left: max(22px,env(safe-area-inset-left));
        padding-right: max(22px,env(safe-area-inset-right));
        padding-top: max(22px,env(safe-area-inset-left));
        padding-bottom: max(22px,env(safe-area-inset-right));
        p{
            color: var(--text-light-color);
        }
    }

`