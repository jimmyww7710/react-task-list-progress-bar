import styled from 'styled-components';

const StyledGlobal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    font-family: 'Noto Sans', sans-serif;
    max-width: 768px;
    margin: 0 auto;
    .main-title {
        color: #ffffff;
    }
    button {
        font-family: 'Noto Sans', sans-serif;
        border-radius: 5px;
        border-width: 0px;
        background-color: #ffffff;
        font-weight: 500;
        padding: 5px 10px;
        cursor: pointer;
    }

    button.reverse-color {
        background-color: #000000;
        color: #ffffff;
    }
    .row-bottom-10 {
        padding-bottom: 10px
    }

    @media only screen and (max-width: 767px)  {
        .flex-container {
            flex-direction: column;
            &.two-reverse {
                > :first-child {
                    order: 2;
                }

                > :last-child {
                    order: 1;
                }
            }
        }
    }
`;
export default StyledGlobal;
