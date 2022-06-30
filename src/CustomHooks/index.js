import React from "react";

function useLocalStorage(elementName, initialValue){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [element, setElement] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageElement = localStorage.getItem(elementName);

        let parsedElement = initialValue;

        if (!localStorageElement) {
          localStorage.setItem(elementName, JSON.stringify(initialValue));
        } else {
          parsedElement = JSON.parse(localStorageElement)
        }

        setElement(parsedElement)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  });

  const saveElement = (newElement) => {
    try {
      setElement(newElement);
      localStorage.setItem(elementName, JSON.stringify(newElement))
    } catch (error) {
      setError(error)
    }
  }

  return{
    element,
    saveElement,
    loading,
    error
  };
}

export { useLocalStorage };