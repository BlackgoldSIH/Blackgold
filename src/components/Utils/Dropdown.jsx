import React, { useState } from 'react';
import './utils.css'; // You can create a CSS file for styling or use inline styles

const Dropdown = ({setComponent}) => {
    const [selectedOption, setSelectedOption] = useState('Required Forms');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Submitted Reports', 'Required Forms', 'Document Repository'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setComponent(option)
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    return (
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
            {selectedOption}
            <span className="dropdown_arrow">▼</span>
            {isOpen && (
                <ul className="dropdown_menu">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
