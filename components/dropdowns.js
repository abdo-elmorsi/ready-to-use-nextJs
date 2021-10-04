import React from 'react'
import Link from 'next/link'

const CustomToggle = React.forwardRef(({ children,variant, onClick }, ref) => (
    <Link
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={variant}
    >
      {children}

    </Link>
));
  export default CustomToggle;