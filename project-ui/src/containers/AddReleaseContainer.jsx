import React from 'react';
import { Input, Button } from '../components';

const AddReleaseContainer = () => (
  <section className='flex justify-between add-task align-center'>
    <div className='input-group flex-1'>
      <Input placeholder='version name' />
    </div>
    <div className='input-group' style={{ width: `10%` }}>
      <Input placeholder='Start date' />
    </div>
    <div className='input-group' style={{ width: `15%` }}>
      <Input placeholder='Release date' />
    </div>
    <div className='input-group' style={{ width: `20%` }}>
      <Input placeholder='Description' />
    </div>
    <div className='input-group' style={{ width: `5%` }}>
      <Button label='Add' type='primary' extraClass='rt-margin' />
    </div>
  </section>
);

export default AddReleaseContainer;
