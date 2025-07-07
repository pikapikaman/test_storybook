export default {
  title: 'XSS/<img src=x onerror=alert("title")>',
};

export const XSSStory = () => <div>XSS story</div>;
XSSStory.storyName = `<script>alert("storyName")</script>`;
