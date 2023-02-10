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
          { 'bg-tdf-blue-50 hover:bg-tdf-blue-400 text-white hover:text-white': color === 'gray' },
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
        {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}

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
