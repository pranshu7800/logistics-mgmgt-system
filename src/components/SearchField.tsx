import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import { shipmentActions } from '../redux/actions';


export default function SearchField() {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch<any>(shipmentActions.filterShipments(event.target.value));
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid rgba(0, 0, 0, 0.12)' }}
      elevation={0}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Shipments"
        inputProps={{ 'aria-label': 'search shipments' }}
        onChange={handleChange}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
