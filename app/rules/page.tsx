import React from 'react';
import Layout from 'components/Layouts/Main';
import Initialization from '@hoc/Initialization';

export const metadata = {
    title: "Rules",
    description: "",
};

const Page = (): JSX.Element => {
    const loading = <Layout />;
    return (
        <Initialization loading={loading}>
            {/* <Forgot /> */}
        </Initialization>
    );
};
  
export default Page;