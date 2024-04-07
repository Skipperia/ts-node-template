import React, { useState } from 'react';
import PageContent from '../components/PageContent/PageContent';

const HomePage: React.FC = () => {
  const pageContent = "testing3";

  return (<div>
    <PageContent pageTitle={"HomePage"} pageContent={pageContent} />
  </div>);
}

export default HomePage;
