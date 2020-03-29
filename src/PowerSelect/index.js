import React, { Component } from 'react';
import Select from '../Select';
import BeforeOptionsWrapper from './BeforeOptionsWrapper';

export default class PowerSelect extends Component {
  handleSearchInputChange = event => {
    // hackish
    this.select.handleSearchInputChange(event);
  };

  render() {
    let {
      searchEnabled,
      searchPlaceholder,
      beforeOptionsComponent,
      searchInputAutoFocus,
      ...rest
    } = this.props;
    return (
      <Select
        ref={select => (this.select = select)}
        beforeOptionsComponent={
          <BeforeOptionsWrapper
            searchEnabled={searchEnabled}
            searchInputAutoFocus={searchInputAutoFocus}
            searchPlaceholder={searchPlaceholder}
            beforeOptionsComponent={beforeOptionsComponent}
            onChange={this.handleSearchInputChange}
          />
        }
        {...rest}
      />
    );
  }
}

PowerSelect.displayName = 'PowerSelect';
PowerSelect.defaultProps = {
  searchEnabled: true,
  searchInputAutoFocus: true,
};
