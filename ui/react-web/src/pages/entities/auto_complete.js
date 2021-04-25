import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const AutoComplete = ({
  placeholder,
  name,
  values,
  onChange,
  options,
  error,
}) => {
  values = values || [];
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOutside = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  options = options.filter(({ label }) => label.includes(search));

  return (
    <div className="text_field_wrapper">
      <InputBox>
        {options.map(({ value, label }) => {
          if (!values.includes(value)) return null;

          return (
            <Tag id={value}>
              <span>{label}</span>
              <span
                onClick={() => {
                  onChange({
                    target: {
                      name,
                      type: 'checkbox',
                      value: values.filter(({ id }) => value !== id),
                    },
                  });
                }}
              >
                <CrossIcon />
              </span>
            </Tag>
          );
        })}
        <GhostInput
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          onFocus={() => {
            if (!open) setTimeout(() => setOpen(true), 200);
          }}
          onClick={() => {
            if (!open) setTimeout(() => setOpen(true), 200);
          }}
        />
        <SuggestionBox open={open}>
          {options.map(({ value, label }) => (
            <div key={value} className="checkbox_wrap agree_check">
              <input
                className="filter-type filled-in"
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                checked={values.includes(value)}
                id={label}
              />
              <label htmlFor={label}>{label}</label>
            </div>
          ))}
        </SuggestionBox>
      </InputBox>
      <div className="error_messg">{error}</div>
    </div>
  );
};

const InputBox = styled.div`
  border: 1px solid #dedede;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const GhostInput = styled.input`
  border: none !important;
  height: 100%;
  outline: none;
  min-width: 150px;
  flex: 1 0 0;
`;

const Tag = styled.span`
  display: inline-flex;
  margin: 2px 3px;
  align-items: center;
  height: 28px;
  border-radius: 18px;
  font: normal normal normal 12px/15px Muli;
  background: #043555;
  padding: 0px 8px 0px 16px;
  color: white;
  overflow: hidden;

  > span {
    :first-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: (100% - 24px);
    }

    :last-child {
      margin-left: 16px;
      cursor: pointer;
    }
  }
`;

const SuggestionBox = styled.div`
  ${({ open }) => css`
    position: absolute;
    border: 1px solid #dedede;
    border-radius: 3px;
    background: white;
    top: 100%;
    left: 0px;
    width: 100%;
    z-index: 1;
    max-height: 177px;
    overflow: auto;
    display: ${open ? undefined : 'none'};

    .checkbox_wrap {
      padding: 10px;

      label {
        color: #999999 !important;
        width: 100%;
      }
    }
  `}
`;

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    transform="rotate(45)"
  >
    <g transform="translate(-467.398 -1185.111) rotate(45)">
      <circle
        fill="transparent"
        cx="7.5"
        cy="7.5"
        r="7.5"
        transform="translate(1176 500)"
      />
      <g transform="translate(-40.965 411.035)">
        <line
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          y2="10"
          transform="translate(1228.036 92.965) rotate(45)"
        />
        <line
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          y1="10"
          transform="translate(1228.036 100.036) rotate(135)"
        />
      </g>
    </g>
  </svg>
);

export default AutoComplete;
