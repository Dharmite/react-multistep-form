import React from 'react';

interface FormWrapperProps {
    title: string;
    children: React.ReactNode;
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
    return (
        <div className="form-wrapper">
            <h2>{title}</h2>
            <div className="form-content">
                {children}
            </div>
        </div>
    );
};

export default FormWrapper;