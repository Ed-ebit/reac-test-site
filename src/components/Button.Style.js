import  DefaultTheme  from '../themes/default';
import {Button} from 'antd';

const Button = styled.Button`
padding: 6px 12px;
background: ${(props) => props.DefaultTheme.bgColor};
color: white;
border: 1px solid transparent;
border-radius: 4px;
font-size: 16px;
margin: 2px;
`



