import React from "react";
import Select from "react-select";

export const CustomSelect = ({
    className,
    placeholder,
    field,
    form,
    options,
    isMulti
}) => {
    const onChange = (option) => {
        
        // console.log(options, field, isMulti, 'on Change')
        form.setFieldValue(
            field.name,
            (option).map((item) => item.value)             
        );
    };

    const getValue = () => {
        // console.log(options, field, isMulti, 'las options')
        if (options) {
            return options.find(option => option.value === field.value);                
        } else {
            return ("");
        }
    };

    return (
        <Select
            className={className}
            name={field.name}
            value={getValue()}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
        />
    );
};

export default CustomSelect;
