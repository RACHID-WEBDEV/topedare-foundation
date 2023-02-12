import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Button = ({ className, children, color, onClick, icon }) => {
  return (
    <>

      <button
        onClick={onClick}
        // type="button"
        className={classNames(
          'inline-flex items-center whitespace-nowrap w-fit font-DmSans rounded-lg lg:text-[1.125rem] uppercase tracking-wider font-medium py-[1rem] px-8 text-center transition-all',
          { 'bg-gray-900 hover:bg-gray-700 text-white hover:text-white': color === 'gray' },
          { ' bg-white hover:text-white border border-gray-900 text-gray-900 hover:bg-gray-900 ': color === 'secondary' },
          { 'bg-white border-gray-200 text-black-300 hover:bg-green-100 hover:text-white': color === 'teritary' },

          className
        )}
      >
        {children}
        {icon &&
          <span className="ml-2 -mr-1">
            {icon}
          </span>
        }

      </button>


    </>


  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.node
};

Button.defaultProps = {
  color: 'gray',
  className: null,
  onClick: () => { }
};

export default Button;
