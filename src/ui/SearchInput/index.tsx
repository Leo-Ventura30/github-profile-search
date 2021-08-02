import React from 'react'
import styled from 'styled-components'
import { InputBase, Paper, IconButton } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';

const InputWrapper = styled(Paper)`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0px 8px 16px;
  display: flex;
  align-items: center;
`

interface SearchInputProps {
    onSearch(): void
    onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> 
    value: string
}

export const SearchInput = ({ onSearch, onChange, value }: SearchInputProps) => (
    <InputWrapper>
    <InputBase fullWidth placeholder="Deve ser o nome do usuário" onChange={onChange} value={value} />

    <IconButton aria-label="procurar" onClick={onSearch}>
        <SearchIcon />
    </IconButton>
    </InputWrapper>
)

