import React, { Component } from 'react';
import AutoResizeInput from '../AutoResizeInput';

export default function BeforeOptionsWrapper({
  searchEnabled,
  onChange,
  beforeOptionsComponent,
  searchPlaceholder,
  searchInputAutoFocus,
  ...otherProps
}) {
  let BeforeOptionsComponent = beforeOptionsComponent;
  return (
    <div>
      {searchEnabled && (
        <div className="PowerSelect__SearchInputContainer">
          <AutoResizeInput
            className="PowerSelect__SearchInput"
            value={otherProps.select.searchTerm || ''}
            placeholder={searchPlaceholder}
            autoFocus={searchInputAutoFocus}
            onChange={onChange}
          />
        </div>
      )}
      {beforeOptionsComponent && <BeforeOptionsComponent {...otherProps} />}
    </div>
  );
}
