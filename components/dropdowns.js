import React from 'react'
import Link from 'next/link'

const CustomToggle = ({children, variant, onClick}, ref) => (
    <Link
        href="/"
        ref={ref}
        className={variant}>
        {children}
    </Link>
);
export default CustomToggle;