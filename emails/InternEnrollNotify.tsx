import React from "react";
import {
  Body,
  // Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  // Link,
  Preview,
  // Section,
  Text,
} from "@react-email/components";

type IForm = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
  country: string;
  track: string;
};

const InternEnrollNotify: React.FC<IForm> = ({
  firstName,
  lastName,
  email,
  message,
  phone,
  country,
  track,
}) => {
  return (
    <>
      <Html lang="en" dir="ltr">
        <Head />
        <Preview>
          A new internship application has been submitted. Name: {firstName}{" "}
          {lastName}. Email: {email}. Review now.
        </Preview>

        <Body style={main}>
          <Container style={container}>
            <Img
              src={`https://isentry.netlify.app/_next/static/media/isentry.4df0976c.svg`}
              width="170"
              height="50"
              alt="Koala"
              style={logo}
            />
            <Text style={paragraph}>Dear ISentry Team,</Text>
            <Text style={paragraph}>
              A new internship application has been submitted via the enrollment
              form. Here are the details:
            </Text>
            <Text style={paragraph}>
              <strong>Name</strong> {firstName} {lastName}
            </Text>
            <Text style={paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={paragraph}>
              <strong>Phone Number: </strong> {phone}
            </Text>
            <Text style={paragraph}>
              <strong>Country:</strong> {country}
            </Text>
            <Text style={paragraph}>
              <strong>Track:</strong> {track}
            </Text>
            <Text style={paragraph}>
              <strong>How they got information about the internship:</strong>{" "}
              {message}
            </Text>

            <Text style={paragraph}>
              Please review the submission and take appropriate action.
            </Text>

            <Text style={paragraph}>
              Best Regards,
              <br />
              ISentry Tech Website
            </Text>
            <Hr style={hr} />
            <Text style={footer}>
              470 Noor Ave STE B #1148, South San Francisco, CA 94080
            </Text>
          </Container>
        </Body>
      </Html>
    </>
  );
};

export default InternEnrollNotify;

const main = {
  backgroundColor: "#030b1b",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#fff",
};

// const btnContainer = {
//   textAlign: "center" as const,
// };

// const button = {
//   backgroundColor: "#5F51E8",
//   borderRadius: "3px",
//   color: "#fff",
//   fontSize: "16px",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   padding: "12px",
// };

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
