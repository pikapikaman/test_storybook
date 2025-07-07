export default {
  title: "Secrets/Leak",
  args: {
    apiKey: "sk_test_ABC123",
    jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  },
};

export const Secrets = () => <div>Look in args</div>;
