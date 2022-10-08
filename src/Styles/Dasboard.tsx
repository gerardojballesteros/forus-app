import styled from 'styled-components'

export const DasboardContent = styled.section`
    position: relative;
    width: 100%;
    height: auto;  
`
export const TitleDashboad = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding: 40px 0;
    padding-left: max(22px,env(safe-area-inset-left));
    padding-right: max(22px,env(safe-area-inset-right));
    h3{
        font-weight: 400;
        color: var(--text-color);
    }
`
