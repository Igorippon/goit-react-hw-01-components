import styled from 'styled-components'

export const Item = styled.li`
   display: flex;
   padding: 10px;
   gap: 20px;
   align-items: center;
   justify-content: space-evenly;
   margin-top:30px;
   box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.133), 0px 1px 6px rgba(37, 38, 54, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.174);
   border-radius: 6px 6px 6px 6px;
 `

export const Span = styled.span`
 display: inline-block;
 width: 20px;
 height: 20px ;
 background-color:  ${props => {
    switch (props.isOnline) {
        case true:
            return 'rgba(40, 136, 67, 0.741)';
        case false:
            return 'rgba(208, 23, 66, 0.8)';
        default:
            return null;
    }
 }
};  
 border-radius: 50%;
 color: rgba(40, 136, 67, 0.741)

`