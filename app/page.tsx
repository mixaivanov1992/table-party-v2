import type { Metadata } from 'next';
import Layout from 'components/Layouts/Main';
import Initialization from '@hoc/Initialization';
import Header from '@components/Header/Header';
import Content from '@components/Content/Content';
import Home from '@components/Content/Home/Home';

export const metadata: Metadata = {
    title: 'Table party',
    description: 'Table party',
};

export default function Page() {
    const loading = <Layout />;
    return (
        <Initialization loading={loading}>
            <Header />
            <Content>
                <Home />
            </Content>
        </Initialization>
    );
}
