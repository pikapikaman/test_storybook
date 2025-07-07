export default {
  title: 'Markdown/Injection',
  parameters: {
    docs: {
      description: {
        story: `[Click me](javascript:alert('markdown'))`,
      },
    },
  },
};

export const MarkdownLink = () => <div>Markdown injection</div>;
