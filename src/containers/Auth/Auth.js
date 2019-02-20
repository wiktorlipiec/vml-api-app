import React from 'react';
import AuthLayout from '../../hoc/LayoutAuth/LayoutAuth';
import Warning from '../../components/Warning/Warning';

const Auth = () => (
    <AuthLayout>
        {/* Place for login */}
        <Warning warningText="You don't have access" />
    </AuthLayout>
)

export default Auth;