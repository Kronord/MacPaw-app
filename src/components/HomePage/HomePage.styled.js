import girlImage from "../../Images/girl-and-pet.png";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 0 30px 0 65px;
    justify-content: center;
    align-items: center;
    background-image: url(${girlImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 850px 900px;
    width: 775px;
    height: 900px;
    margin-left: 72px;
`;

export const StyleSpan = styled.span`
    width: 740px;
    height: 840px;
    background-color: #FBE0DC;
    border-radius: 20px;
    z-index: -1;
`;