import React from "react";
import {
  Body,
  // Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  // Section,
  Text,
} from "@react-email/components";
import { IContactForm } from "@/components/contact-comps/page";

const ContactFormEmail: React.FC<IContactForm> = ({ firstName }) => {
  return (
    <>
      <Html lang="en" dir="ltr">
        <Head />
        <Preview>
          Thank you for reaching out to ISentry Technologies! We&apos;ve
          received your message and will get back to you shortly.
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
            <Text style={paragraph}>Hi {firstName},</Text>
            <Text style={paragraph}>
              Thank you for reaching out to us! We have received your message
              and will get back to you as soon as possible.
            </Text>
            <Text style={paragraph}>
              If your inquiry is urgent, please feel free to contact us directly
              at{" "}
              <Link
                style={{ textDecoration: "underline", color: "#8bb0d5" }}
                href="https://wa.link/by898v"
              >
                +2349122413819
              </Link>
              .
            </Text>
            <Text style={paragraph}>
              We appreciate your interest and look forward to assisting you.
            </Text>
            <Text style={paragraph}></Text>

            <Text style={paragraph}>
              Best,
              <br />
              The ISentry Team
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

export default ContactFormEmail;

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
