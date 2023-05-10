import { View, Text, Heading, Button, Image} from "@aws-amplify/ui-react";
import { Authenticator, useTheme, useAuthenticator } from "@aws-amplify/ui-react";

import React from 'react'

export default function MyAuth({children}) {
  return (
    <Authenticator formFields={formFields} components={components} socialProviders={['facebook']} >
        {children}
    </Authenticator>
  )
}


const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
          width='200px'
            alt="Amplify logo"
            src="/logo.png"
          />
        </View>
      );
    },
  
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; All Rights Reserved
          </Text>
        </View>
      );
    },
  
    SignIn: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
      Footer() {
        const { toResetPassword } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toResetPassword}
              size="small"
              variation="link"
            >
              Reset Password
            </Button>
          </View>
        );
      },
    },
  
    SignUp: {
      Header() {
        const { tokens } = useTheme();
  
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Create a new account
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();
  
        return (
          <View textAlign="center">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
            >
              Back to Sign In
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    SetupTOTP: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
  };
  
  const formFields = {
    signIn: {
      username: {
        label: 'webos',
        placeholder: "Enter your emailsss",
      },
    },
    signUp: {
      password: {
        label: "Password:",
        placeholder: "Enter your Password:",
        isRequired: false,
        order: 2,
      },
      confirm_password: {
        label: "Confirm Password:",
        order: 1,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: "Enter your Password:",
      },
    },
    resetPassword: {
      username: {
        placeholder: "Enter your email:",
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: "Enter your Confirmation Code:",
        label: "New Label",
        isRequired: false,
      },
      confirm_password: {
        placeholder: "Enter your Password Please:",
      },
    },
    setupTOTP: {
      QR: {
        totpIssuer: "test issuer",
        totpUsername: "amplify_qr_test_user",
      },
      confirmation_code: {
        label: "New Label",
        placeholder: "Enter your Confirmation Code:",
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: "New Label",
        placeholder: "Enter your Confirmation Code:",
        isRequired: false,
      },
    },
  };
  