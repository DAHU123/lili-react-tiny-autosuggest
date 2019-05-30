import React from 'react';
import ReactDOM from 'react-dom';
import { message } from 'antd'

import AutoSuggest from './autosuggest';
import 'antd/dist/antd.css'

const suggestions = ['C', 'C++', 'Python', 'Java', 'Javascript', 'PHP'];
const handleSelect = selection => message.info(`You selected ${selection}`);

ReactDOM.render(<AutoSuggest suggestions={suggestions} onSelect={handleSelect}/>, document.getElementById('app'));