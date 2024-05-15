import React from 'react'

import { Card } from '@/components';
import { Contents } from './components/Contents';

const Page = () => {
  return (
    <section>
      <Card>
        <div className='w-[80%]'>
          <Contents />
        </div>
      </Card>
    </section>
  )
};

export default Page;