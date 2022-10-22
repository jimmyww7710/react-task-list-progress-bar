import styled from 'styled-components';

const StyledTask = styled.div`
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #000000;
    margin-top: 10px;
    background-color: #FECD45;
    font-size: 15px;
    input {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 15px;
    }
    .form-input-area {
        input {
            margin-left: 10px;
            padding-left: 5px;
        }
    }
    .flex-container {
        display: flex;
        justify-content: space-between;
    }
    .display-area {
        flex-grow: 0.9;
        text-align: right;
        .progress-bar {
            margin-bottom: 10px;
            background-color: grey;
            > .current-progress-percentage 
            {
                height: 100%;
                width: 100%;
                background-color: #2568FB;
                text-align: right;
                > span {
                    display: inline-block;
                    padding: 10px;
                    color: #ffffff;
                }
            }    
        }
    }

    textarea {
        width: 100%;
    }
    
`;

export default StyledTask;
