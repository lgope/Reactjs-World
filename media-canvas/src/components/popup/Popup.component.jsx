import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, closeFunc) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log('1');
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunc();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const Popup = ({ onClose, children }) => {
  const wrapperRef = useRef(null);

  // passing ref and onclose function for fire on outside click
  useOutsideAlerter(wrapperRef, onClose);

  return <div ref={wrapperRef}>{children}</div>;
};

export default Popup;
