import styled from 'styled-components';


export const Item = styled.li`
   display: flex;
   padding: 20px;
   gap: 30px;
   align-items: center;
   margin-top:30px;
   box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.133), 0px 1px 6px rgba(37, 38, 54, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.174);
   border-radius: 6px 6px 6px 6px;
 `;

const getBackgroundColor = props => {
    if (props.$isOnline) {
        return 'rgba(40, 136, 67, 0.741)'
    }
    return 'rgba(208, 23, 66, 0.8)';
};

export const Span = styled.span`
 display: inline-block;
 width: 20px;
 height: 20px ;
 background-color:  ${getBackgroundColor
    };
  border-radius: 50%;
`;

export const Name = styled.p`
font-weight: 500;
    font-size: 36px;
    line-height: 1.11;
`;