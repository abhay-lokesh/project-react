import React from 'react';
import { Input, Button } from '../components';

const AddReleaseContainer = () => (
  <div className='flex'>
    <Input placeholder='version name' />
    <Input placeholder='Start date' />
    <Input placeholder='Release date' />
    <Input placeholder='Description' />
    <Button label='Add' />
  </div>
);

export default AddReleaseContainer;
